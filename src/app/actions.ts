"use server";

import { encodedRedirect } from "@/utils/utils";
import { redirect } from "next/navigation";
import { createClient } from "../../supabase/server";
import { createLead } from "@/lib/leads";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("full_name")?.toString() || "";
  const supabase = await createClient();

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        email: email,
      },
    },
  });

  if (error) {
    return encodedRedirect("error", "/sign-up", error.message);
  }

  if (user) {
    try {
      const { error: updateError } = await supabase.from("users").insert({
        id: user.id,
        user_id: user.id,
        name: fullName,
        email: email,
        token_identifier: user.id,
        created_at: new Date().toISOString(),
      });

      if (updateError) {
        // Provide more specific error message based on the actual error
        const errorMessage = updateError.message.includes('duplicate key') 
          ? 'A user with this email already exists'
          : 'Error creating user profile. Please try again.';
        
        console.error('User insert error:', updateError);
        return encodedRedirect(
          "error",
          "/sign-up",
          errorMessage,
        );
      }
    } catch (err) {
      console.error('Unexpected error during user creation:', err);
      return encodedRedirect(
        "error",
        "/sign-up",
        "An unexpected error occurred. Please try again.",
      );
    }
  }

  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link.",
  );
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {});

  if (error) {
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const checkUserSubscription = async (userId: string) => {
  const supabase = await createClient();

  const { data: subscription, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  if (error) {
    return false;
  }

  return !!subscription;
};

type LeadFormResult = {
  success?: string;
  error?: string;
};

export async function submitLeadForm(
  formData: FormData,
): Promise<LeadFormResult> {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const interestedTraining =
    formData.get("interestedTraining")?.toString() || null;

  // Validate required fields
  if (!name || !email || !phone) {
    return { error: "Please fill in all required fields." };
  }

  try {
    // Save lead data to database using CRUD utility
    const { data: lead, error } = await createLead({
      name,
      email,
      phone_number: phone,
      interested_training: interestedTraining ?? undefined,
      source: "CampaignLandingPage_SocialMedia",
    });

    if (error) {
      console.error("Error saving lead:", error);
      return { error: "Failed to save your information. Please try again." };
    }

    const supabase = await createClient();

    // Send email notification
    const { error: emailError } = await supabase.functions.invoke(
      "supabase-functions-send-lead-notification",
      {
        body: {
          name,
          email,
          phone,
          interestedTraining,
          notificationEmail: "leads@jit.edu.ph",
        },
      },
    );

    if (emailError) {
      console.error("Error sending notification email:", emailError);
      // We still return success since the lead was saved
    }

    return {
      success: "Thank you for your interest! We will be in touch shortly.",
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
