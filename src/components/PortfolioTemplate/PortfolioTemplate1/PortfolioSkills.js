import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { baseURL } from '../../../baseURL';
import AuthContext from '../../../context/AuthProvider';
import { COLOR_CONTEXT } from '../../../context/ColorProvider';
import FadeLoaderSpinner from '../../Spinners/FadeLoaderSpinner';


export default function PortfolioSkills() {
	const { backgroundColor, primaryColor, secondaryColor, fontColor, fileList } =
		useContext(COLOR_CONTEXT);

	const { auth } = useContext(AuthContext);

	const {
		isLoading,
		error,
		data: userSkills,
	} = useQuery({
		queryKey: ['userSkills'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/userSkills/${auth?.email}`).then((res) => res.data.data),
	});

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} color={fontColor} />{' '}
			</div>
		);
	if (error) return <div>Error</div>;

	const skills = userSkills[0]?.skills;

	return (
		<div className="w-5/6 mx-auto">
			<div>
				<section className="body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
							<h1
								style={{ color: fontColor }}
								className="sm:text-3xl text-2xl font-medium title-font mb-2 ">
								Skills
							</h1>
							<p style={{ color: secondaryColor }} className="lg:w-1/2 w-full leading-relaxed ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div className="flex flex-wrap -m-4">
							{skills?.map((skill, idx) => (
								<div key={idx} className="xl:w-1/3 md:w-1/2  p-4">
									<div className="border border-gray-200 p-6 rounded-lg">
										<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-6 h-6"
												viewBox="0 0 24 24">
												<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
											</svg>
										</div>
										<h2
											style={{ color: fontColor }}
											className="text-lg text-gray-900 font-medium title-font mb-2">
											{skill}
										</h2>
										{/* <p style={{ color: secondaryColor }} className="leading-relaxed text-base">
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
