import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import AddRecommendation from './AddRecommendation/AddRecommendation';
import EditRecommendation from './EditRecommendation/EditRecommendation';
import { useNavigate } from 'react-router-dom';

const tableItems = [
	{
		name: 'Liam James',
		email: 'liamjames@example.com',
		designation: 'ceo',
		companyName: 'Apple',
		url: 'https//',
		picture: 'picture',
		comment: 'Nothing',
		bioDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit officiis expedita illum, esse repudiandae eum nemo accusamus ipsam laudantium?',
	},
];

const Recommendation = () => {
	const [showAddRecommendation, setShowAddRecommendation] = useState(false);
	const [showEditRecommendation, setShowEditRecommendation] = useState(false);
	const [selectedUserData, setSelectedUserData] = useState(null);

	const navigate = useNavigate();

	return (
		<>
			{showAddRecommendation ? (
				<AddRecommendation setShowAddRecommendation={setShowAddRecommendation} />
			) : showEditRecommendation ? (
				<EditRecommendation
					selectedUserData={selectedUserData}
					setShowEditRecommendation={setShowEditRecommendation}
				/>
			) : (
				<div>
					<h1 className="text-[28px] font-bold">Portfolio Recommendation</h1>

					<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

					{/* Search Users field */}
					<div className="flex items-center justify-between mb-8">
						<h1 className="text-xl leading-9 font-normal">User Recommender</h1>

						<div className="flex gap-x-7 ">
							{/* input field */}
							<div className="flex items-center relative ">
								<input
									type="text"
									placeholder="Search by name"
									className="w-[253px] h-[40px] bg-[#FFF4D9] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333]  border-[#FFBC0F] rounded-l-[3px] rounded-r-0 placeholder:text-black  "
								/>
								<button className="w-[40px] h-[40px] bg-[#FFBC0F] border border-[#FFBC0F] rounded-r-[2px]">
									<SearchIcon />
								</button>
							</div>

							{/* add recommendation  button */}

							<button
								onClick={() => setShowAddRecommendation(true)}
								className="px-4 h-[40px] rounded-[3px] border border-[#FFBC0F] bg-[#FFBC0F]">
								<p className="text-base font-bold leading-5 flex items-center justify-center">
									<span>
										<AddIcon />
									</span>
									<span>Add Recommendation</span>
								</p>
							</button>
						</div>
					</div>

					{/* All users Table */}

					<div className="mb-8 ">
						<div className=" border-t overflow-x-auto">
							<table className="w-full table-auto text-sm text-left">
								<thead className=" font-medium border-b">
									<tr className="text-[18px] font-[600] leading-3">
										<th className="py-8 px-6">Full Name</th>
										<th className="py-8 px-6">Designation</th>
										<th className="py-8 px-6">Company Name</th>
										<th className="py-8 px-6">URL</th>
										<th className="py-8 px-6">Picture</th>
										<th className="py-8 px-6">Comment</th>
										<th className="py-8 px-6">Action</th>
									</tr>
								</thead>
								<tbody className="text-base font-normal leading-5 ">
									{tableItems.map((item, idx) => (
										<tr key={idx} className="odd:bg-white even:bg-[#ffbc0f26]">
											<td className="px-6 py-8 whitespace-nowrap">{item.name}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.designation}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.companyName}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.url}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.picture}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.comment}</td>

											<td className="px-6 py-8 whitespace-nowrap flex items-center gap-x-[10px]">
												<button
													onClick={() => {
														setShowEditRecommendation(true);
														setSelectedUserData(item);
													}}>
													<FaEdit className="text-[#1970FE] text-[20px]" />
												</button>
												<button>
													<FaTrashAlt className="text-[#FF0000] text-[20px]" />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{/* Pagination */}

					<div className="flex justify-start items-center mb-8">
						<button className="h-[42px] px-4 border border-[#FFBC0F]">Previous</button>
						<button className="w-[40px] h-[42px] bg-[#FFBC0F] border border-[#FFBC0F]">1</button>
						<button className="w-[40px] h-[42px] border border-[#FFBC0F]">2</button>
						<button className="w-[40px] h-[42px] border border-[#FFBC0F]">3</button>
						<button className="w-[40px] h-[42px] border border-[#FFBC0F]">...</button>
						<button className="h-[42px] px-4 border border-[#FFBC0F]">Next</button>
					</div>

					<h1 className="font-medium text-xl mb-10">Total - 1</h1>

					{/* Save button */}
					<button
						onClick={() => {
							navigate('/dashboard/admin/projects');
						}}
						className="h-[80px] bg-[#FFBC0F] rounded-[3px] px-[32px] font-bold"
						type="submit">
						Save & Next
					</button>
				</div>
			)}
		</>
	);
};

export default Recommendation;
