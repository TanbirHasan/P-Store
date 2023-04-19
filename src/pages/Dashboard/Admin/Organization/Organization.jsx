import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import portfolio1 from '../../../../assets/images/portfolio-1.svg';
import portfolio2 from '../../../../assets/images/portfolio-2.svg';

const Organization = () => {
	const [names, setNames] = useState('');

	

	return (
		<div>
			<div className="flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
				<div className="lg:w-[50%]">
					<h1 className="text-3xl leading-9 font-bold ">Organization</h1>
				</div>
				<div className="flex items-center gap-3 md:gap-11 flex-col md:flex-row">
					<div>
						<h1 className="text-2xl leading-9 font-medium">QA Test-</h1>
					</div>
					<div className="lg:w-[300px]">
						<FormControl sx={{ width: '300px' }}>
							<Select
								// IconComponent={() => <Person color='secondary' sx={{mr: 2}} />}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={names}
								displayEmpty
								className="custom-input"
								sx={{ textAlign: 'left' }}
								onChange={(event)=>setNames(event.target.value)}>
								<MenuItem value="">Tanbir</MenuItem>
								<MenuItem value={'sajid'}>Sajid</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
			</div>

			<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

			{/* Search Users field */}
			<div className="flex items-center justify-between mb-14">
				<h1 className="text-xl leading-9 font-normal">Portfolios</h1>

				<div className="flex items-center relative ">
					<input
						type="text"
						placeholder="Search Users"
						className="w-[253px] h-[40px] bg-[#FFF4D9] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333]  border-[#FFBC0F] rounded-l-[3px] rounded-r-0 placeholder:text-black  "
					/>
					<button className="w-[40px] h-[40px] bg-[#FFBC0F] border border-[#FFBC0F] rounded-r-[2px]">
						<SearchIcon />
					</button>
				</div>
			</div>

			{/*  Portfolios  */}
			<div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-10">
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

			{/* Pagination */}

			<div className='flex justify-end items-center'>
				<button className="h-[42px] px-4 border border-[#FFBC0F]">Previous</button>
				<button className="w-[40px] h-[42px] bg-[#FFBC0F] border border-[#FFBC0F]">1</button>
				<button className="w-[40px] h-[42px] border border-[#FFBC0F]">2</button>
				<button className="w-[40px] h-[42px] border border-[#FFBC0F]">3</button>
				<button className="w-[40px] h-[42px] border border-[#FFBC0F]">...</button>
				<button className="h-[42px] px-4 border border-[#FFBC0F]">Next</button>
			</div>
		</div>
	);
};

export default Organization;
