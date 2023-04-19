import React from 'react';
import { Menu, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import analyticsDarkVesion from '../../assets/icons/analytics-dark-version.svg';
import analytics from '../../assets/icons/analytics.svg';
import organizationDarkVersion from '../../assets/icons/dark-organization-icon.svg';
import dashboard from '../../assets/icons/dashboard-orginal.svg';
import dashboardIconDark from '../../assets/icons/dashboard.svg';
import organization from '../../assets/icons/organization.svg';
import userIconDark from '../../assets/icons/user-dark-version.svg';
import userIcon from '../../assets/icons/users.svg';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
	const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();

	let location = useLocation();
	// verifies if routeName is the one active (in browser input)
	const activeRoute = (routeName) => {
		return location.pathname.includes(routeName);
	};

	return (
		<div className="#FAFAFA">
			<div className="flex">
				<div className="lg:w-[300px]">
					<Sidebar
						backgroundColor="#FAFAFA"
						transitionDuration={800}
						width="300px"
						style={{ position: 'fixed' }}
						breakPoint="lg">
						<aside className="flex flex-col  h-screen  py-8 overflow-y-auto  border-r  ">
							<div className="flex flex-col  flex-1 mt-6 mb-20">
								<Link to={'/'} className="mb-16">
									<h1 className="uppercase text-[30px] text-center font-extrabold italic">
										PORTFOLIO
									</h1>
								</Link>

								<Menu>
									<div className=" px-7">
										{/*                  Dashboard                   */}
										<Link to={'/dashboard/admin/home'}>
											<div
												className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
													activeRoute('/dashboard/admin/home') === true
														? 'font-bold bg-[#FFBC0F]'
														: 'font-medium '
												}`}>
												<li className="my-[3px] flex cursor-pointer items-center px-3 text-[18px]">
													{activeRoute('/dashboard/admin/home') === true ? (
														<img
															src={dashboardIconDark}
															alt="dashboard-icon"
															className="w-[20px] h-[20px]"
														/>
													) : (
														<img
															src={dashboard}
															alt="dashboard-icon"
															className="w-[20px] h-[20px]"
														/>
													)}
													<p
														className={`leading-5 ml-[10px] flex ${
															activeRoute('/dashboard/admin/home') === true
																? 'font-bold'
																: 'font-medium'
														} `}>
														Dashboard
													</p>
												</li>
											</div>
										</Link>

										{/*                  Organization                   */}
										<Link to={'/dashboard/admin/organization'}>
											<div
												className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
													activeRoute('/dashboard/admin/organization') === true
														? 'font-bold bg-[#FFBC0F]'
														: 'font-medium '
												}`}>
												<li className="my-[3px] flex cursor-pointer items-center px-3 text-[18px]">
													{activeRoute('/dashboard/admin/organization') === true ? (
														<img
															src={organizationDarkVersion}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>
													) : (
														<img
															src={organization}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>
													)}

													<p
														className={`leading-5 ml-[10px] flex ${
															activeRoute('/dashboard/admin/organization') === true
																? 'font-bold'
																: 'font-medium'
														} `}>
														Organization
													</p>
												</li>
											</div>
										</Link>

										{/*                  USERS                   */}
										<Link to={'/dashboard/admin/administrator'}>
											<div
												className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
													activeRoute('/dashboard/admin/administrator') === true
														? 'font-bold bg-[#FFBC0F]'
														: 'font-medium '
												}`}>
												<li className="my-[3px] flex cursor-pointer items-center px-3 text-[18px]">
													{activeRoute('/dashboard/admin/administrator') === true ? (
														<img
															src={userIconDark}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>
													) : (
														<img
															src={userIcon}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>
													)}

													<p
														className={`leading-5 ml-[10px] flex ${
															activeRoute('/dashboard/admin/administrator') === true
																? 'font-bold'
																: 'font-medium'
														} `}>
														Users
													</p>
												</li>
											</div>
										</Link>

										{/*                  ANALYTICS                   */}
										<Link to={'/dashboard/admin/analytics'}>
											<div
												className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
													activeRoute('/dashboard/admin/analytics') === true
														? 'font-bold bg-[#FFBC0F]'
														: 'font-medium '
												}`}>
												<li className="my-[3px] flex cursor-pointer items-center px-3 text-[18px]">
													{activeRoute('/dashboard/admin/analytics') === true ? (
														<img
															src={analyticsDarkVesion}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>
													) : (
														<img
															src={analytics}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>
													)}

													<p
														className={`leading-5 ml-[10px] flex ${
															activeRoute('/dashboard/admin/analytics') === true
																? 'font-bold'
																: 'font-medium'
														} `}>
														Analytics
													</p>
												</li>
											</div>
										</Link>
										
									</div>
								</Menu>
							</div>
						</aside>
					</Sidebar>
				</div>

				<div className="flex-grow">
					<DashboardNavbar />
					<div className="p-8">
						<Outlet />
					</div>
				</div>
			</div>
			<ScrollRestoration />
		</div>
	);
};

export default DashboardLayout;
