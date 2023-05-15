import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const UserEducationInformation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm();

	const navigate = useNavigate();

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const handleEducationInformation = (data) => {
		const { instituteName, degree, fieldOfStudy, grade } = data;

		const educationInformation = {
			instituteName,
			degree,
			fieldOfStudy,
			grade,
			startDate,
			endDate,
		};
		console.log(educationInformation);
	};

	return (
		<form onSubmit={handleSubmit(handleEducationInformation)}>
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">User Education Information</h1>
				</div>
			</div>

			{/* Information fields */}
			<div className="p-6 border border-[#ffbc0f66]">
				{/* Institute Name field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Institute name</label>
						<input
							type="text"
							placeholder="Bangladesh School Muscat"
							{...register('instituteName', { required: 'Institute name is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.instituteName && 'focus:border-red-600'
							}`}
						/>
						{errors.instituteName && (
							<p className="text-red-600 text-left mt-1">{errors.instituteName?.message}</p>
						)}
					</div>
				</div>

				{/* Degree field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Degree</label>
						<input
							type="text"
							placeholder="Bachelor's"
							{...register('degree', { required: 'Degree is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.degree && 'focus:border-red-600'
							}`}
						/>
						{errors.degree && (
							<p className="text-red-600 text-left mt-1">{errors.degree?.message}</p>
						)}
					</div>
				</div>

				{/* fieldOfStudy field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Field of Study</label>
						<input
							type="text"
							placeholder="Business"
							{...register('fieldOfStudy', { required: 'Field of Study is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.fieldOfStudy && 'focus:border-red-600'
							}`}
						/>
						{errors.fieldOfStudy && (
							<p className="text-red-600 text-left mt-1">{errors.fieldOfStudy?.message}</p>
						)}
					</div>
				</div>

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
						<label className="font-medium">End Date</label>
						<input
							type="date"
							placeholder="End date"
							onChange={(event) => setEndDate(event.target.value)}
							className={`w-full shadow-custom2 border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333] focus:shadow-custom2  rounded-[3px] h-[60px]  mt-2 `}
						/>
					</div>
				</div>

				{/* Grade field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Grade</label>
						<input
							type="text"
							placeholder="Business"
							{...register('grade', { required: 'Grade is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.grade && 'focus:border-red-600'
							}`}
						/>
						{errors.grade && <p className="text-red-600 text-left mt-1">{errors.grade?.message}</p>}
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

export default UserEducationInformation;
