import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URI } from "../../config/contants";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { setAuth } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleLogin = async (data) => {
		const { email, password } = data;
		setIsLoading(true);

		try {
			const response = await axios.post(
				`${BACKEND_URI}/api/v1/login`,
				JSON.stringify({
					email: data.email.toLowerCase(),
					password: data.password,
				}),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);

			console.log("Login successful:", response?.data);
			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			setAuth({ email, password, accessToken, roles });

			reset();
			navigate("/dashboard");
		} catch (err) {
			if (!err?.response) {
				alert("No Server Response");
			} else if (err.response?.status === 400) {
				alert("Missing Username or Password");
			} else if (err.response?.status === 401) {
				alert("Unauthorized");
			} else {
				alert("Login Failed");
			}
		}

		setIsLoading(false);
	};

	return (
		<main className="w-full flex justify-between h-screen items-center">
			<div className="w-[42%] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 h-screen flex items-center justify-center flex-col gap-4">
				<h1 className="font-extrabold text-[90px] italic">PORTFOLIO</h1>
				<p className="font-semibold text-xl">
					Login now and create your first portfolio in minutes.
				</p>
			</div>
			<div className="flex-grow  relative h-screen flex items-center justify-center flex-col">
				<div className="w-[70%] mx-auto pt-16">
					<form onSubmit={handleSubmit(handleLogin)} className="bg-white py-5 px-10">
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
								<p className="text-red-600 text-left mt-1">{errors.email?.message}</p>
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
								<p className="text-red-600 text-left mt-1">{errors.password?.message}</p>
							)}
						</div>
						<p className="flex justify-end my-5 text-[#FFBC0F] cursor-pointer">Forgot Password</p>
						<button type="submit" className="px-[20px] py-[10px] bg-[#FFD20F] my-2 w-full font-bold">
							{isLoading ? "Logging in..." : "Login"}
						</button>
					</form>
					<div className="w-full flex justify-end px-10">
						<p>
							New Here?{" "}
							<Link to="/register" className="text-blue-700">
								Create new Account
							</Link>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;
