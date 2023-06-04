import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Tooltip } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import dashboardMenu from '../../assets/icons/dashboardMenu.svg';
import AuthContext from '../../context/AuthProvider';

const DashboardNavbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { auth,setAuth } = useContext(AuthContext);
	const navigate = useNavigate()
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
      setAuth({})
	  navigate("/")
	}

	return (
		<nav className="bg-white w-full h-[106px] block  border-b-4 border-[#BFBFBF]">
			<div className="flex h-full items-center justify-between px-8   ">
				<div className="flex items-center gap-10 lg:gap-x-24">
					<div>
						<img
							src={dashboardMenu}
							alt="dashboard-menu"
							className="w-[55px] h-[20px] cursor-pointer"
						/>
					</div>
					<div className="relative">
						<input
							type="text"
							placeholder="Search Portfolio"
							className={`w-full lg:w-[500px] shadow-custom border-[#FFD333] py-3 px-4 focus:outline-none focus:ring-0 focus:border-[#FFD333] focus:shadow-custom`}
						/>
						<div className="absolute bottom-[7px] right-[10px]">
							<button className="w-[32px] h-[32px] bg-[#FFD333] rounded-[3px] border border-[#FFD333] ">
								<SearchIcon />
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<div>
						<Tooltip arrow title={auth?.email} >


						<Avatar
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
							sx={{
								borderWidth: 2,
								width: 56,
								height: 56,
								cursor: 'pointer',
							}}>
							<span className='uppercase text-[20px] font-bold'>

							{auth?.email?.slice(0,1)}
							</span>
							{/* <AccountCircleIcon /> */}
						</Avatar>
						</Tooltip>
						<Menu
							anchorEl={anchorEl}
							id="account-menu"
							open={open}
							onClose={handleClose}
							onClick={handleClose}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: 'visible',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
							<MenuItem onClick={handleClose}>
								<Avatar sx={{ backgroundColor: '#FFBC0F' }} /> Profile
							</MenuItem>

							{/* <Divider /> */}

							<MenuItem onClick={handleLogout}>
								<ListItemIcon>
									<Logout sx={{ color: '#FF0000' }} fontSize="small" />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Menu>
					</div>

					{/* <div>
						<h4 className="mx-2  font-medium text-gray-800 ">{ auth?.email ? auth?.email : null }</h4>
					</div> */}
				</div>
			</div>
		</nav>
	);
};

export default DashboardNavbar;
