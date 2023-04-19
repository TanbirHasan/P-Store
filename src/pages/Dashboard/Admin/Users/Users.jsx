import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import AddUser from './AddUser/AddUser';
import EditUser from './EditUser/EditUser';
const Users = () => {
	const [showAddUser, setShowAddUser] = useState(false);
	const [showEditUser, setShowEditUser] = useState(false);
	const [editedUserData, setEditedUserData] = useState({});

	const handleEditedUserData = (data) => {
		setEditedUserData(data);
		setShowEditUser(true);
	};

	const tableItems = [
		{
			name: 'Liam James',
			email: 'liamjames@example.com',
			createdDate: 'July 19, 2021',
			userRole: 'Admin',
		},
		{
			name: 'Liam Watson',
			email: 'liamjames@example.com',
			createdDate: 'July 19, 2021',
			userRole: 'Admin',
		},
		{
			name: 'Liam Herth',
			email: 'liamjames@example.com',
			createdDate: 'July 19, 2021',
			userRole: 'Admin',
		},
		{
			name: 'Liam John',
			email: 'liamjames@example.com',
			createdDate: 'July 19, 2021',
			userRole: 'Admin',
		},
		{
			name: 'Liam Curry',
			email: 'liamjames@example.com',
			createdDate: 'July 19, 2021',
			userRole: 'Admin',
		},
		{
			name: 'Liam Jobs',
			email: 'liamjames@example.com',
			createdDate: 'July 19, 2021',
			userRole: 'Admin',
		},
	];

	return (
		<>
			{showAddUser ? (
				<AddUser setShowAddUser={setShowAddUser} />
			) : showEditUser ? (
				<EditUser data={editedUserData} setShowEditUser={setShowEditUser} />
			) : (
				<div>
					<div className="">
						<h1 className="text-3xl leading-9 font-bold ">Users</h1>
					</div>

					<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

					{/* Search Users field */}
					<div className="flex items-center justify-between mb-8">
						<h1 className="text-xl leading-9 font-normal">List of Users</h1>

						<div className="flex gap-x-7 ">
							{/* input field */}
							<div className="flex items-center relative ">
								<input
									type="text"
									placeholder="Search Users"
									className="w-[253px] h-[40px] bg-[#FFF4D9] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333]  border-[#FFBC0F] rounded-l-[3px] rounded-r-0 placeholder:text-black  "
								/>
								<button className="w-[40px] h-[40px] bg-[#FFBC0F] border border-[#FFBC0F] rounded-r-[2px]">
									<SearchIcon />
								</button>
							</div>

							{/* add user button */}

							{/* <Link to={'/dashboard/admin/administrator/addUser'}>
					</Link> */}
							<button
								onClick={() => setShowAddUser(true)}
								className="w-[122px] h-[40px] rounded-[3px] border border-[#FFBC0F] bg-[#FFBC0F]">
								<p className="text-base font-bold leading-5 flex items-center justify-center">
									<span>
										<AddIcon />
									</span>
									<span>New User</span>
								</p>
							</button>
						</div>
					</div>

					<hr className="mt-8 mb-10 bg-[#D9D9D9]" />

					{/* All users Table */}

					<div className="mb-8 ">
						<div className="mt-12  border-t overflow-x-auto">
							<table className="w-full table-auto text-sm text-left">
								<thead className=" font-medium border-b">
									<tr className="text-[18px] font-[600] leading-3">
										<th className="py-8 px-6">Name</th>
										<th className="py-8 px-6">Email</th>
										<th className="py-8 px-6">Created Date</th>
										<th className="py-8 px-6">User Role</th>
										<th className="py-8 px-6">Action</th>
									</tr>
								</thead>
								<tbody className="text-base font-normal leading-5 ">
									{tableItems.map((item, idx) => (
										<tr key={idx} className="odd:bg-white even:bg-[#ffbc0f26]">
											<td className="px-6 py-8 whitespace-nowrap">{item.name}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.email}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.createdDate}</td>
											<td className="px-6 py-8 whitespace-nowrap">{item.userRole}</td>
											<td className="px-6 py-8 whitespace-nowrap flex items-center gap-x-[10px]">
												<button onClick={() => handleEditedUserData(item)}>
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

					<div className="flex justify-end items-center">
						<button className="h-[42px] px-4 border border-[#FFBC0F]">Previous</button>
						<button className="w-[40px] h-[42px] bg-[#FFBC0F] border border-[#FFBC0F]">1</button>
						<button className="w-[40px] h-[42px] border border-[#FFBC0F]">2</button>
						<button className="w-[40px] h-[42px] border border-[#FFBC0F]">3</button>
						<button className="w-[40px] h-[42px] border border-[#FFBC0F]">...</button>
						<button className="h-[42px] px-4 border border-[#FFBC0F]">Next</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Users;
