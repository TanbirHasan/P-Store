import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { baseURL } from '../../baseURL';
import { COLOR_CONTEXT } from './../../context/ColorProvider';

const stats = [
	{
		data: '35K',
		title: 'Customers',
	},
	{
		data: '40+',
		title: 'Countries',
	},
	{
		data: '30M+',
		title: 'Total revenue',
	},
];

export default function PortfolioAbout() {
	const { backgroundColor, primaryColor, secondaryColor, fontColor, fileList } =
		useContext(COLOR_CONTEXT);

	const [file, setFile] = useState();

	// axios

	const {
		isLoading,
		error,
		data: userInfo,
	} = useQuery({
		queryKey: ['userInfo'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/usersBasicInfo/sajid@gmail.com`).then((res) => res.data.data),
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;

	const { about, name, image } = userInfo;

	// const imageURL = window.URL.createObjectURL(image[0])
	// console.log(imageURL);

	return (
		<div className="">
			<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 mx-auto lg:w-5/6 my-20">
				<div className="p-5 lg:w-2/4 mx-auto text-center md:text-left">
					{/* Here name , designation will be dynamic */}
					<h4>Hello</h4>
					<h2 className="text-3xl">I'm {name}</h2>
					<h3 className="text-xl">A passionate {}</h3>
					<p>{about}</p>
				</div>
				<div className="lg:w-2/4 mx-auto justify-center">
					{fileList[0]?.thumbUrl ? (
						<img src={fileList[0]?.thumbUrl} alt="" className="w-[300px] h-[300px] mx-auto" />
					) : (
						<img
							src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80"
							className="w-[300px] h-[300px] mx-auto"
							alt="person"
						/>
					)}
					{/* <img src={imageURL} alt="" className="w-[300px] h-[300px] mx-auto" /> */}
				</div>
			</div>
			<section style={{ backgroundColor: primaryColor }} className="py-28 ">
				<div className="max-w-screen-xl mx-auto px-4 md:px-8">
					<div className="max-w-2xl mx-auto text-center">
						<h3 className="text-white text-3xl font-semibold sm:text-4xl">
							Our customers are always happy
						</h3>
						<p className="mt-3 text-gray-300">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin
							quam ut tincidunt.
						</p>
					</div>
					<div className="mt-12">
						<ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
							{stats.map((item, idx) => (
								<li
									key={idx}
									className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
									<h4 className="text-4xl text-white font-semibold">{item.data}</h4>
									<p className="mt-3 text-gray-400 font-medium">{item.title}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
