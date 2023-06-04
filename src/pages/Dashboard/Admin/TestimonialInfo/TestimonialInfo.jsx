import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../../baseURL';
import AuthContext from '../../../../context/AuthProvider';
import { toast } from 'react-toastify';

const TestimonialInfo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();
	const { auth } = useContext(AuthContext);

	const handleRecommenderInfo = (data) => {
		const { recommendation, recommenderDesignation, recommenderName } = data;

		const testimonial_info = {
			userEmail: auth?.email,
			recommenderName,
			recommenderDesignation,
			recommendation,
		};

		axios.post(`${baseURL}/api/v1/userTestimonialInfo`, testimonial_info).then((response) => {
			console.log(response);
			if (response.status === 200) {
				toast.success('Successfully added Testimonial information');
			}
		});
	};

	return (
		<form onSubmit={handleSubmit(handleRecommenderInfo)}>
			{/*Header part */}
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">Testimonial</h1>
				</div>
			</div>

			{/* Information fields */}
			<div className="p-6 border border-[#ffbc0f66]">
				{/* Recommender Name field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Recommender Name</label>
						<input
							type="text"
							placeholder="Sajid"
							{...register('recommenderName', { required: 'Recommender Name is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.recommenderName && 'focus:border-red-600'
							}`}
						/>
						{errors.recommenderName && (
							<p className="text-red-600 text-left mt-1">{errors.recommenderName?.message}</p>
						)}
					</div>
				</div>

				{/* Recommender Designation field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Recommender Designation</label>
						<input
							type="text"
							placeholder="Sajid"
							{...register('recommenderDesignation', {
								required: 'Recommender Designation is required',
							})}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.recommenderDesignation && 'focus:border-red-600'
							}`}
						/>
						{errors.recommenderDesignation && (
							<p className="text-red-600 text-left mt-1">
								{errors.recommenderDesignation?.message}
							</p>
						)}
					</div>
				</div>

				{/* Recommendation  field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Recommendation </label>
						<textarea
							placeholder="Your Recommendation"
							{...register('recommendation', { required: 'Recommendation is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4`}
							name="recommendation"
							id="recommendation"
							cols="30"
							rows="3"></textarea>
						{errors.recommendation && (
							<p className="text-red-600 text-left mt-1">{errors.recommendation?.message}</p>
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

export default TestimonialInfo;
