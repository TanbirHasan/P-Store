import { ThemeProvider, createTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const valuetext = (value) => {
	return `${value}C`;
};

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFD333',
		},
	},
});

const UserSkill = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm();

	const navigate = useNavigate();

	const [strengthValue, setStrengthValue] = useState(5);
	const [showStrengthScale, setShowStrengthScale] = useState(false);

	const handleUserSkills = (data) => {
		const skillsInfo = {
			name: data.name,
			strengthValue,
		};
		console.log(skillsInfo);
	};

	return (
		<form onSubmit={handleSubmit(handleUserSkills)}>
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">User Skills</h1>
				</div>
			</div>
			<ThemeProvider theme={theme}>
				{/* Information fields */}
				<div className="p-6 border border-[#ffbc0f66] ">
					{/*  Name field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">Name</label>
							<input
								type="text"
								placeholder="Ramona Fischer"
								{...register('name', { required: 'Name is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
									errors.name && 'focus:border-red-600'
								}`}
							/>
							{errors.name && <p className="text-red-600 text-left mt-1">{errors.name?.message}</p>}
						</div>
					</div>

					<div className="px-5 mb-5">
						<FormControlLabel
							value=""
							control={
								<Checkbox
									checked={showStrengthScale}
									onChange={(event) => setShowStrengthScale(event.target.checked)}
								/>
							}
							label="Show Strength Scale"
							labelPlacement="end"
						/>
					</div>

					{/* Strength Scale field  */}
					{showStrengthScale && (
						<div className="px-5 mb-5">
							<label className="text-base font-medium leading-5 mb-5">Strength Scale</label>
							<Slider
								aria-label="Strength Scale"
								defaultValue={5}
								getAriaValueText={valuetext}
								valueLabelDisplay="auto"
								step={1}
								marks
								color="primary"
								onChange={(e) => setStrengthValue(e.target.value)}
								min={1}
								max={10}
							/>
						</div>
					)}
				</div>
				{/* Save button */}
				<button
					className="h-[80px] bg-[#FFBC0F] rounded-[3px] px-[32px] font-bold mt-10"
					type="submit">
					Save & Next
				</button>
			</ThemeProvider>
		</form>
	);
};

export default UserSkill;
