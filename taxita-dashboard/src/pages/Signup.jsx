import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaHome,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // Call your API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign up to get started with our services
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Full Name
              </label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              >
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full outline-none bg-transparent"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Phone Number
              </label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              >
                <FaPhone className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="w-full outline-none bg-transparent"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s()]*$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              >
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full outline-none bg-transparent"
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Password
              </label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              >
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full outline-none bg-transparent"
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Confirm Password
            </label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full outline-none bg-transparent"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Row 4: Address (Full Width) */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Address
            </label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            >
              <FaHome className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="123 Main St, City, Country"
                className="w-full outline-none bg-transparent"
                {...register("address", {
                  required: "Address is required",
                  minLength: {
                    value: 5,
                    message: "Enter a valid address",
                  },
                })}
              />
            </div>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            {isSubmitting && (
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a href="/dashboard/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Signup */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition font-medium">
            <FcGoogle className="text-xl" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#145dbf] text-white rounded-lg py-2 transition font-medium">
            <FaFacebookF className="text-lg" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
