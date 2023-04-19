import React, { useEffect, useState } from 'react';
import AnalyticsModal from '../../../../components/Modal/AnalyticsModal/AnalyticsModal';
import filterIcon from '../../../../assets/icons/filter-icon.svg';

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
