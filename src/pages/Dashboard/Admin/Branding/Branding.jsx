import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InfoIcon from '@mui/icons-material/Info';
import { Switch } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { yellow } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const YellowSwitch = styled(Switch)(({ theme }) => ({
	'& .MuiSwitch-switchBase.Mui-checked': {
		color: '#FFBC0F',
		'&:hover': {
			backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
		},
	},
	'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		backgroundColor: '#FFBC0F',
	},
}));

const Branding = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const navigate = useNavigate();

	const [client, setClient] = useState('');
	const [clientError, setClientError] = useState('');
	const [template, setTemplate] = useState('');
	const [templateError, setTemplateError] = useState('');
	const [font, setFont] = useState('');
	const [loginBackgroundChecked, setLoginBackgroundChecked] = useState(true);

	const [backgroundColor, setBackgroundColor] = useState('#FFBC0F');
	const [primaryColor, setPrimaryColor] = useState('#0d0d0d');
	const [secondaryColor, setSecondaryColor] = useState('#892c2c');
	const [fontColor, setFontColor] = useState('#FFBC0F');
	const [loginColor, setLoginColor] = useState('#F90000');

	const [fileList, setFileList] = useState([]);
	const [loginFileList, setLoginFileList] = useState([]);

	const [fileListError, setFileListError] = useState('');

	const onChange = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};

	const props = {
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange({ file, fileList }) {
			if (file.status !== 'uploading') {
				console.log(file, fileList);
				setLoginFileList(fileList);
			}
		},
	};

	const onPreview = async (file) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow?.document.write(image.outerHTML);
	};

	const handleBranding = (data) => {
		if (!client.length) {
			toast.error('Role Field cannot be empty');
			setClientError('Role Field cannot be empty');
			return;
		}
		if (!template.length) {
			toast.error('Role Field cannot be empty');
			setTemplateError('Role Field cannot be empty');
			return;
		}
		if (!fileList.length) {
			toast.error('Header Menu Logo is required');
			setFileListError('Header Menu Logo Field cannot be empty');
			return;
		}

		setClientError('');
		setTemplateError('');
		setFileListError('');

		const brandingData = {
			client,
			template,
			font,
			loginBackgroundChecked,
			backgroundColor,
			primaryColor,
			secondaryColor,
			fontColor,
			loginColor,
			fileList,
			loginFileList,
		};

		console.log(brandingData);
		navigate('/dashboard/admin/createPortfolio-home');
	};

	return (
		<form onSubmit={handleSubmit(handleBranding)}>
			{/* PORTAL Header part */}
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<p className="text-xl font-semibold leading-6">Portal</p>
				</div>
				<button type="button">
					<InfoIcon className="text-[#ffbc0f]" />
				</button>
			</div>

			<div className="p-8 border border-[#ffbc0f66] ">
				{/* Client select field */}
				<div className="flex items-center justify-between mb-5">
					<div>
						<h1 className="font-medium">Select Client</h1>
					</div>
					<div className="lg:w-[600px]">
						<Select
							value={client}
							placeholder="Select Client"
							displayEmpty
							className="custom-addUser-input w-full h-[60px] "
							sx={{ textAlign: 'left' }}
							onChange={(event) => setClient(event.target.value)}>
							<MenuItem sx={{ display: 'none' }} disabled value={''}>
								Select Client
							</MenuItem>
							<MenuItem value={'Sajid'}>Sajid</MenuItem>
							<MenuItem value={'Tanbir'}>Tanbir</MenuItem>
						</Select>
						{clientError && <p className="text-red-600 text-left mt-1">{clientError}</p>}
					</div>
				</div>

				{/* Template select field */}
				<div className="flex items-center justify-between mb-5">
					<div>
						<h1 className="font-medium">Select Template</h1>
					</div>
					<div className="lg:w-[600px]">
						<Select
							value={template}
							placeholder="Select Template"
							displayEmpty
							className="custom-addUser-input w-full h-[60px] "
							sx={{ textAlign: 'left' }}
							onChange={(event) => setTemplate(event.target.value)}>
							<MenuItem sx={{ display: 'none' }} disabled value={''}>
								Select Template
							</MenuItem>
							<MenuItem value={'Template 1'}>Template 1</MenuItem>
							<MenuItem value={'Template 2'}>Template 2</MenuItem>
							<MenuItem value={'Template 3'}>Template 3</MenuItem>
						</Select>
						{templateError && <p className="text-red-600 text-left mt-1">{templateError}</p>}
					</div>
				</div>

				{/* Condition URL select field */}
				<div className="flex items-center justify-between mb-5">
					<div className="flex items-center gap-[5px]">
						<div>
							<p className="font-medium">Custom Terms & Conditions URL</p>
						</div>
						<button onClick={() => toast.success('This feature is coming soon')} type="button">
							<InfoIcon className="text-[#ffbc0f]" />
						</button>
					</div>
					<div className="lg:w-[600px]">
						<input
							type="text"
							placeholder="Privacy URL"
							{...register('conditionURL', { required: 'Condition URL is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-4  ${
								errors.conditionURL && 'focus:border-red-600'
							}`}
						/>
						{errors.conditionURL && (
							<p className="text-red-600 text-left mt-1">{errors.conditionURL?.message}</p>
						)}
					</div>
				</div>
			</div>

			{/* bRANDING Header part */}
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">Branding</h1>
				</div>
			</div>

			<div className="p-8 border border-[#ffbc0f66]">
				{/* Image upload */}
				<div className="flex items-center justify-between mb-5">
					<div>
						<h1 className="font-medium">Header Menu Logo</h1>
					</div>
					<div className="lg:w-[600px] custom-upload">
						<ImgCrop
							fillColor="white"
							showReset={true}
							aspectSlider={true}
							aspect={1 / 1}
							rotationSlider
							zoomSlider>
							<Upload
								// className="custom-upload"
								action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
								// listType="picture-card"
								// className="custom-upload"
								listType="picture"
								fileList={fileList}
								onChange={onChange}
								onPreview={onPreview}>
								{fileList.length < 1 && (
									<div className="flex items-center justify-center  p-8 flex-col">
										<p className="ant-upload-text text-[#000000b2] mb-1">
											Drag & Drop Or select a file
										</p>
										<p className="ant-upload-hint text-center">Maximum file upload size 200kb</p>
									</div>
								)}
							</Upload>
						</ImgCrop>
						{fileListError && <p className="text-red-600 text-left mt-1">{fileListError}</p>}
					</div>
				</div>

				{/* background color */}
				<div className="mb-5 flex justify-between items-center">
					<div>
						<h1 className="font-medium">Background Color</h1>
					</div>
					<div className="relative lg:w-[600px]">
						<input
							type="text"
							disabled
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-[50px] `}
							placeholder={backgroundColor}
						/>
						<input
							value={backgroundColor}
							onChange={(event) => setBackgroundColor(event.target.value)}
							type="color"
							className="absolute left-[20px] top-[12px] w-[22px] border-0 outline-none bg-transparent cursor-pointer "
						/>
					</div>
				</div>

				{/* Color theme */}

				<div className="mb-5 flex justify-between items-center">
					<div>
						<h1 className="font-medium">Color theme</h1>
					</div>
					<div className="flex gap-5 items-center justify-between mr-3 mb-5">
						<div>
							<label className="font-medium">Primary Color</label>
							<div className="relative mt-4 ">
								<input
									type="text"
									disabled
									className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-[50px] `}
									placeholder={primaryColor}
								/>
								<input
									value={primaryColor}
									onChange={(event) => setPrimaryColor(event.target.value)}
									type="color"
									className="absolute left-[20px] top-[12px] w-[22px] border-0 outline-none bg-transparent cursor-pointer "
								/>
							</div>
						</div>
						<div>
							<label className="font-medium">Secondary Color</label>
							<div className="relative mt-4">
								<input
									type="text"
									disabled
									className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-[50px] `}
									placeholder={secondaryColor}
								/>
								<input
									value={secondaryColor}
									onChange={(event) => setSecondaryColor(event.target.value)}
									type="color"
									className="absolute left-[20px] top-[12px] w-[22px] border-0 outline-none bg-transparent cursor-pointer "
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Font */}

				<div className="flex items-center justify-between mb-5 ">
					<div>
						<h1 className="font-medium">Font</h1>
					</div>
					<div className="lg:w-[600px] mb-4">
						<Select
							value={font}
							placeholder="Select Font"
							displayEmpty
							className="custom-addUser-input w-full h-[60px] "
							sx={{ textAlign: 'left' }}
							onChange={(event) => setFont(event.target.value)}>
							<MenuItem value={''}>Font 1</MenuItem>
							<MenuItem value={'Font 2'}>Font 2</MenuItem>
							<MenuItem value={'Font 3'}>Font 3</MenuItem>
						</Select>
					</div>
				</div>

				{/* Font color */}
				<div className="mb-5 flex justify-between items-center">
					<div>
						<h1 className="font-medium">Font Color</h1>
					</div>
					<div className="relative lg:w-[600px] mb-4">
						<input
							type="text"
							disabled
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-[50px] `}
							placeholder={fontColor}
						/>
						<input
							value={fontColor}
							onChange={(event) => setFontColor(event.target.value)}
							type="color"
							className="absolute left-[20px] top-[12px] w-[22px] border-0 outline-none bg-transparent cursor-pointer"
						/>
					</div>
				</div>

				{/* Login Page Background Image */}

				<div className="flex items-center justify-between mb-5">
					<div className="flex items-center">
						<div>
							<h1 className="font-medium">Login Page Background Image</h1>
						</div>
						<div>
							<YellowSwitch
								checked={loginBackgroundChecked}
								onChange={(event) => setLoginBackgroundChecked(event.target.checked)}
								inputProps={{ 'aria-label': 'controlled' }}
							/>
						</div>
					</div>

					{loginBackgroundChecked ? (
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
										<p className="ant-upload-hint text-center">Maximum file upload size 2MB</p>
									</div>
								</div>
							</Upload>
						</div>
					) : (
						<div className="relative lg:w-[600px] mb-4">
							<input
								type="text"
								disabled
								className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[4px] py-3 px-[50px] `}
								placeholder={loginColor}
							/>
							<input
								value={loginColor}
								onChange={(event) => setLoginColor(event.target.value)}
								type="color"
								className="absolute left-[20px] top-[12px] w-[22px] border-0 outline-none bg-transparent "
							/>
						</div>
					)}
				</div>
			</div>

			{/* Preview Section */}
			<div className="p-6 border border-[#ffbc0f66] border-t-0 border-b-0 ">
				<div>
					<h1 className="text-xl font-semibold leading-6">Preview</h1>
				</div>
			</div>

			{/* Preview Screen */}
			<div className="px-[60px] py-[40px] border border-[#ffbc0f66] mb-[46px]">
				{/* Navbar part in preview section */}
				<nav
					style={{ color: fontColor, backgroundColor: primaryColor }}
					className="h-[100px] flex items-center justify-between   font-medium px-[32px]">
					<div>
						{fileList.length ? (
							<img src={fileList[0]?.thumbUrl} alt="" className="w-16 h-16 rounded-full" />
						) : (
							<h1 className="font-bold text-[25px]">LOGO</h1>
						)}
					</div>
					<div className="flex">
						<ul className="flex gap-3 text-[20px] cursor-pointer">
							<li>Home</li>
							<li>Recommendation</li>
							<li>Projects</li>
							<li>Video Library</li>
							<li>Contact</li>
						</ul>
					</div>
				</nav>

				{/* Text part in preview section*/}
				<div style={{ backgroundColor: backgroundColor }} className="px-[46px]">
					<h1 className="text-[40px] italic leading-[35px] mb-2 pt-10">
						Welcome to your updated Portfolio
					</h1>
					<h1 className="text-[30px] leading-[35px] pb-[75px]">Learn More-</h1>
				</div>

				{/* Footer part in preview section*/}
				<footer style={{ backgroundColor: primaryColor }} className="p-[33px]"></footer>
			</div>

			{/* Save button */}
			<button className="h-[80px] bg-[#FFBC0F] rounded-[3px] px-[32px] font-bold" type="submit">
				Save & Next
			</button>
		</form>
	);
};

export default Branding;
