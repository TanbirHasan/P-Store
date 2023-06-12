import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { baseURL } from '../../../baseURL';
import AuthContext from '../../../context/AuthProvider';
import FadeLoaderSpinner from '../../Spinners/FadeLoaderSpinner';

const PortfolioSkills = () => {
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
				<FadeLoaderSpinner size={150} />{' '}
			</div>
		);
	if (error) return <div>Error</div>;

	const skills = userSkills[0]?.skills;

	return (
		<div className='h-[calc(100vh_-_88px)] flex items-center justify-center flex-col'>
			<div className="text-center my-10">
				<h1 className="text-4xl  font-bold text-blue-700">Skills</h1>
				<p className="font-semibold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, eos. lore10
				</p>
			</div>
			<section className="px-4 py-12 mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
					{skills?.map((skill, idx) => (
						<div key={idx} className="card border border-blue-300 text-center p-4 rounded-lg shadow-inner shadow-blue-300">
							<div className="p-5">
								<h2 className="text-3xl font-extrabold leading-none text-blue-800 ">
									{skill}
								</h2>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default PortfolioSkills;
