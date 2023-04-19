import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddUser = ({ setShowAddUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm();

	const [role, setRole] = useState('');
	const [portal, setPortal] = useState('');

	const [roleError, setRoleError] = useState('');
	const [portalError, setPortalError] = useState('');

	// const handleResetValues = () => {
	// 	reset({
	// 		firstName: '',
	// 		secondName: '',
	// 		email: '',
	// 		password: '',
	// 		confirmPassword: '',
	// 	});

	// 	setRole('');
	// 	setPortal('');
	// };

	const handleAddNewUser = (data) => {
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

		if (data.password !== data.confirmPassword) {
			toast.error('Password field should match with Confirm password field');
			return;
		}

		setRoleError('');
		setPortalError('');

		const userData = {
			firstName: data.firstName,
			secondName: data.secondName,
			email: data.email,
			password: data.password,
			role: role,
			portal: portal,
		};

		console.log(userData);
	};

	return (
		<div>
			<div className="">
				<h1 className="text-3xl leading-9 font-bold ">New User</h1>
			</div>

			<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

			{/* add new user  form */}

			<form
				onSubmit={handleSubmit(handleAddNewUser)}
				className="grid lg:grid-cols-2 gap-x-8 gap-y-5">
				<div className="mb-5">
					<label className="text-base font-medium leading-5">First Name</label>
					<input
						type="text"
						placeholder="Enter first name"
						{...register('firstName', { required: 'First Name is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-5 ${
							errors.firstName && 'focus:border-red-600'
						}`}
					/>
					{errors.firstName && (
						<p className="text-red-600 text-left mt-1">{errors.firstName?.message}</p>
					)}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Second Name</label>
					<input
						type="text"
						placeholder="Enter second name"
						{...register('secondName', { required: 'Second name is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-5 ${
							errors.secondName && 'focus:border-red-600'
						}`}
					/>
					{errors.secondName && (
						<p className="text-red-600 text-left mt-1">{errors.secondName?.message}</p>
					)}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Email Address</label>
					<input
						type="email"
						placeholder="Enter email address"
						{...register('email', { required: 'Email is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-5 ${
							errors.email && 'focus:border-red-600'
						}`}
					/>
					{errors.email && <p className="text-red-600 text-left mt-1">{errors.email?.message}</p>}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Role</label>
					<Select
						labelId="demo-simple-select-role-label"
						id="demo-simple-select-role"
						value={role}
						displayEmpty
						className="custom-addUser-input w-full  h-[60px] mt-5"
						sx={{ textAlign: 'left' }}
						onChange={(event) => setRole(event.target.value)}>
						<MenuItem sx={{ display: 'none' }} disabled value={''}>
							Select Role
						</MenuItem>
						<MenuItem value={'admin'}>Admin</MenuItem>
					</Select>
					{roleError && <p className="text-red-600 text-left mt-1">{roleError}</p>}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Client</label>
					<input
						type="text"
						placeholder="Client"
						{...register('client', { required: 'Client is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-5 ${
							errors.client && 'focus:border-red-600'
						}`}
					/>
					{errors.client && <p className="text-red-600 text-left mt-1">{errors.client?.message}</p>}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Portal</label>
					<Select
						labelId="demo-simple-select-role-label"
						id="demo-simple-select-role"
						value={portal}
						displayEmpty
						className="custom-addUser-input w-full  h-[60px] mt-5"
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

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Password</label>
					<input
						type="password"
						placeholder="*********"
						{...register('password', { required: 'Password is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-5 ${
							errors.password && 'focus:border-red-600'
						}`}
					/>
					{errors.password && (
						<p className="text-red-600 text-left mt-1">{errors.password?.message}</p>
					)}
				</div>

				<div className="mb-5">
					<label className="text-base font-medium leading-5">Confirm Password</label>
					<input
						type="password"
						placeholder="*********"
						{...register('confirmPassword', { required: 'Confirm Password is required' })}
						className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-5 ${
							errors.confirmPassword && 'focus:border-red-600'
						}`}
					/>
					{errors.confirmPassword && (
						<p className="text-red-600 text-left mt-1">{errors.confirmPassword?.message}</p>
					)}
				</div>

				<div className="font-bold space-x-4">
					<button type="submit" className="w-[120px] h-[80px] bg-[#FFBC0F] rounded-[3px]">
						Save
					</button>
					<button
						type="button"
						onClick={() => setShowAddUser(false)}
						className="w-[133px] h-[80px] bg-[#FF3C3C] rounded-[3px] text-white">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddUser;
