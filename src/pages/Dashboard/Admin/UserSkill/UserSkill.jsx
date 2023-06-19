import { ThemeProvider, createTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL } from '../../../../baseURL';
import FadeLoaderSpinner from '../../../../components/Spinners/FadeLoaderSpinner';
import AuthContext from '../../../../context/AuthProvider';

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

const skillOptions = [
	{ name: 'HTML' },
	{ name: 'React' },
	{ name: 'Tailwind CSS' },
	{ name: 'Web Development' },
	{ name: 'Software Development' },
	{ name: 'Data Structures' },
	{ name: 'Machine Learning' },
	{ name: 'Public Speaking' },
	{ name: 'Microsoft Office' },
	{ name: 'Sales' },
	{ name: 'Marketing Strategy' },
	{ name: 'SQL' },
	{ name: 'Problem Solving' },
	{ name: 'Hardware Installation' },
	{ name: 'Java' },
	{ name: 'Linux' },
	{ name: 'Leadership' },
	{ name: 'Team Work' },
	{ name: 'Team Management' },
	{ name: 'Technical Support' },
	{ name: 'Information Technology' },
	{ name: 'Customer Service' },
	{ name: 'Project Management' },
	{ name: 'System Monitoring' },
];

const UserSkill = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const { auth } = useContext(AuthContext);

	const {
		isLoading,
		error,
		refetch,
		data: userSkills,
	} = useQuery({
		queryKey: ['userSkills'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/userSkills/${auth?.email}`).then((res) => res.data.data),
	});

	const [strengthValue, setStrengthValue] = useState(5);
	const [showStrengthScale, setShowStrengthScale] = useState(false);
	const [skills, setSkills] = useState([]);
	const [skillsError, setSkillsError] = useState('');

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} />{' '}
			</div>
		);
	if (error) return <div>Error</div>;

	const skillsSet = userSkills[0]?.skills;

	const handleUserSkills = () => {
		if (!skills.length) {
			return toast.error('Please select at least one skill');
		}

		const skillsInfo = {
			userEmail: auth?.email,
			skills,
			strengthValue,
		};

		axios.put(`${baseURL}/api/v1/userSkills/${auth?.email}`, skillsInfo).then((res) => {
			console.log(res);
			if (res.status === 200) {
				toast.success('Successfully added Skills information');
			}
		});
		refetch();
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
					{/* Skills tag input */}
					<div className="px-5 mb-5">
						<Autocomplete
							multiple
							onChange={(event, newValue) => {
								setSkills(newValue);
								setSkillsError('');
							}}
							id="tags-filled"
							options={skillOptions.map((option) => option.name)}
							defaultValue={skillsSet?.map((skill) => skill)}
							freeSolo
							renderTags={(value, getTagProps) =>
								value.map((option, index) => (
									<Chip variant="outlined" label={option} {...getTagProps({ index })} />
								))
							}
							renderInput={(params) => (
								<TextField {...params} variant="outlined" label="Skills" placeholder="Skills" />
							)}
						/>
						{skillsError && <p className="text-red-600 text-left mt-1">{skillsError}</p>}
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
