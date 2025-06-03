// Follow Deno deploy instructions: https://deno.com/deploy/docs

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, interestedTraining, notificationEmail } =
      await req.json();

    // Validate required fields
    if (!name || !email || !phone || !notificationEmail) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    // Format the training interest text
    const trainingText = interestedTraining
      ? `Training Interest: ${formatTrainingName(interestedTraining)}`
      : "No specific training selected";

    // Send email using Supabase Edge Function
    const emailSent = await sendEmail(
      notificationEmail,
      "New Lead from JIT.EDU.PH Training Campaign",
      `
New lead information:

Name: ${name}
Email: ${email}
Phone: ${phone}
${trainingText}

This lead was captured from the JIT.EDU.PH Training Campaign Landing Page.
      `,
    );

    return new Response(
      JSON.stringify({ success: true, message: "Notification email sent" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error processing request:", error);

    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});

// Helper function to format training name from slug
function formatTrainingName(slug: string): string {
  const trainingMap: Record<string, string> = {
    "low-code-no-code": "Low-Code/No-Code using Bubbi.io",
    "leading-safe": "Leading SAFe",
    "web-development": "Web Development with Bubbio.io",
    sitecore: "Introduction to Sitecore Fundamentals",
    "prompt-engineering": "Introduction to Prompt Engineering",
  };

  return trainingMap[slug] || slug;
}

// Simple email sending function
async function sendEmail(
  to: string,
  subject: string,
  body: string,
): Promise<boolean> {
  // In a real implementation, you would integrate with an email service like SendGrid, Mailgun, etc.
  // For this example, we'll just log the email and return success
  console.log(`Email would be sent to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);

  // Simulate successful email sending
  return true;
}
