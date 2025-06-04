"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import UserProfile from "./user-profile";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-2 fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold text-blue-600">
          JIT.EDU.PH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#courses"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/#register"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Register
          </Link>

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#courses"
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/#register"
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full justify-start">Dashboard</Button>
                  </Link>
                  <div onClick={() => setIsMenuOpen(false)}>
                    <UserProfile />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="block text-gray-700 hover:text-gray-900 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
