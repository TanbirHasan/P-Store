import React, { useContext, useState } from 'react';
import { COLOR_CONTEXT } from '../../../context/ColorProvider';

const PortfolioNavbar = ({
	setShowAbout,
	setShowProjects,
	setShowSkills,
	setShowContact,
	setShowEducation,
	showAbout,
	showProjects,
	showSkills,
	showContact,
	showEducation,
	showExperience,
	setShowExperience,
}) => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);

	const { backgroundColor, primaryColor, secondaryColor, fileList, fontColor } =
		useContext(COLOR_CONTEXT);

	return (
		<div>
			<header
				style={{
					color: fontColor,
					backgroundColor: backgroundColor,
					borderBottom: `1px solid ${fontColor}`,
				}}
				className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
				<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
					<nav
						aria-label="main navigation"
						className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
						role="navigation">
						{/*      <!-- Brand logo --> */}
						<div className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1">
							{fileList.length ? (
								<img src={fileList[0]?.thumbUrl} alt="" className="w-16 h-16 rounded-full" />
							) : (
								<h1 className="font-bold text-[20px]">LOGO</h1>
							)}
						</div>

						{/*      <!-- Mobile trigger --> */}
						<button
							className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
								isToggleOpen
									? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
									: ''
							}
            `}
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							aria-expanded={isToggleOpen ? 'true' : 'false'}
							aria-label="Toggle navigation">
							<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
							</div>
						</button>
						{/*      <!-- Navigation links --> */}
						<ul
							role="menubar"
							aria-label="Select page"
							className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
								isToggleOpen ? 'visible opacity-100 backdrop-blur-sm' : 'invisible opacity-0'
							}`}>
							<li
								onClick={() => {
									setShowAbout(false);
									setShowProjects(false);
									setShowSkills(false);
									setShowContact(false);
									setShowEducation(false);
									setShowExperience(false);
								}}
								className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5 cursor-pointer">
								<span>Home</span>
							</li>
							<li
								onClick={() => {
									setShowAbout(true);
									setShowProjects(false);
									setShowSkills(false);
									setShowContact(false);
									setShowEducation(false);
									setShowExperience(false);
								}}
								className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5 cursor-pointer ${
									showAbout && 'text-emerald-500'
								}`}>
								<span>About</span>
							</li>
							<li
								onClick={() => {
									setShowAbout(false);
									setShowProjects(false);
									setShowSkills(true);
									setShowContact(false);
									setShowEducation(false);
									setShowExperience(false);
								}}
								className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5 cursor-pointer ${
									showSkills && 'text-emerald-500'
								}`}>
								<span>Skills</span>
							</li>
							<li
								onClick={() => {
									setShowAbout(false);
									setShowProjects(false);
									setShowSkills(false);
									setShowContact(false);
									setShowEducation(true);
									setShowExperience(false);
								}}
								className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5 cursor-pointer ${
									showEducation && 'text-emerald-500'
								}`}>
								<span>Education</span>
							</li>
							<li
								onClick={() => {
									setShowAbout(false);
									setShowProjects(false);
									setShowSkills(false);
									setShowContact(false);
									setShowEducation(false);
									setShowExperience(true);
								}}
								className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5 cursor-pointer ${
									showExperience && 'text-emerald-500'
								}`}>
								<span>Experience</span>
							</li>
							<li
								onClick={() => {
									setShowAbout(false);
									setShowProjects(false);
									setShowSkills(false);
									setShowContact(true);
									setShowEducation(false);
									setShowExperience(false);
								}}
								className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-5 cursor-pointer ${
									showContact && 'text-emerald-500'
								}`}>
								<span>Contact</span>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default PortfolioNavbar;
