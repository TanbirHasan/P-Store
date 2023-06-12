import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { baseURL } from '../../../baseURL';
import AuthContext from '../../../context/AuthProvider';
import { COLOR_CONTEXT } from '../../../context/ColorProvider';
import FadeLoaderSpinner from '../../Spinners/FadeLoaderSpinner';

const PortfolioAbout = () => {
	const { backgroundColor, primaryColor, secondaryColor, fontColor, fileList } =
		useContext(COLOR_CONTEXT);

	const { auth } = useContext(AuthContext);

	// axios

	const {
		isLoading,
		error,
		data: userInfo,
	} = useQuery({
		queryKey: ['userInfo'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/usersBasicInfo/${auth?.email}`).then((res) => res.data.data),
	});

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} />{' '}
			</div>
		);

	if (error) return <div>Error</div>;

	return (
		<section className="py-14">
			<div className="max-w-screen-xl mx-auto md:px-8">
				<div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
					<div className="flex-1 sm:hidden lg:block">
						{fileList[0]?.thumbUrl ? (
							<img
								src={fileList[0]?.thumbUrl}
								alt=""
								className="w-[500px] h-[384px] mx-auto md:max-w-lg sm:rounded-lg"
							/>
						) : (
							<img
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								className="md:max-w-lg sm:rounded-lg"
								alt=""
							/>
						)}
					</div>
					<div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
						<h3 className="text-indigo-600 text-3xl font-semibold sm:text-4xl">{userInfo?.name}</h3>
						<p className="text-gray-800 text-xl font-semibold">
							A passionate {userInfo?.title}
						</p>
						<p className="mt-3 text-gray-600">{userInfo?.about}</p>
						<button className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
							Learn more
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5">
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioAbout;
