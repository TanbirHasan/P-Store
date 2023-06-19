import { ThemeProvider, createTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../../baseURL';
import AuthContext from '../../../../context/AuthProvider';
import { toast } from 'react-toastify';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFD333',
		},
	},
});

const UserExperience = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const { auth } = useContext(AuthContext);

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [employmentType, setEmploymentType] = useState('');
	const [jobType, setJobType] = useState('');
	const [showEndDate, setShowEndDate] = useState(false);

	const handleExperienceInfo = (data) => {
		const { position, companyName, companyLocation, description } = data;

		const experienceInfo = {
			userEmail: auth?.email,
			position,
			employmentType,
			companyName,
			companyLocation,
			jobType,
			startDate,
			endDate,
			description,
			showEndDate,
		};

		axios.post(`${baseURL}/api/v1/userExperienceInfo`, experienceInfo).then((response) => {
			console.log(response);
			if (response.status === 200) {
				toast.success('Successfully added experience information');
			}
		});

		console.log(experienceInfo);
	};

	return (
		<form onSubmit={handleSubmit(handleExperienceInfo)}>
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">User Education Information</h1>
				</div>
			</div>

			{/* Information fields */}

			<div className="p-6 border border-[#ffbc0f66]">
				{/* Employment Position field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Position</label>
						<input
							type="text"
							placeholder="Retails Sales Manager"
							{...register('position', { required: 'Position is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.position && 'focus:border-red-600'
							}`}
						/>
						{errors.position && (
							<p className="text-red-600 text-left mt-1">{errors.position?.message}</p>
						)}
					</div>
				</div>

				{/* Employment type select field */}
				<div className="mb-5 w-full px-5">
					<label className="text-base font-medium leading-5">Employment type</label>

					<Select
						value={employmentType}
						placeholder="Employment type"
						displayEmpty
						className="custom-addUser-input w-full h-[60px] mt-4 "
						sx={{ textAlign: 'left' }}
						onChange={(event) => setEmploymentType(event.target.value)}>
						<MenuItem sx={{ display: 'none' }} disabled value={''}>
							Please Select
						</MenuItem>
						<MenuItem value={'Full-Time'}>Full-Time</MenuItem>
						<MenuItem value={'Part-Time'}>Part-Time</MenuItem>
						<MenuItem value={'Self-employed'}>Self-employed</MenuItem>
						<MenuItem value={'Freelance'}>Freelance</MenuItem>
						<MenuItem value={'Internship'}>Internship</MenuItem>
						<MenuItem value={'Seasonal'}>Seasonal</MenuItem>
						<MenuItem value={'Contact'}>Contact</MenuItem>
					</Select>
				</div>

				{/* Company Name field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Company name</label>
						<input
							type="text"
							placeholder="Microsoft"
							{...register('companyName', { required: 'Company name is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.companyName && 'focus:border-red-600'
							}`}
						/>
						{errors.companyName && (
							<p className="text-red-600 text-left mt-1">{errors.companyName?.message}</p>
						)}
					</div>
				</div>

				{/* Company Location field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Company Location</label>
						<input
							type="text"
							placeholder="London,United Kingdom"
							{...register('companyLocation', { required: 'Company location is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.companyLocation && 'focus:border-red-600'
							}`}
						/>
						{errors.companyLocation && (
							<p className="text-red-600 text-left mt-1">{errors.companyLocation?.message}</p>
						)}
					</div>
				</div>

				{/* Job type select field */}
				<div className="mb-5 w-full px-5">
					<label className="text-base font-medium leading-5">Job type</label>

					<Select
						value={jobType}
						placeholder="Employment type"
						displayEmpty
						className="custom-addUser-input w-full h-[60px] mt-4 "
						sx={{ textAlign: 'left' }}
						onChange={(event) => setJobType(event.target.value)}>
						<MenuItem sx={{ display: 'none' }} disabled value={''}>
							Please Select
						</MenuItem>
						<MenuItem value={'On-Site'}>On-site</MenuItem>
						<MenuItem value={'remote'}>Remote</MenuItem>
						<MenuItem value={'hybrid'}>Hybrid</MenuItem>
					</Select>
				</div>

				<ThemeProvider theme={theme}>
					{/* Checkbox */}
					<div className="px-5 mb-5">
						<FormControlLabel
							value=""
							control={
								<Checkbox
									checked={showEndDate}
									onChange={(event) => setShowEndDate(event.target.checked)}
								/>
							}
							label="I am currently working in this role"
							labelPlacement="end"
						/>
					</div>
				</ThemeProvider>

				{/* Start Date field  */}
				<div className="px-5">
					<div className="w-full mb-5">
						<label className="font-medium">Start Date</label>
						<input
							type="date"
							placeholder="Start date"
							onChange={(event) => setStartDate(event.target.value)}
							className={`w-full shadow-custom2 border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] focus:shadow-custom2  rounded-[3px] h-[60px]  mt-2 `}
						/>
					</div>
				</div>

				{/* End Date field  */}
				<div className="px-5">
					<div className="w-full mb-5">
						<label className={`font-medium ${showEndDate ? 'opacity-50' : ''} `}>End Date</label>
						<input
							type="date"
							disabled={showEndDate ? true : false}
							placeholder="End date"
							onChange={(event) => setEndDate(event.target.value)}
							className={`w-full shadow-custom2 border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] focus:shadow-custom2  rounded-[3px] h-[60px]  mt-2 ${
								showEndDate ? 'opacity-50' : ''
							} `}
						/>
					</div>
				</div>

				{/* Description field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Description</label>
						<textarea
							placeholder="Your Info"
							{...register('description', { required: 'About is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4`}
							name="description"
							id="description"
							cols="30"
							rows="3"></textarea>
						{errors.description && (
							<p className="text-red-600 text-left mt-1">{errors.description?.message}</p>
						)}
					</div>
				</div>
			</div>
			{/* Save button */}
			<button
				className="h-[80px] bg-[#FFBC0F] rounded-[3px] px-[32px] font-bold mt-10"
				type="submit">
				Save & Next
			</button>
		</form>
	);
};

export default UserExperience;
