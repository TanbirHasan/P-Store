import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { yellow } from '@mui/material/colors';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AnalyticsModal = ({ open, setAnalyticsPopup }) => {
	const [role, setRole] = useState('');
	const [portal, setPortal] = useState('');
	const [roleError, setRoleError] = useState('');
	const [portalError, setPortalError] = useState('');
	const [checked, setChecked] = useState(false);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const handleFilterPopup = (event) => {
		event.preventDefault();
		if (!role.length) {
			toast.error('Role Field cannot be empty');
			setRoleError('Role Field cannot be empty');
			return;
		}
		if (!portal.length) {
			toast.error('Portal Field cannot be empty');
			setPortalError('Portal Field cannot be empty');
			return;
		}

		setRoleError('');
		setPortalError('');

		const filterData = {
			role: role,
			portal: portal,
			checked: checked,
			startDate,
			endDate,
		};

		console.log(filterData);
		toast.success('Success');
	};

	return (
		<Dialog fullWidth={true} maxWidth={'md'} open={open} onClose={() => setAnalyticsPopup(false)}>
			<div className="flex justify-between items-center mt-[11px] px-4">
				<DialogTitle id="alert-dialog-title">
					<span className="font-semibold text-2xl">Filter</span>
				</DialogTitle>
				<DialogTitle id="alert-dialog-title">
					<button className="bg-black rounded-full" onClick={() => setAnalyticsPopup(false)}>
						<ClearOutlinedIcon sx={{ fontSize: '38px', color: 'white' }} />
					</button>
				</DialogTitle>
			</div>
			<DialogContent>
				<form action="">
					<div className="mb-5 mt-[30px]">
						<Select
							value={role}
							placeholder="Select Client"
							displayEmpty
							className="custom-analytics-popup-input w-full  h-[60px] "
							sx={{ textAlign: 'left' }}
							onChange={(event) => setRole(event.target.value)}>
							<MenuItem sx={{ display: 'none' }} disabled value={''}>
								Select Client
							</MenuItem>
							<MenuItem value={'Sajid'}>Sajid</MenuItem>
							<MenuItem value={'Tanbir'}>Tanbir</MenuItem>
						</Select>
						{roleError && <p className="text-red-600 text-left mt-1">{roleError}</p>}
					</div>

					<div className="mb-5">
						<Select
							value={portal}
							displayEmpty
							className="custom-analytics-popup-input w-full  h-[60px]"
							sx={{ textAlign: 'left' }}
							onChange={(event) => setPortal(event.target.value)}>
							<MenuItem sx={{ display: 'none' }} disabled value={''}>
								Select Portal
							</MenuItem>
							<MenuItem value={'Portal1'}>Portal 1</MenuItem>
							<MenuItem value={'Portal2'}>Portal 2</MenuItem>
						</Select>
						{portalError && <p className="text-red-600 text-left mt-1">{portalError}</p>}
					</div>
				</form>

				{/* Checkbox */}
				<div className="flex items-center mb-5">
					<Checkbox
						sx={{
							color: yellow[400],
							'&.Mui-checked': {
								color: yellow[600],
							},
						}}
						checked={checked}
						onChange={(event) => setChecked(event.target.checked)}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<span className="font-medium text-base">Select all portfolio</span>
				</div>

				{/* Date picker */}

				<div className="mb-8">
					<h1 className="text-[20px] font-medium mb-5 leading-8">Date Range (optional)</h1>

					<div className=" flex gap-8 w-full mb-5 ">
						<div className="w-full">
							<label className="font-medium">Start Date</label>
							<input
								type="date"
								placeholder="Start date"
								onChange={(event) => setStartDate(event.target.value)}
								className={`w-full shadow-custom2 border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] focus:shadow-custom2  rounded-[3px] h-[60px]  mt-2 `}
							/>
						</div>
						<div className="w-full">
							<label className="font-medium">End Date</label>
							<input
								type="date"
								onChange={(event) => setEndDate(event.target.value)}
								placeholder="End Date"
								className={`w-full shadow-custom2 border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] focus:shadow-custom2  rounded-[3px] h-[60px] mt-2 `}
							/>
						</div>
					</div>
				</div>

				{/* Button */}
				<div className="font-bold space-x-4">
					<button
						onClick={(e) => handleFilterPopup(e)}
						type="button"
						className="w-[120px] h-[60px] bg-[#FFBC0F] rounded-[3px]">
						Save
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AnalyticsModal;
