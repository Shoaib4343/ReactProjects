import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postRegister } from '../services/prorduct';

const Register = () => {
    const [err, setErr] = useState({})
    const [registerValues, setRegisterValues] = useState({
        username: '',
        email: '',
        password: ''
    })



    // handle register input
    const handleRegisterInput = (e) => {
        setRegisterValues((pre) => (
            { ...pre, [e.target.name]: e.target.value }

        ))
    }

    const handleFormsubmit = async(e) => {
        e.preventDefault();
        const validation = {};
        if (!registerValues.username.trim()) {
            validation.username = "Username is required";
        }

        if (!registerValues.email.trim()) {
            validation.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(registerValues.email)) {
            validation.email = "Email format is invalid";
        }

        if (!registerValues.password.trim()) {
            validation.password = "Password is required";
        } else if (registerValues.password.length < 6) {
            validation.password = "Password must be at least 6 characters";
        }

        if(Object.keys(validation).length === 0){
            await postRegister(registerValues)
            setErr({})
            setRegisterValues({username: '',email: '',password: ''})
            alert("User Register Successfully")
        }else{
            setErr(validation)
        }

    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div>
                    <h2 className="text-center text-3xl font-bold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign up to get started!
                    </p>
                </div>
                <form onSubmit={handleFormsubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="john_doe"
                            className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                            value={registerValues.username}
                            onChange={handleRegisterInput}
                        />
                        {err.username && <p className="text-red-500 text-sm">{err.username}</p>}

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                            value={registerValues.email}
                            onChange={handleRegisterInput}
                        />
                        {err.email && <p className="text-red-500 text-sm">{err.email}</p>}

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                            value={registerValues.password}
                            onChange={handleRegisterInput}
                        />
                        {err.password && <p className="text-red-500 text-sm">{err.password}</p>}

                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer" 
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Already have an account? <span className="text-indigo-600 hover:underline cursor-pointer"><Link to={'/login'}>Sign in</Link></span>
                </p>
            </div>
        </div>
    );
};

export default Register;
