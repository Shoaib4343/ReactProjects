import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postLogin } from "../services/prorduct";

const Login = () => {
  const [err, seterr] = useState({});
  const [loginInput, SetLoginInput] = useState({
    username: "",
    password: "",
  });

  // handle Login Input
  const handleLoginInput = (e) => {
    SetLoginInput((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  // handle form submit
  const handleFormsubmit = async (e) => {
    e.preventDefault();
    let validation = {};
    if (!loginInput.username.trim()) {
      validation.username = "username field is required";
    } 

    if (!loginInput.password.trim()) {
      validation.password = "Password field is required";
    } else if (loginInput.password.length < 6) {
      validation.password = "Password must be at least 6 characters";
    }
    if (Object.keys(validation).length === 0) {
      try {
        await postLogin(loginInput);
        alert("login succesfully");
        SetLoginInput({ username: "", password: "" });
        seterr({});
      } catch (error) {
        console.log(error);
      }
    } else {
      seterr(validation);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
        <form onSubmit={handleFormsubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="you@example.com"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={loginInput.username}
              onChange={handleLoginInput}
            />
            {err.username && <p className="text-red-500 text-sm">{err.username}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={loginInput.password}
              onChange={handleLoginInput}
            />
            {err.password && (
              <p className="text-red-500 text-sm">{err.password}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span className="text-indigo-600 hover:underline cursor-pointer">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
