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
		<div class="bg-gray-800 overflow-hidden relative flex items-center justify-between flex-col sm:flex-row px-10 h-[calc(100vh_-_88px)]">
			<div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
				<h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
					<span class="block">Hi, I am {userInfo?.name}</span>
					<span class="block text-indigo-500"> Passionate {userInfo?.title}</span>
				</h2>
				<p class="text-xl mt-4 text-gray-400">{userInfo?.about}</p>
			</div>
			<div className="">
				{fileList[0]?.thumbUrl ? (
					<img src={fileList[0]?.thumbUrl} alt="" className="w-[300px] h-[300px] mx-auto" />
				) : (
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80"
						className="w-[300px] h-[300px] mx-auto"
						alt="person"
					/>
				)}
			</div>
		</div>
	);
};

export default PortfolioAbout;
