import React from 'react';

const PortfolioContact = () => {
	return (
		<div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
				</div>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvZynJsXUr3UjXi_yABoqhHmKtEAKjt57iDcW5zD2CA&s"
					alt=""
					className="w-[500px]"
				/>
			</div>
			<form className="space-y-6 mt-[150px]">
				<div>
					<label for="name" className="text-sm">
						Full name
					</label>
					<input
						id="name"
						type="text"
						placeholder=""
						className="w-full p-3 rounded dark:bg-gray-800"
					/>
				</div>
				<div>
					<label for="email" className="text-sm">
						Email
					</label>
					<input
						id="email"
						type="email"
						className="w-full p-3 rounded dark:bg-gray-800"
						data-temp-mail-org="1"
					/>
				</div>
				<div>
					<label for="message" className="text-sm">
						Message
					</label>
					<textarea
						id="message"
						rows="3"
						className="w-full p-3 rounded dark:bg-gray-800"
						data-gramm="false"
						wt-ignore-input="true"></textarea>
				</div>
				<button
					type="submit"
					className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-600 text-gray-900">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default PortfolioContact;
