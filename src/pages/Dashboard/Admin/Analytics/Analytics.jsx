import React, { useEffect, useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import filterIcon from '../../../../assets/icons/filter-icon.svg';
import MapChart from '../../../../components/MapChart/MapChart';
import AnalyticsModal from '../../../../components/Modal/AnalyticsModal/AnalyticsModal';

const Analytics = () => {
	const [primaryAnalyticsPopup, setPrimaryAnalyticsPopup] = useState(false);
	const [secondaryAnalyticsPopup, setSecondaryAnalyticsPopup] = useState(false);

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

			<div className="border border-[#0000004c] bg-[#ffffff7f] rounded-[3px] p-4 mb-8">
				<h1 className="font-medium text-xl leading-6 mb-6">Engagement</h1>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Map card */}
					<div className="bg-[#FFBC0F] rounded-[20px] p-5 lg:w-2/4 ">
						<div className="mb-6">
							<h1 className="flex items-center gap-2">
								{' '}
								<BiWorld className=" text-6xl" />{' '}
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
							<div className='relative bottom-6'>
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
