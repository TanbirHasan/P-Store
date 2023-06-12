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
    if (error) return <div>{ error.message }</div>;

	return (
		<div className="max-w-7xl mx-auto p-10mx-auto px-4 md:px-8 pb-20 h-[calc(100vh_-_88px)] space-y-10">
			<h1>Education</h1>

			{userEducationInfo.map((item) => (
				<div
					key={item._id}
					className="w-full px-8 py-4 bg-white rounded-lg shadow-md ">
					<div className="flex items-center justify-between">
						<span className="text-sm font-light text-gray-600 dark:text-gray-400">
							{item.startDate} - {item.endDate}
						</span>
					</div>

					<div className="mt-2">
						<div className="flex-1">
							<h3 className="text-xl font-medium text-cyan-600">{item.instituteName}</h3>
							<p className="text-gray-500 mt-2 pr-2">{item.degree}</p>
							<p className="text-gray-500 mt-2 pr-2">Grade = {item.grade}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PortfolioEducation;
