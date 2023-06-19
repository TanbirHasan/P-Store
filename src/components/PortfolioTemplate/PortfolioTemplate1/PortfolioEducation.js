import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { baseURL } from '../../../baseURL';
import AuthContext from '../../../context/AuthProvider';
import { COLOR_CONTEXT } from '../../../context/ColorProvider';
import FadeLoaderSpinner from '../../Spinners/FadeLoaderSpinner';


const PortfolioEducation = () => {
	const { backgroundColor, primaryColor, secondaryColor, fileList, fontColor } =
		useContext(COLOR_CONTEXT);

	const { auth } = useContext(AuthContext);

	const {
		isLoading,
		error,
		data: userEducationInfo,
	} = useQuery({
		queryKey: ['userEducationInfo'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/usersEducationInfo/${auth?.email}`).then((res) => res.data.data),
	});

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} color={fontColor} />{' '}
			</div>
		);
	if (error) return <div>Error</div>;

	return (
		<section
			style={{ backgroundColor: backgroundColor, color: fontColor }}
			className=" mx-auto px-4 md:px-8 pb-20 h-[calc(100vh_-_81px)]">
			<ul className="p-10 space-y-10 max-w-screen-lg mx-auto pt-20">
				{userEducationInfo?.map((item, idx) => (
					<li key={item._id} className="p-5 bg-white rounded-md shadow-sm">
						<div>
							<div className="justify-between sm:flex">
								<div className="flex-1">
									<h3 className="text-xl font-medium text-cyan-600">{item.instituteName}</h3>
									<p className="text-gray-500 mt-2 pr-2">{item.degree}</p>
									<p className="text-gray-500 mt-2 pr-2">Grade = {item.grade}</p>
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
										{item.startDate} - {item.endDate}
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
