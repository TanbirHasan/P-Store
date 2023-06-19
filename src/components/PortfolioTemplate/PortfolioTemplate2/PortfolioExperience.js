import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { baseURL } from '../../../baseURL';
import AuthContext from '../../../context/AuthProvider';
import FadeLoaderSpinner from '../../Spinners/FadeLoaderSpinner';

const PortfolioExperience = () => {
	const { auth } = useContext(AuthContext);

	const {
		isLoading,
		error,
		data: userExperience,
	} = useQuery({
		queryKey: ['userExperience'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/userExperienceInfo/${auth?.email}`).then((res) => res.data.data),
	});

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} color={'#FFE569'} />{' '}
			</div>
		);
	if (error) return <div>Error</div>;

	return (
		<div className="p-10">
			<ul
				aria-label="Changelog feed"
				role="feed"
				className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 ">
				{userExperience?.map((exp) => (
					<li
						key={exp._id}
						role="article"
						className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
						<div className="flex flex-col flex-1">
							<h4 className="text-lg font-medium text-emerald-500 m-0">{exp.position} </h4>
							<p className="text-base font-medium leading-5 text-slate-500">
								{exp.companyName} - {exp.employmentType}
							</p>
							<p className="">
								<span className="text-sm font-normal text-slate-500">
									{' '}
									{exp.startDate} - <span>{`${!exp.showEndDate ? exp.endDate : 'Present'}`}</span>
								</span>
							</p>
							<p className=" text-slate-500 mt-5">{exp.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PortfolioExperience;
