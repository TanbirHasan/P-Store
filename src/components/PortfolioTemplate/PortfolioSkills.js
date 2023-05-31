import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { baseURL } from '../../baseURL';
import { COLOR_CONTEXT } from '../../context/ColorProvider';
import FadeLoaderSpinner from '../Spinners/FadeLoaderSpinner';

export default function PortfolioSkills() {
	const { backgroundColor, primaryColor, secondaryColor, fontColor, fileList } =
		useContext(COLOR_CONTEXT);

	const {
		isLoading,
		error,
		data: userSkills,
	} = useQuery({
		queryKey: ['userSkills'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/userSkills/sajid@gmail.com`).then((res) => res.data.data),
	});

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} color={fontColor} />{' '}
			</div>
		);
	if (error) return <div>Error</div>;

	const skills = userSkills[0].skills;

	return (
		<div className="w-5/6 mx-auto">
			<div>
				<section class="body-font">
					<div class="container px-5 py-24 mx-auto">
						<div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
							<h1
								style={{ color: fontColor }}
								class="sm:text-3xl text-2xl font-medium title-font mb-2 ">
								Skills
							</h1>
							<p style={{ color: secondaryColor }} class="lg:w-1/2 w-full leading-relaxed ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div class="flex flex-wrap -m-4">
							{skills.map((skill, idx) => (
								<div key={idx} class="xl:w-1/3 md:w-1/2  p-4">
									<div class="border border-gray-200 p-6 rounded-lg">
										<div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												class="w-6 h-6"
												viewBox="0 0 24 24">
												<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
											</svg>
										</div>
										<h2
											style={{ color: fontColor }}
											class="text-lg text-gray-900 font-medium title-font mb-2">
											{skill}
										</h2>
										{/* <p style={{ color: secondaryColor }} class="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
										</p> */}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
