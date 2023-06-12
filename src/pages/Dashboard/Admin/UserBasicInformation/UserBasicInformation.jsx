import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useQuery } from '@tanstack/react-query';
import { Upload } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL } from '../../../../baseURL';
import FadeLoaderSpinner from '../../../../components/Spinners/FadeLoaderSpinner';
import AuthContext from '../../../../context/AuthProvider';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFD333',
		},
	},
});

const UserBasicInformation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const { auth } = useContext(AuthContext);

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

	// Linkedin
	const [isLinkedinActive, setIsLinkedinActive] = useState('active');
	const handleChangeIsLinkedinActive = (event, newAlignment) => {
		setIsLinkedinActive(newAlignment);
	};

	// Facebook
	const [isFacebookActive, setIsFacebookActive] = useState('active');
	const handleChangeIsFacebookActive = (event, newAlignment) => {
		setIsFacebookActive(newAlignment);
	};

	// Skype
	const [isSkypeActive, setIsSkypeActive] = useState('notActive');
	const handleChangeIsSkypeActive = (event, newAlignment) => {
		setIsSkypeActive(newAlignment);
	};

	// Youtube
	const [isYoutubeActive, setIsYoutubeActive] = useState('notActive');
	const handleChangeIsYoutubeActive = (event, newAlignment) => {
		setIsYoutubeActive(newAlignment);
	};

	// axios

	const {
		isLoading,
		error,
		refetch,
		data: userInfo,
	} = useQuery({
		queryKey: ['userInfo'],
		queryFn: () =>
			axios.get(`${baseURL}/api/v1/usersBasicInfo/${auth?.email}`).then((res) => res.data.data),
	});

	if (isLoading)
		return (
			<div className="flex h-screen justify-center items-center w-full">
				{' '}
				<FadeLoaderSpinner size={150} />{' '}
			</div>
		);

	if (error) return <div>Error</div>;

	const handleBasicUserInformation = (data) => {
		const { name, title, email, address, about, linkedin, facebook, skype, youtube } = data;

		const userInformation = {
			name,
			title,
			image: fileList,
			email,
			address,
			phone: data.phone,
			about,
			linkedin,
			isLinkedinActive,
			facebook,
			isFacebookActive,
			skype,
			isSkypeActive,
			youtube,
			isYoutubeActive,
		};

		axios
			.put(`${baseURL}/api/v1/usersBasicInfo/${auth?.email}`, userInformation)
			.then((response) => {
				console.log(response);
				if (response.data.status === 'success') {
					toast.success('Successfully added Basic information');
					refetch();
				}
			});
	};

	return (
		<form onSubmit={handleSubmit(handleBasicUserInformation)}>
			<ThemeProvider theme={theme}>
				{/* General Information Header part */}
				<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
					<div>
						<h1 className="text-xl font-semibold leading-6">Basic User Information</h1>
					</div>
				</div>

				{/* Information fields */}
				<div className="p-6 border border-[#ffbc0f66]">
					{/* Name field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">Name</label>
							<input
								type="text"
								placeholder="Sajid"
								defaultValue={userInfo?.name}
								{...register('name', { required: 'Name is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
									errors.name && 'focus:border-red-600'
								}`}
							/>
							{errors.name && <p className="text-red-600 text-left mt-1">{errors.name?.message}</p>}
						</div>
					</div>
					{/* Title field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">Title</label>
							<input
								type="text"
								placeholder="Web Developer"
								defaultValue={userInfo?.title}
								{...register('title', { required: 'Title is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
									errors.title && 'focus:border-red-600'
								}`}
							/>
							{errors.title && (
								<p className="text-red-600 text-left mt-1">{errors.title?.message}</p>
							)}
						</div>
					</div>

					{/* Image upload field */}
					<div className="px-5 mt-[46px] flex flex-col mb-5">
						<div>
							<h1 className="font-medium">Upload Your Image</h1>
						</div>
						<div className="custom-upload-width">
							<Upload {...props}>
								{fileList.length !== 0 ? (
									<div className="p-6 text-center text-[#FFBC0F] font-extrabold">
										<p>{fileList[0]?.name}</p>
									</div>
								) : (
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
								)}
							</Upload>
						</div>
					</div>

					{/* Email field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">Email</label>
							<input
								type="email"
								placeholder="sajid@gmail.com"
								defaultValue={auth?.email}
								{...register('email', { required: 'Email is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
									errors.email && 'focus:border-red-600'
								}`}
							/>
							{errors.email && (
								<p className="text-red-600 text-left mt-1">{errors.email?.message}</p>
							)}
						</div>
					</div>

					{/* Address field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">Address</label>
							<input
								type="text"
								placeholder="Chittagong 123 House"
								defaultValue={userInfo?.address}
								{...register('address', { required: 'Address is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
									errors.address && 'focus:border-red-600'
								}`}
							/>
							{errors.address && (
								<p className="text-red-600 text-left mt-1">{errors.address?.message}</p>
							)}
						</div>
					</div>

					{/* Phone field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">Phone</label>
							<input
								type="number"
								placeholder="92143214"
								defaultValue={userInfo?.phone}
								{...register('phone', { required: 'Phone is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
									errors.phone && 'focus:border-red-600'
								}`}
							/>
							{errors.phone && (
								<p className="text-red-600 text-left mt-1">{errors.phone?.message}</p>
							)}
						</div>
					</div>

					{/* About field */}
					<div className="px-5">
						<div className="mb-5">
							<label className="text-base font-medium leading-5">About</label>
							<textarea
								placeholder="Your Info"
								defaultValue={userInfo?.about}
								{...register('about', { required: 'About is required' })}
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4`}
								name="about"
								id="about"
								cols="30"
								rows="3"></textarea>
							{errors.about && (
								<p className="text-red-600 text-left mt-1">{errors.about?.message}</p>
							)}
						</div>
					</div>

					{/* Linkedin && is Linkedin active */}
					<div className="flex flex-col lg:flex-row justify-center mt-4">
						{/* Linkedin */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5">
								<label className="text-base font-medium leading-5 text-left">Linkedin</label>
								<input
									type="text"
									placeholder="linkedin.com"
									defaultValue={userInfo?.linkedin}
									{...register('linkedin', { required: 'Linkedin is required' })}
									className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
										errors.linkedin && 'focus:border-red-600'
									}`}
								/>
								{errors.linkedin && (
									<p className="text-red-600 text-left mt-1">{errors.linkedin?.message}</p>
								)}
							</div>
						</div>

						{/* is Linkedin active */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5 flex flex-col ">
								<label className="text-base font-medium leading-5 mb-5">Is Linkedin active</label>

								<ToggleButtonGroup
									color="primary"
									value={isLinkedinActive}
									exclusive
									defaultValue={userInfo?.isLinkedinActive}
									fullWidth
									className="custom-selected"
									onChange={handleChangeIsLinkedinActive}
									aria-label="Platform">
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="active">
										Active
									</ToggleButton>
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="notActive">
										Not Active
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
						</div>
					</div>

					{/* Facebook && is Facebook active */}
					<div className="flex flex-col lg:flex-row justify-center mt-4">
						{/* Facebook */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5">
								<label className="text-base font-medium leading-5 text-left">Facebook</label>
								<input
									type="text"
									placeholder="facebook.com"
									defaultValue={userInfo?.facebook}
									{...register('facebook', { required: 'Facebook is required' })}
									className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
										errors.facebook && 'focus:border-red-600'
									}`}
								/>
								{errors.facebook && (
									<p className="text-red-600 text-left mt-1">{errors.facebook?.message}</p>
								)}
							</div>
						</div>

						{/* is Linkedin active */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5 flex flex-col ">
								<label className="text-base font-medium leading-5 mb-5">Is Facebook active</label>

								<ToggleButtonGroup
									color="primary"
									value={isFacebookActive}
									exclusive
									fullWidth
									defaultValue={userInfo?.isFacebookActive}
									onChange={handleChangeIsFacebookActive}
									aria-label="Platform">
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="active">
										Active
									</ToggleButton>
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="notActive">
										Not Active
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
						</div>
					</div>

					{/* Skype && is Skype active */}
					<div className="flex flex-col lg:flex-row justify-center mt-4">
						{/* Skype */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5">
								<label className="text-base font-medium leading-5 text-left">Skype</label>
								<input
									type="text"
									placeholder="skype.com"
									defaultValue={userInfo?.skype}
									{...register('skype')}
									className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
										errors.skype && 'focus:border-red-600'
									}`}
								/>
								{errors.skype && (
									<p className="text-red-600 text-left mt-1">{errors.skype?.message}</p>
								)}
							</div>
						</div>

						{/* is skype active */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5 flex flex-col ">
								<label className="text-base font-medium leading-5 mb-5">Is Skype active</label>

								<ToggleButtonGroup
									color="primary"
									value={isSkypeActive}
									defaultValue={userInfo?.isSkypeActive}
									exclusive
									fullWidth
									onChange={handleChangeIsSkypeActive}
									aria-label="Platform">
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="active">
										Active
									</ToggleButton>
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="notActive">
										Not Active
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
						</div>
					</div>

					{/* Youtube && is Youtube active */}
					<div className="flex flex-col lg:flex-row justify-center mt-4">
						{/* Youtube */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5">
								<label className="text-base font-medium leading-5 text-left">Youtube</label>
								<input
									type="text"
									placeholder="youtube.com"
									defaultValue={userInfo?.youtube}
									{...register('youtube')}
									className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
										errors.youtube && 'focus:border-red-600'
									}`}
								/>
								{errors.youtube && (
									<p className="text-red-600 text-left mt-1">{errors.youtube?.message}</p>
								)}
							</div>
						</div>

						{/* is Youtube active */}
						<div className="px-5 lg:w-2/4">
							<div className="mb-5 flex flex-col ">
								<label className="text-base font-medium leading-5 mb-5">Is Youtube active</label>

								<ToggleButtonGroup
									color="primary"
									value={isYoutubeActive}
									defaultValue={userInfo?.isYoutubeActive}
									exclusive
									fullWidth
									onChange={handleChangeIsYoutubeActive}
									aria-label="Platform">
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="active">
										Active
									</ToggleButton>
									<ToggleButton sx={{ border: '1px solid #FFD333' }} value="notActive">
										Not Active
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
						</div>
					</div>
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

export default UserBasicInformation;
