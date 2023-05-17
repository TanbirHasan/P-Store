import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const UserSkill = () => {

    const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm();

	const navigate = useNavigate();

	return (
		<div>
			<div className="p-6 border border-[#ffbc0f66] flex items-center gap-[5px]">
				<div>
					<h1 className="text-xl font-semibold leading-6">User Skills</h1>
				</div>
			</div>

			{/* Information fields */}
            <div className="p-6 border border-[#ffbc0f66] ">
                
				{/*  Name field */}
				<div className="px-5">
					<div className="mb-5">
						<label className="text-base font-medium leading-5">Name</label>
						<input
							type="text"
							placeholder=""
							{...register('name', { required: 'Name is required' })}
							className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4 ${
								errors.name && 'focus:border-red-600'
							}`}
						/>
						{errors.name && (
							<p className="text-red-600 text-left mt-1">{errors.name?.message}</p>
						)}
					</div>
                </div>
                

			</div>
		</div>
	);
};

export default UserSkill;
