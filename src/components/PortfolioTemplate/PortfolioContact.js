import React, { useContext } from 'react';
import { COLOR_CONTEXT } from '../../context/ColorProvider';

const PortfolioContact = () => {
	const { backgroundColor, primaryColor, secondaryColor, fileList, fontColor } =
		useContext(COLOR_CONTEXT);

	return (
		<main
			style={{
				backgroundColor: primaryColor,
				color: fontColor,
				border: `1px solid ${backgroundColor}`,
			}}
			className="py-14 bg-white">
			<div className="max-w-screen-xl mx-auto px-4  md:px-8">
				<div className="max-w-lg mx-auto space-y-3 sm:text-center">
					<h3 className="text-indigo-600 font-semibold">Contact</h3>
					<p className=" text-3xl font-semibold sm:text-4xl">Get in touch</p>
					<p>
						if you have any questions or concerns about my work, please feel free to contact me.
					</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto">
					<form onSubmit={(e) => e.preventDefault()} className="space-y-5">
						<div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
							<div>
								<label className="font-medium">First name</label>
								<input
									type="text"
									required
									className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
								/>
							</div>
							<div>
								<label className="font-medium">Last name</label>
								<input
									type="text"
									required
									className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
								/>
							</div>
						</div>
						<div>
							<label className="font-medium">Email</label>
							<input
								type="email"
								required
								className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
							/>
						</div>

						<div>
							<label className="font-medium">Message</label>
							<textarea
								required
								className={`w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border ring-transparent shadow-sm rounded-lg`}></textarea>
						</div>
						<button
							style={{ backgroundColor: fontColor, color: primaryColor }}
							className="w-full px-4 py-2  font-medium  rounded-lg duration-150">
							Submit
						</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default PortfolioContact;
