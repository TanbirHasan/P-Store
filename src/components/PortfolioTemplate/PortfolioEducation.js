import React, { useContext } from 'react';
import { COLOR_CONTEXT } from '../../context/ColorProvider';

const PortfolioEducation = () => {
	const { backgroundColor, primaryColor, secondaryColor, fileList, fontColor } =
		useContext(COLOR_CONTEXT);

	const jobs = [
		{
			title: 'Bangladesh School Muscat',
			desc: 'Bangladesh School Muscat is a school for Bangladeshi children in Oman. The institute follows the British Curriculum.',
			date: 'May 17, 2006 - May 17, 2017',
		},
		{
			title: 'Sunshine Grammar School',
			desc: 'Sunshine Grammar School is a British curriculum school located in Chittagong, Bangladesh. The school provides lessons in Edexcel and Cambridge International Examinations for IGCSE and A Levels.',
			date: 'May 17, 2018 - Dec 17, 2018',
		},
		{
			title: 'The DUX',
			desc: 'The Dux School Opens A World Of Opportunity For Chattogram Students By Providing Them With A Superior Education In The Bangladesh, Through Preparation, For National And International University And A Future That Knows No Borders.',
			date: 'Dec 17, 2018 - Nov 17, 2019',
		},
	];

	return (
		<section
			style={{ backgroundColor: backgroundColor, color: fontColor}}
			className=" mx-auto px-4 md:px-8 pb-20">
			<ul className="p-10 space-y-10 max-w-screen-lg mx-auto pt-20">
				{jobs.map((item, idx) => (
					<li key={idx} className="p-5 bg-white rounded-md shadow-sm">
						<div>
							<div className="justify-between sm:flex">
								<div className="flex-1">
									<h3 className="text-xl font-medium text-cyan-600">{item.title}</h3>
									<p className="text-gray-500 mt-2 pr-2">{item.desc}</p>
								</div>
								<div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
									<span className="flex items-center text-gray-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
												clipRule="evenodd"
											/>
										</svg>
										{item.date}
									</span>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default PortfolioEducation;
