import React, { useContext, useState } from 'react';
import { COLOR_CONTEXT } from './../../context/ColorProvider';

export default function PortfolioNavbar({
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
}) {
	const { backgroundColor, primaryColor, secondaryColor, fileList, fontColor } =
		useContext(COLOR_CONTEXT);

	const [state, setState] = useState(false);

	return (
		<header style={{ color: fontColor, backgroundColor: primaryColor }}>
			<div className="flex justify-between items-center px-5 py-4 md:hidden">
				<div>
					{fileList.length ? (
						<img src={fileList[0]?.thumbUrl} alt="" className="w-16 h-16 rounded-full" />
					) : (
						<h1 className="font-bold text-[20px]">LOGO</h1>
					)}
				</div>
				<button
					type="button"
					className="text-white  flex justify-end w-full p-4"
					onClick={() => setState(!state)}>
					{state ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</button>
			</div>

			<div
				className={` flex-col md:flex-row w-5/6 justify-between mx-auto py-5 items-center hidden md:flex`}>
				<div>
					{fileList.length ? (
						<img src={fileList[0]?.thumbUrl} alt="" className="w-16 h-16 rounded-full" />
					) : (
						<h1 className="font-bold text-[25px]">LOGO</h1>
					)}
				</div>
				<div>
					<ul className="flex flex-col md:flex-row gap-5">
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white `}>
							Home
						</li>
						<li
							onClick={() => {
								setShowAbout(true);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showAbout && 'text-white'
							}`}>
							About
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(true);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showSkills && 'text-white'
							}`}>
							Skill
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(true);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showProjects && 'text-white'
							}`}>
							Projects
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(true);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showEducation && 'text-white'
							}`}>
							Education
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(true);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showContact && 'text-white'
							}`}>
							Contact
						</li>
					</ul>
				</div>
			</div>
			{/* Mobile devices navbar */}
			<div
				className={` flex-col md:flex-row w-5/6 justify-between mx-auto py-5 items-center text-center space-y-10 ${
					state ? 'flex' : 'hidden'
				}`}>
				<div>
					{fileList.length ? (
						<img src={fileList[0]?.thumbUrl} alt="" className="w-16 h-16 rounded-full" />
					) : (
						<h1 className="font-bold text-[25px]">LOGO</h1>
					)}
				</div>
				<div>
					<ul className="flex flex-col md:flex-row gap-5">
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white `}>
							Home
						</li>
						<li
							onClick={() => {
								setShowAbout(true);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showAbout && 'text-white'
							}`}>
							About
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(true);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showSkills && 'text-white'
							}`}>
							Skill
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(true);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showProjects && 'text-white'
							}`}>
							Projects
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(false);
								setShowEducation(true);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showEducation && 'text-white'
							}`}>
							Education
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
								setShowContact(true);
								setShowEducation(false);
							}}
							className={`font-semibold cursor-pointer hover:text-white ${
								showContact && 'text-white'
							}`}>
							Contact
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
