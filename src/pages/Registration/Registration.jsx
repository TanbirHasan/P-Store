import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BACKEND_URI } from "../../config/contants";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URI}/api/v1/register`,
        JSON.stringify({
          username: data.name,
          email: data.email,
          password: data.password,
        }),
        {
          
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      alert("Registration completed successfully")

      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="w-full flex justify-between h-screen items-center">
      <div className="w-[42%] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="font-extrabold text-[90px] italic">PORTFOLIO</h1>
        <p className="font-semibold text-xl">
          Register now and create your first portfolio in minutes.
        </p>
      </div>
      <div className="flex-grow  relative h-screen flex items-center justify-center flex-col">
        <div className="w-[70%] mx-auto pt-16">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="bg-white py-5 px-10"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block text-left">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] rounded-[4px] py-3 px-4 ${
                  errors.name && "focus:border-red-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-left mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-left">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-4  ${
                  errors.email && "focus:border-red-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-left mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block text-left">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  // minLength: {
                  // 	value: 10,
                  // 	message: 'Password must be 10 characters long',
                  // },
                })}
                className={`w-full  border border-[#FFD333]  focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] rounded-[4px] py-3 px-4  ${
                  errors.password && "focus:border-red-600"
                }`}
              />
              {errors.password && (
                <p className="text-red-600 text-left mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="px-[20px] py-[10px] bg-[#FFD20F]  w-full font-bold"
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
          <div className="w-full flex justify-end px-10">
            <p>
              Already registered?
              <Link to="/login" className="text-blue-700">
                Login into your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
