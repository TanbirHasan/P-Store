import React from 'react';
import portfolio1 from '../../../../assets/images/portfolio-1.svg';
import portfolio2 from '../../../../assets/images/portfolio-2.svg';
import AllPortfolios from '../AllPortfolios/AllPortfolios';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminHome = () => {
	const [showAllPortfolios, setShowAllPortfolios] = useState(false);

	useEffect(() => {
		const showAllPortfolios = localStorage.getItem('ShowAllPortfolio');
		const parsedAllPortfolios = JSON.parse(showAllPortfolios);
		setShowAllPortfolios(parsedAllPortfolios);
	}, []);

	return (
		<>
			{showAllPortfolios ? (
				<AllPortfolios setShowAllPortfolios={setShowAllPortfolios} />
			) : (
				<div>
					<h1 className="leading-9 text-3xl">
						Welcome to Our <span className="font-extrabold text-[#FFBC0F]">Portfolio</span> WebSite
					</h1>

					<div className="flex gap-8 my-8 ">
						<div className="bg-[#1970FE] text-white py-5 px-7 w-full h-[132px] rounded-[3px] flex items-center gap-7">
							<div className="w-[92px] h-[92px] border-[10px] border-white rounded-full"></div>
							<div className="font-bold leading-7">
								<h1 className="text-[30px] mb-2">20</h1>
								<h1 className="text-[25px] font-medium">Portfolios</h1>
							</div>
						</div>
						<div className="bg-[#FF3C3C] text-white py-5 px-7 w-full h-[132px] rounded-[3px] flex items-center gap-7">
							<div className="w-[92px] h-[92px] border-[10px] border-white rounded-full"></div>
							<div className="font-bold leading-7">
								<h1 className="text-[30px] mb-2">20</h1>
								<h1 className="text-[25px] font-medium">Webcasts</h1>
							</div>
						</div>
					</div>

					<div className="flex justify-between text-[24px] leading-6 font-medium mb-12">
						<h1>Latest Created Portfolio</h1>
						<h1
							onClick={() => {
								setShowAllPortfolios(true);
								localStorage.setItem('ShowAllPortfolio', true);
							}}
							className="text-[#FF3C3C] underline underline-offset-1 cursor-pointer">
							Show all portfolio
						</h1>
					</div>

					{/* Portal cards */}
					<div className="grid grid-cols-2 gap-x-4 gap-y-8">
						<div className="flex items-center p-4 border border-[#ffbc0f7f] shadow-custom gap-6 w-full">
							<img src={portfolio1} alt="" className="" />

							<div>
								<h1 className="text-[24px] font-bold mb-2">Portfolio Name</h1>
								<h1 className="text-[20px] mb-3">Unpublished</h1>
								<div className="space-x-5">
									<button className="rounded-[3px] border border-[#FFBC0F] px-[6px] py-[4px]">
										Go to portfolio
									</button>
									<button className="rounded-[3px] border border-[#FF3C3C] px-[6px] py-[4px]">
										Metrics
									</button>
									<button className="rounded-[3px] border border-[#1970FE] px-[6px] py-[4px]">
										Edit
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center p-4 border border-[#ffbc0f7f] shadow-custom gap-6 w-full">
							<img src={portfolio2} alt="" className="" />

							<div>
								<h1 className="text-[24px] font-bold mb-2">Portfolio Name</h1>
								<h1 className="text-[20px] mb-3 font-medium text-[#FFBC0F]">Published</h1>
								<div className="space-x-5">
									<button className="rounded-[3px] border bg-[#FFBC0F] px-[6px] py-[4px]">
										Go to portfolio
									</button>
									<button className="rounded-[3px] border bg-[#FF3C3C] text-white px-[6px] py-[4px]">
										Metrics
									</button>
									<button className="rounded-[3px] border bg-[#1970FE] text-white px-[6px] py-[4px]">
										Edit
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center p-4 border border-[#ffbc0f7f] shadow-custom gap-6 w-full">
							<img src={portfolio1} alt="" className="" />

							<div>
								<h1 className="text-[24px] font-bold mb-2">Portfolio Name</h1>
								<h1 className="text-[20px] mb-3">Unpublished</h1>
								<div className="space-x-5">
									<button className="rounded-[3px] border border-[#FFBC0F] px-[6px] py-[4px]">
										Go to portfolio
									</button>
									<button className="rounded-[3px] border border-[#FF3C3C] px-[6px] py-[4px]">
										Metrics
									</button>
									<button className="rounded-[3px] border border-[#1970FE] px-[6px] py-[4px]">
										Edit
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center p-4 border border-[#ffbc0f7f] shadow-custom gap-6 w-full">
							<img src={portfolio2} alt="" className="" />

							<div>
								<h1 className="text-[24px] font-bold mb-2">Portfolio Name</h1>
								<h1 className="text-[20px] mb-3 font-medium text-[#FFBC0F]">Published</h1>
								<div className="space-x-5">
									<button className="rounded-[3px] border bg-[#FFBC0F] px-[6px] py-[4px]">
										Go to portfolio
									</button>
									<button className="rounded-[3px] border bg-[#FF3C3C] text-white px-[6px] py-[4px]">
										Metrics
									</button>
									<button className="rounded-[3px] border bg-[#1970FE] text-white px-[6px] py-[4px]">
										Edit
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center p-4 border border-[#ffbc0f7f] shadow-custom gap-6 w-full">
							<img src={portfolio1} alt="" className="" />

							<div>
								<h1 className="text-[24px] font-bold mb-2">Portfolio Name</h1>
								<h1 className="text-[20px] mb-3">Unpublished</h1>
								<div className="space-x-5">
									<button className="rounded-[3px] border border-[#FFBC0F] px-[6px] py-[4px]">
										Go to portfolio
									</button>
									<button className="rounded-[3px] border border-[#FF3C3C] px-[6px] py-[4px]">
										Metrics
									</button>
									<button className="rounded-[3px] border border-[#1970FE] px-[6px] py-[4px]">
										Edit
									</button>
								</div>
							</div>
						</div>
						<div className="flex items-center p-4 border border-[#ffbc0f7f] shadow-custom gap-6 w-full">
							<img src={portfolio2} alt="" className="" />

							<div>
								<h1 className="text-[24px] font-bold mb-2">Portfolio Name</h1>
								<h1 className="text-[20px] mb-3 font-medium text-[#FFBC0F]">Published</h1>
								<div className="space-x-5">
									<button className="rounded-[3px] border bg-[#FFBC0F] px-[6px] py-[4px]">
										Go to portfolio
									</button>
									<button className="rounded-[3px] border bg-[#FF3C3C] text-white px-[6px] py-[4px]">
										Metrics
									</button>
									<button className="rounded-[3px] border bg-[#1970FE] text-white px-[6px] py-[4px]">
										Edit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AdminHome;
