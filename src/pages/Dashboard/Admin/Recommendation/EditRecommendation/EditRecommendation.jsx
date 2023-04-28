import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Upload } from 'antd';

const EditRecommendation = ({ setShowEditRecommendation, selectedUserData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [designation, setDesignation] = useState('');
	const [fileList, setFileList] = useState([]);

	const props = {
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange({ file, fileList }) {
			if (file.status !== 'uploading') {
				// console.log(file, fileList);
				setFileList(fileList);
			}
		},
		multiple: false,
	};

	const handleEditRecommenderInformation = (data) => {
		const recommenderInfo = {
			fullName: data.fullName,
			companyName: data.companyName,
			url: data.url,
			recommenderComment: data.recommenderComment,
			bioDetails: data.bioDetails,
			imageFile: fileList,
			designation,
		};

		console.log(recommenderInfo);
	};

	return (
		<div>
			{/* Edit recommender header part */}
			<div className="flex justify-between items-center">
				<h1 className="text-[28px] font-bold">Edit Recommender Information</h1>
				<button
					onClick={() => setShowEditRecommendation(false)}
					className="h-10 px-5 bg-[#FFBC0F] rounded-[3px] font-semibold">
					Back
				</button>
			</div>

			<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

			<form onSubmit={handleSubmit(handleEditRecommenderInformation)}>
				<div className="mb-5">
					<label className="text-base font-medium leading-5">Full Name</label>
					<input
						type="text"
						defaultValue={selectedUserData?.name}
						placeholder="Enter full name"
						{...register('fullName', { required: 'Full Name is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4  ${
							errors.fullName && 'focus:border-red-600'
						}`}
					/>
					{errors.fullName && (
						<p className="text-red-600 text-left mt-1">{errors.fullName?.message}</p>
					)}
				</div>

				{/* designation select field */}
				<div className="mb-5 w-full">
					<label className="text-base font-medium leading-5">Designation</label>

					<Select
						value={designation}
						defaultValue={selectedUserData.designation}
						placeholder="Select Designation"
						displayEmpty
						className="custom-addUser-input w-full h-[60px] mt-4 "
						sx={{ textAlign: 'left' }}
						onChange={(event) => setDesignation(event.target.value)}>
						<MenuItem sx={{ display: 'none' }} disabled value={''}>
							Select Designation
						</MenuItem>
						<MenuItem value={''}>{selectedUserData.designation.toUpperCase()}</MenuItem>
						<MenuItem value={'manager'}>Manager</MenuItem>
					</Select>
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Company Name</label>
					<input
						type="text"
						defaultValue={selectedUserData.companyName}
						placeholder="Enter Company Name"
						{...register(
							'companyName'
							// { required: 'Company Name is required' }
						)}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4  ${
							errors.companyName && 'focus:border-red-600'
						}`}
					/>
					{errors.companyName && (
						<p className="text-red-600 text-left mt-1">{errors.companyName?.message}</p>
					)}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">URL</label>
					<input
						type="text"
						defaultValue={selectedUserData.url}
						placeholder="Enter URL"
						{...register(
							'url'
							// { required: 'URL is required' }
						)}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4  ${
							errors.url && 'focus:border-red-600'
						}`}
					/>
					{errors.url && <p className="text-red-600 text-left mt-1">{errors.url?.message}</p>}
				</div>

				<div className="mt-[46px] flex items-center justify-between mb-5">
					<div>
						<h1 className="font-medium">Image</h1>
					</div>
					<div className="mb-5">
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
										The picture must be at least 512x512px and 300 kb
									</p>
								</div>
							</div>
						</Upload>
					</div>
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Bio Details</label>
					<textarea
						cols="30"
						rows="3"
						defaultValue={selectedUserData.bioDetails}
						placeholder="Enter Bio Details"
						{...register(
							'bioDetails'
							// { required: 'Bio Details is required' }
						)}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4  ${
							errors.bioDetails && 'focus:border-red-600'
						}`}
					/>
					{errors.bioDetails && (
						<p className="text-red-600 text-left mt-1">{errors.bioDetails?.message}</p>
					)}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Recommender Comment</label>
					<textarea
						cols="30"
						rows="3"
						defaultValue={selectedUserData.comment}
						placeholder="Enter Recommender Comment"
						{...register(
							'recommenderComment'
							// { required: 'Recommender Comment is required' }
						)}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4  ${
							errors.recommenderComment && 'focus:border-red-600'
						}`}
					/>
					{errors.recommenderComment && (
						<p className="text-red-600 text-left mt-1">{errors.recommenderComment?.message}</p>
					)}
				</div>

				<div className="font-bold space-x-4 mt-10">
					<button type="submit" className="w-[120px] h-[80px] bg-[#FFBC0F] rounded-[3px]">
						Save
					</button>
					<button
						type="button"
						onClick={() => setShowEditRecommendation(false)}
						className="w-[133px] h-[80px] bg-[#FF3C3C] rounded-[3px] text-white">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditRecommendation;
