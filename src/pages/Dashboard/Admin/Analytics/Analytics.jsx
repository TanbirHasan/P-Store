import { Radio } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import filterIcon from '../../../../assets/icons/filter-icon.svg';
import MapChart from '../../../../components/MapChart/MapChart';
import AnalyticsModal from '../../../../components/Modal/AnalyticsModal/AnalyticsModal';

const Analytics = () => {
	const [primaryAnalyticsPopup, setPrimaryAnalyticsPopup] = useState(false);
	const [secondaryAnalyticsPopup, setSecondaryAnalyticsPopup] = useState(false);
	const [overview, setOverview] = useState('overview');
	const [QA, setQA] = useState('QA');
	const [videos, setVideos] = useState('videos');

	
	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setPrimaryAnalyticsPopup(true);
		}, 200);

		return () => clearTimeout(timeoutID); // Clearing timeOut to avoid memory leaks
	}, []);

	return (
		<div>
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-3xl leading-9 font-bold ">Analytics</h1>
				</div>
				<button
					onClick={() => setSecondaryAnalyticsPopup(true)}
					className="w-[100px] h-[40px] bg-[#FFBC0F] rounded-[3px] flex items-center justify-center gap-3">
					<img src={filterIcon} alt="" />
					<span className="font-semibold leading-5">Filter</span>
				</button>
			</div>

			<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

			{/* Engagement section */}
			<div className="border border-[#0000004c] bg-[#ffffff7f] rounded-[3px] p-4 mb-8">
				<h1 className="font-medium text-xl leading-6 mb-6">Engagement</h1>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Map card */}
					<div className="bg-[#FFBC0F] rounded-[20px] p-5 lg:w-2/4 lg:h-[376px]">
						<div className="mb-6">
							<h1 className="flex items-center gap-2">
								{' '}
								<BiWorld className="text-2xl " />{' '}
								<span className="text-[18px] font-medium">Top Four</span>{' '}
							</h1>
						</div>
						<MapChart />
					</div>

					{/* Red card (info) */}
					<div className="lg:w-2/4  bg-[#FF3C3C] rounded-[20px] lg:h-[376px]">
						<div className="flex items-end justify-evenly gap-4 h-full relative bottom-14 w-full">
							<div>
								<div className="bg-white h-[30px] w-[30px] rounded-full mx-auto"></div>
								<h1 className="text-white font-semibold text-[17px] text-center">
									Watched <br /> Live
								</h1>
							</div>
							<div className="relative bottom-[19px]">
								<div className="bg-white h-[30px] w-[30px] rounded-full mx-auto"></div>
								<h1 className="text-white font-semibold text-[17px] text-center">Downloads</h1>
							</div>
							<div>
								<div className="bg-white h-[30px] w-[30px] rounded-full mx-auto"></div>
								<h1 className="text-white font-semibold text-[17px] text-center">
									{' '}
									Video <br /> Watched
								</h1>
							</div>
							<div>
								<div className="bg-white h-[30px] w-[30px] rounded-full mx-auto"></div>
								<h1 className="text-white font-semibold text-[17px] text-center">
									Question <br /> Asked
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Portfolio Statistics & Metrics section */}
			<div className="border border-[#0000004c] bg-[#ffffff7f] rounded-[3px] p-4 mb-8">
				<h1 className="font-medium text-xl leading-6 mb-6">Portfolio Statistics & Metrics</h1>

				<div className="flex justify-center items-center gap-[16.32px]">
					{/* Card - 1 */}
					<div className="p-6 border border-[#ffbc0f7f] rounded-[10px] w-full shadow-custom2">
						<h1 className="font-semibold text-xl leading-6 mb-[10px] text-center">Overview</h1>
						<div className="flex items-center justify-center text-[18px] leading-6 mb-3">
							<Radio
								sx={{
									color: yellow[400],
									'&.Mui-checked': {
										color: '#FFBC0F',
									},
								}}
								checked={overview === 'overview'}
								onChange={(event) => setOverview(event.target.value)}
								value={overview}
								name="radio-button"
							/>
							<span className="uppercase">CSV</span>
						</div>
						<div className="">
							<button className="block mx-auto bg-[#FFBC0F]  font-semibold text-[18px]  py-2 px-4">
								Download
							</button>
						</div>
					</div>

					{/* Card - 2 */}
					<div className="p-6 border border-[#ffbc0f7f] rounded-[10px] w-full shadow-custom2">
						<h1 className="font-semibold text-xl leading-6 mb-[10px] text-center">Q & A</h1>
						<div className="flex items-center justify-center text-[18px] leading-6 mb-3">
							<Radio
								sx={{
									color: yellow[400],
									'&.Mui-checked': {
										color: '#FFBC0F',
									},
								}}
								checked={QA === 'QA'}
								onChange={(event) => setQA(event.target.value)}
								value={QA}
								name="radio-button"
							/>
							<span className="uppercase">CSV</span>
						</div>
						<div className="">
							<button className="block mx-auto bg-[#FFBC0F]  font-semibold text-[18px]  py-2 px-4">
								Download
							</button>
						</div>
					</div>

					{/* Card - 3*/}
					<div className="p-6 border border-[#ffbc0f7f] rounded-[10px] w-full shadow-custom2">
						<h1 className="font-semibold text-xl leading-6 mb-[10px] text-center">Videos</h1>
						<div className="flex items-center justify-center text-[18px] leading-6 mb-3">
							<Radio
								sx={{
									color: yellow[400],
									'&.Mui-checked': {
										color: '#FFBC0F',
									},
								}}
								checked={videos === 'videos'}
								onChange={(event) => setVideos(event.target.value)}
								value={QA}
								name="radio-button"
							/>
							<span className="uppercase">CSV</span>
						</div>
						<div className="">
							<button className="block mx-auto bg-[#FFBC0F]  font-semibold text-[18px]  py-2 px-4">
								Download
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Show popup modal */}
			{primaryAnalyticsPopup ? (
				<AnalyticsModal open={primaryAnalyticsPopup} setAnalyticsPopup={setPrimaryAnalyticsPopup} />
			) : secondaryAnalyticsPopup ? (
				<AnalyticsModal
					open={secondaryAnalyticsPopup}
					setAnalyticsPopup={setSecondaryAnalyticsPopup}
				/>
			) : null}
		</div>
	);
};

export default Analytics;
