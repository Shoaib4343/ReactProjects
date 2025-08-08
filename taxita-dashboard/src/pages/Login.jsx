// Login.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";

/**
 * Production-ready Login component
 * - Requires Tailwind CSS + react-icons
 * - Replace `fakeSignIn` with your real API call
 */

const fakeSignIn = async (payload) => {
  // Simulate network latency & possible error
  await new Promise((r) => setTimeout(r, 900));
  if (payload.email === "blocked@example.com") {
    const err = new Error("Account blocked");
    err.status = 403;
    throw err;
  }
  // Return a mock token/user
  return { token: "mock-jwt-token", user: { email: payload.email } };
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = async (data) => {
    setServerError("");
    // Normalize email (recommended)
    const payload = {
      ...data,
      email: data.email.trim().toLowerCase(),
    };

    try {
      const res = await fakeSignIn(payload);
      // TODO: handle token, redirect, set auth state
      console.log("SIGNED IN:", res);
      // Example: localStorage.setItem("token", res.token) if remember === true
    } catch (err) {
      // Map server errors to form fields if applicable
      if (err.status === 403) {
        setError("email", {
          type: "server",
          message: "Account access blocked.",
        });
      } else {
        setServerError(err.message || "Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden transform transition hover:shadow-xl">
          {/* Optional top accent bar used by many enterprise apps */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          <div className="p-8">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center">
              Sign in
            </h1>
            <p className="mt-2 text-center text-sm text-slate-500">
              Enter your credentials to access your account
            </p>
            {/* Server-level error area (for general errors) */}
            <div role="status" aria-live="polite" className="mt-4">
              {serverError && (
                <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-md border border-red-100">
                  {serverError}
                </div>
              )}
            </div>
            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-6 space-y-5"
              aria-describedby={serverError ? "server-error" : undefined}
            >
              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <div
                  className={`mt-1 flex items-center gap-3 rounded-lg border px-3 py-2 transition-shadow ${
                    errors.email
                      ? "border-red-400 focus-within:ring-1 focus-within:ring-red-300"
                      : "border-slate-200 focus-within:ring-1 focus-within:ring-blue-200"
                  }`}
                >
                  <FaEnvelope className="text-slate-400" aria-hidden />
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <div
                  className={`mt-1 flex items-center gap-3 rounded-lg border px-3 py-2 transition-shadow ${
                    errors.password
                      ? "border-red-400 focus-within:ring-1 focus-within:ring-red-300"
                      : "border-slate-200 focus-within:ring-1 focus-within:ring-blue-200"
                  }`}
                >
                  <FaLock className="text-slate-400" aria-hidden />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Your password"
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-describedby={
                      errors.password ? "password-error" : undefined
                    }
                    className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((s) => !s)}
                    className="text-slate-500 hover:text-slate-700 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p
                    id="password-error"
                    role="alert"
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Row: remember + forgot */}
              <div className="flex items-center justify-between gap-4">
                <label className="inline-flex items-center text-sm gap-2">
                  <input
                    type="checkbox"
                    {...register("remember")}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-600">Remember me</span>
                </label>

                <div className="text-sm">
                  {/* // Forgot password link */}
                  <Link
                    to="/forgot-password"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white font-medium shadow-sm disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {isSubmitting ? (
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : null}
                  {isSubmitting ? "Signing in…" : "Sign in"}
                </button>
              </div>
            </form>
            {/* OR divider */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm text-slate-400">or continue with</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            {/* Social logins */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => console.log("Google login")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") console.log("Google login");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:shadow-sm focus:outline-none"
                aria-label="Continue with Google"
              >
                <FcGoogle className="h-5 w-5" aria-hidden />
                <span>Google</span>
              </button>

              <button
                onClick={() => console.log("Facebook login")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") console.log("Facebook login");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1877F2] px-3 py-2 text-sm text-white hover:brightness-95 focus:outline-none"
                aria-label="Continue with Facebook"
              >
                <FaFacebookF className="h-4 w-4" aria-hidden />
                <span>Facebook</span>
              </button>
            </div>
            {/* // Create account link */}
            <p className="mt-6 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/dashboard/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* Subtle footer for spacing on small screens */}
        <div className="mt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} YourCompany — All rights reserved
        </div>
      </div>
    </div>
  );
}
