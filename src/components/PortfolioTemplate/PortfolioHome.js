import React, { useContext } from 'react';
import { COLOR_CONTEXT } from './../../context/ColorProvider';
import PortfolioAbout from './PortfolioAbout';
import PortfolioContact from './PortfolioContact';
import PortfolioEducation from './PortfolioEducation';
import PortfolioNavbar from './PortfolioNavbar';
import PortfolioProjects from './PortfolioProjects';
import PortfolioSkills from './PortfolioSkills';

export default function PortfolioHome() {
	const { backgroundColor, primaryColor, secondaryColor, fontColor, fileList } =
		useContext(COLOR_CONTEXT);

	const [showAbout, setShowAbout] = React.useState(false);
	const [showProjects, setShowProjects] = React.useState(false);
	const [showSkills, setShowSkills] = React.useState(false);
	const [showContact, setShowContact] = React.useState(false);
	const [showEducation, setShowEducation] = React.useState(false);

	return (
		<div className="">
			<PortfolioNavbar
				setShowAbout={setShowAbout}
				setShowProjects={setShowProjects}
				setShowSkills={setShowSkills}
				setShowContact={setShowContact}
				setShowEducation={setShowEducation}
				showAbout={showAbout}
				showProjects={showProjects}
				showSkills={showSkills}
				showContact={showContact}
				showEducation={showEducation}
			/>

			{showAbout ? (
				<PortfolioAbout />
			) : showSkills ? (
				<PortfolioSkills />
			) : showProjects ? (
				<PortfolioProjects />
			) : showContact ? (
				<PortfolioContact />
			) : showEducation ? (
				<PortfolioEducation />
			) : (
				<>
					<div className="flex items-center justify-between gap-5 lg:w-5/6 mx-auto mt-20">
						<div className="p-5 lg:w-2/4">
							{/* Here name , designation will be dynamic */}
							<h4>Hello</h4>
							<h2 className="text-3xl">I'm Mark Andrew</h2>
							<h3 className="text-xl">A passionate {}</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
								irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum
							</p>
						</div>
						<div className="lg:w-2/4 flex justify-center">
							{/* The image will be dynamic */}
							{fileList[0]?.thumbUrl ? (
								<img src={fileList[0]?.thumbUrl} alt="" className="w-[300px] h-[300px]" />
							) : (
								<img
									src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80"
									className="w-[300px] h-[300px]"
									alt="person"
								/>
							)}
						</div>
					</div>
					<div>
						<PortfolioSkills />
					</div>
				</>
			)}
		</div>
	);
}
