import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleLogin = (data) => {
		console.log(data);
	};

	return (
		<main className="w-full flex justify-between h-screen items-center">
			<div className="w-[42%] bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 h-screen flex items-center justify-center flex-col gap-4">
				<h1 className="font-extrabold text-[90px] italic">PORTFOLIO</h1>
				<p className="font-semibold text-xl">Login now and create your first portfolio in minutes.</p>
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
								{...register('email', { required: 'Email is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-4  ${
									errors.email && 'focus:border-red-600'
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
								{...register('password', {
									required: 'Password is required',
									// minLength: {
									// 	value: 10,
									// 	message: 'Password must be 10 characters long',
									// },
								})}
								className={`w-full  border border-[#FFD333]  focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] rounded-[4px] py-3 px-4  ${
									errors.password && 'focus:border-red-600'
								}`}
							/>
							{errors.password && (
								<p className="text-red-600 text-left mt-1">{errors.password?.message}</p>
							)}
						</div>
						<p
							className="flex justify-end mb-5 text-[#FFBC0F] cursor-pointer">
							Forgot Password
						</p>
						<button
							type="submit"
							className="px-[20px] py-[10px] bg-[#FFD20F]  w-full font-bold">
							Login
						</button>
					</form>
					
				</div>
			</div>
		</main>
	);
};

export default Login;
