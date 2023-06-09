import { Tooltip } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaSuitcase } from 'react-icons/fa';
import { GiSkills, GiTalk } from 'react-icons/gi';
import { HiInformationCircle } from 'react-icons/hi';
import { MdSchool } from 'react-icons/md';
import { Menu, Sidebar, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet, ScrollRestoration, useLocation, useNavigate } from 'react-router-dom';
import analyticsDarkVesion from '../../assets/icons/analytics-dark-version.svg';
import analytics from '../../assets/icons/analytics.svg';
import organizationDarkVersion from '../../assets/icons/dark-organization-icon.svg';
import dashboard from '../../assets/icons/dashboard-orginal.svg';
import dashboardIconDark from '../../assets/icons/dashboard.svg';
import organization from '../../assets/icons/organization.svg';
import portalDark from '../../assets/icons/portal-dark.svg';
import portal from '../../assets/icons/portal.svg';
import projectsDark from '../../assets/icons/projects-dark.svg';
import projects from '../../assets/icons/projects.svg';
import recommendationDark from '../../assets/icons/recommendation-dark.svg';
import recommendation from '../../assets/icons/recommendation.svg';
import userIconDark from '../../assets/icons/user-dark-version.svg';
import userIcon from '../../assets/icons/users.svg';
import videoLibraryDark from '../../assets/icons/videoLibrary-dark.svg';
import videoLibrary from '../../assets/icons/videoLibrary.svg';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import AuthContext from '../../context/AuthProvider';

const DashboardLayout = () => {
	const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();

	const { auth } = useContext(AuthContext);

	const { email, roles, accessToken } = auth;

	const [createPortal, setCreatePortal] = useState(false);

	let location = useLocation();
	let navigate = useNavigate();

	// verifies if routeName is the one active (in browser input)
	const activeRoute = (routeName) => {
		return location.pathname.includes(routeName);
	};

	useEffect(() => {
		const storage = localStorage.getItem('create-portal');
		const parsedStorage = JSON.parse(storage);
		setCreatePortal(parsedStorage);
	}, []);

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
								<div className="mb-16">
									<Link to={'/'} className="">
										<h1 className="uppercase text-[30px] text-center font-extrabold italic">
											PORTFOLIO
										</h1>
									</Link>

									<Link to="/portfolio-template-1">
										<Tooltip arrow  title="Portfolio Template 1">
											<div className="uppercase text-[15px] text-center font-extrabold italic">
												Portfolio Template 1
											</div>
										</Tooltip>
									</Link>

									<Link to="/portfolio-template-2">
										<Tooltip arrow  title="Portfolio Template 2">
											<div className="uppercase text-[15px] text-center font-extrabold italic my-3">
												Portfolio Template 2
											</div>
										</Tooltip>
									</Link>
									<Link to="/portfolio-template-3">
										<Tooltip arrow  title="Portfolio Template 3">
											<div className="uppercase text-[15px] text-center font-extrabold italic my-3">
												Portfolio Template 3
											</div>
										</Tooltip>
									</Link>
								</div>

								<Menu>
									<div className=" px-7">
										{/*                  Dashboard                   */}
										<Link
											onClick={() => {
												setCreatePortal(false);
												localStorage.clear();
											}}
											to={'/dashboard/admin/home'}>
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

										{Array.isArray(roles) && (
											<>
												{auth?.roles[0] === 5150 && (
													<>
														{/*                  Organization                   */}
														<Link
															onClick={() => {
																localStorage.removeItem('create-portal');
																localStorage.removeItem('ShowAllPortfolio');
																setCreatePortal(false);
															}}
															to={'/dashboard/admin/organization'}>
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
														<Link
															onClick={() => {
																localStorage.removeItem('create-portal');
																localStorage.removeItem('ShowAllPortfolio');
																setCreatePortal(false);
															}}
															to={'/dashboard/admin/administrator'}>
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
														<Link
															onClick={() => {
																setCreatePortal(false);
																localStorage.removeItem('create-portal');
																localStorage.removeItem('ShowAllPortfolio');
															}}
															to={'/dashboard/admin/analytics'}>
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
													</>
												)}
											</>
										)}

										{/*                  Create Portal                   */}
										<div className={`${createPortal ? 'hidden' : 'block'}`}>
											<button
												onClick={() => {
													setCreatePortal(true);
													navigate('/dashboard/admin/branding');
													localStorage.setItem('create-portal', true);
												}}>
												<div
													className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2 $`}>
													<li className="my-[3px] flex cursor-pointer items-center px-3 text-[18px]">
														<img
															src={portal}
															alt="organization-icon"
															className={`w-[20px] h-[20px]`}
														/>

														<p className={`leading-5 ml-[10px] flex font-medium `}>Create Portal</p>
													</li>
												</div>
											</button>
										</div>

										{createPortal && (
											<>
												{/*                  Branding                  */}
												<Link to={'/dashboard/admin/branding'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/branding') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[18px]">
															{activeRoute('/dashboard/admin/branding') === true ? (
																<img
																	src={portalDark}
																	alt="organization-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															) : (
																<img
																	src={portal}
																	alt="organization-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															)}

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/branding') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Branding
															</p>
														</li>
													</div>
												</Link>

												{/*                  HOME                  */}
												<Link to={'/dashboard/admin/createPortfolio-home'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/createPortfolio-home') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															<AiFillHome
																className={`${
																	activeRoute('/dashboard/admin/createPortfolio-home') === true
																		? 'text-black '
																		: 'text-[#FFBC0F] '
																}`}
															/>

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/createPortfolio-home') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Home
															</p>
														</li>
													</div>
												</Link>

												{/*         Recommendation    */}
												<Link to={'/dashboard/admin/recommendation'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/recommendation') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															{activeRoute('/dashboard/admin/recommendation') === true ? (
																<img
																	src={recommendationDark}
																	alt="recommendationDark-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															) : (
																<img
																	src={recommendation}
																	alt="recommendation-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															)}

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/recommendation') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Recommendation
															</p>
														</li>
													</div>
												</Link>

												{/*         PROJECTS    */}
												<Link to={'/dashboard/admin/projects'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/projects') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															{activeRoute('/dashboard/admin/projects') === true ? (
																<img
																	src={projectsDark}
																	alt="recommendationDark-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															) : (
																<img
																	src={projects}
																	alt="recommendation-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															)}

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/projects') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Projects
															</p>
														</li>
													</div>
												</Link>

												{/* Video Library */}
												<Link to={'/dashboard/admin/videolibrary'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/videolibrary') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															{activeRoute('/dashboard/admin/videolibrary') === true ? (
																<img
																	src={videoLibraryDark}
																	alt="recommendationDark-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															) : (
																<img
																	src={videoLibrary}
																	alt="recommendation-icon"
																	className={`w-[20px] h-[20px]`}
																/>
															)}

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/videolibrary') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Video Library
															</p>
														</li>
													</div>
												</Link>

												{/* Basic User Information */}
												<Link to={'/dashboard/admin/basic-user-info'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/basic-user-info') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															<HiInformationCircle
																className={`${
																	activeRoute('/dashboard/admin/basic-user-info') === true
																		? 'text-black '
																		: 'text-[#FFBC0F] '
																}`}
															/>

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/basic-user-info') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Basic Info
															</p>
														</li>
													</div>
												</Link>

												{/*  User Education Information */}
												<Link to={'/dashboard/admin/user-education-info'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/user-education-info') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															<MdSchool
																className={`${
																	activeRoute('/dashboard/admin/user-education-info') === true
																		? 'text-black '
																		: 'text-[#FFBC0F] '
																}`}
															/>

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/user-education-info') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Education Info
															</p>
														</li>
													</div>
												</Link>

												{/*  User Skills */}
												<Link to={'/dashboard/admin/user-skills'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/user-skills') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															<GiSkills
																className={`${
																	activeRoute('/dashboard/admin/user-skills') === true
																		? 'text-black '
																		: 'text-[#FFBC0F] '
																}`}
															/>

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/user-skills') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Skills
															</p>
														</li>
													</div>
												</Link>

												{/*  User Experience */}
												<Link to={'/dashboard/admin/user-experience'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/user-experience') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															<FaSuitcase
																className={`${
																	activeRoute('/dashboard/admin/user-experience') === true
																		? 'text-black '
																		: 'text-[#FFBC0F] '
																}`}
															/>

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/user-experience') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Experience
															</p>
														</li>
													</div>
												</Link>

												{/*  Testimonial */}
												<Link to={'/dashboard/admin/testimonial'}>
													<div
														className={`relative  py-3 flex hover:cursor-pointer text-lg rounded-[3px] mb-2  ${
															activeRoute('/dashboard/admin/testimonial') === true
																? 'font-bold bg-[#FFBC0F]'
																: 'font-medium '
														}`}>
														<li className="my-[3px] flex cursor-pointer items-center px-3 text-[20px]">
															<GiTalk
																className={`${
																	activeRoute('/dashboard/admin/testimonial') === true
																		? 'text-black '
																		: 'text-[#FFBC0F] '
																}`}
															/>

															<p
																className={`leading-5 ml-[10px] flex ${
																	activeRoute('/dashboard/admin/testimonial') === true
																		? 'font-bold'
																		: 'font-medium'
																} `}>
																Testimonial
															</p>
														</li>
													</div>
												</Link>
											</>
										)}
									</div>
								</Menu>
							</div>
						</aside>
					</Sidebar>
				</div>

				<div className="lg:flex-grow w-full lg:w-[70%]">
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
