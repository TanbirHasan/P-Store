import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Upload } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreatePortfolioHome = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm();

	const navigate = useNavigate();

	const [redirectRoute, setRedirectRoute] = useState('');
	const [fileList, setFileList] = useState([]);

	const props = {
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange({ file, fileList }) {
			if (file.status !== 'uploading') {
				// console.log(file, fileList);
				setFileList(fileList);
			}
		},
	};

	const handleGeneralInformation = (data) => {
		const information = {
			portfolioTitle: data.portfolioTitle,
			subtitle: data.subtitle,
			portfolioIntroduction: data.portfolioIntroduction,
			portfolioIntroduction2: data.portfolioIntroduction2,
			buttonLabel: data.buttonLabel,
			imageFile: fileList,
			redirectRoute,
		};
		console.log(information);
		navigate('/dashboard/admin/recommendation');
	};

	return (
		<form onSubmit={handleSubmit(handleGeneralInformation)}>
			{/* General Information Header part */}
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">General Information</h1>
				</div>
			</div>

			{/* Information fields */}
			<div className="p-6 border border-[#ffbc0f66]">
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Portfolio Title</label>
						<input
							type="text"
							placeholder="Regression 10 3 2023"
							{...register('portfolioTitle', { required: 'Portfolio Title is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.portfolioTitle && 'focus:border-red-600'
							}`}
						/>
						{errors.portfolioTitle && (
							<p className="text-red-600 text-left mt-1">{errors.portfolioTitle?.message}</p>
						)}
					</div>
				</div>

				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Subtitle (Optional)</label>
						<input
							type="text"
							placeholder="Enter subtitle"
							{...register('subtitle')}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4`}
						/>
					</div>
				</div>

				<div className="px-5">
					<div className="">
						<label className="text-base font-medium leading-5">
							Portfolio Introduction (The text will appear in the main home page section)
						</label>
						<input
							type="text"
							placeholder="font items"
							{...register('portfolioIntroduction')}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 mb-4`}
						/>

						<textarea
							placeholder="Enter portfolio introduction"
							{...register('portfolioIntroduction2')}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4`}
							name=""
							id=""
							cols="30"
							rows="3"></textarea>
					</div>
				</div>

				<div className="px-5 flex items-center justify-between mt-[46px] gap-x-[32px]">
					<div className="mb-5 w-full">
						<label className="text-base font-medium leading-5">
							Homepage Button Label (optional)
						</label>
						<input
							type="text"
							placeholder="contact"
							{...register('buttonLabel')}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4`}
						/>
					</div>

					{/* Route select field */}
					<div className="mb-5 w-full">
						<label className="text-base font-medium leading-5">Redirects To</label>

						<Select
							value={redirectRoute}
							placeholder="Select Route"
							displayEmpty
							className="custom-addUser-input w-full h-[60px] mt-4 "
							sx={{ textAlign: 'left' }}
							onChange={(event) => setRedirectRoute(event.target.value)}>
							<MenuItem sx={{ display: 'none' }} disabled value={''}>
								Select Route
							</MenuItem>
							<MenuItem value={'Sajid'}>Sajid</MenuItem>
							<MenuItem value={'Tanbir'}>Tanbir</MenuItem>
						</Select>
					</div>
				</div>

				{/* Image upload field */}
				<div className="px-5 mt-[46px] flex items-center justify-between mb-5">
					<div>
						<h1 className="font-medium">Upload Your Homepage Image</h1>
					</div>
					<div className="lg:w-[600px]">
						<Upload {...props}>
							<div className="flex items-center justify-center gap-4 p-8">
								<div>
									<button type="button" className="w-[51px] h-[51px] bg-[#FFBC0F] rounded-full">
										<FileUploadOutlinedIcon style={{ fontSize: 30 }} />
									</button>
								</div>
								<div>
									<p className="ant-upload-text text-[#000000b2] mb-1">
										Drag & Drop Or select a file
									</p>
									<p className="ant-upload-hint text-center text-[#000000b2]">
										Maximum file upload size 2MB
									</p>
								</div>
							</div>
						</Upload>
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

export default CreatePortfolioHome;
