import React from 'react';

const PortfolioContact = () => {
	return (
		<div className="h-[calc(100vh_-_88px)]">
			<section className="">
				<div className="container px-6 py-12 mx-auto">
					<div className="lg:flex lg:items-center lg:-mx-6 justify-center">
						<div className="mt-8 lg:w-1/2 mx-auto lg:mx-6 flex justify-center">
							<div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
								<h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
									Contact us for more info
								</h1>

								<form className="mt-6">
									<div className="flex-1">
										<label className="block mb-2 text-sm text-emerald-500">Full Name</label>
										<input
											type="text"
											placeholder="John Doe"
											className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>

									<div className="flex-1 mt-6">
										<label className="block mb-2 text-sm text-emerald-500">Email address</label>
										<input
											type="email"
											placeholder="johndoe@example.com"
											className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>

									<div className="w-full mt-6">
										<label className="block mb-2 text-sm text-emerald-500">Message</label>
										<textarea
											className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
											placeholder="Message"></textarea>
									</div>

									<button
										className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-md hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
										type="submit">
										get in touch
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioContact;
