import React, { useContext, useState } from 'react';
import { COLOR_CONTEXT } from './../../context/ColorProvider';

export default function PortfolioNavbar({ setShowAbout, setShowProjects, setShowSkills }) {
	const { backgroundColor, primaryColor, secondaryColor, fileList, fontColor } =
		useContext(COLOR_CONTEXT);

	return (
		<header style={{ color: fontColor, backgroundColor: primaryColor }} className="bg-blue-400">
			<div className="flex w-5/6 justify-between mx-auto py-5 items-center">
				<div>
					{fileList.length ? (
						<img src={fileList[0]?.thumbUrl} alt="" className="w-16 h-16 rounded-full" />
					) : (
						<h1 className="font-bold text-[25px]">LOGO</h1>
					)}
				</div>
				<div>
					<ul className="flex gap-5">
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(false);
							}}
							className="font-semibold cursor-pointer hover:text-white">
							Home
						</li>
						<li
							onClick={() => {
								setShowAbout(true);
								setShowProjects(false);
								setShowSkills(false);
							}}
							className="font-semibold cursor-pointer hover:text-white">
							About
						</li>
						<li
							onClick={() => {
								setShowAbout(false);
								setShowProjects(false);
								setShowSkills(true);
							}}
							className="font-semibold cursor-pointer hover:text-white">
							Skill
						</li>
						<li className="font-semibold cursor-pointer hover:text-white">Education</li>
						<li className="font-semibold cursor-pointer hover:text-white">Contact</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
