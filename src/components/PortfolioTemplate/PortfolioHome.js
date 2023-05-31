import React, { useContext } from 'react';
import { COLOR_CONTEXT } from './../../context/ColorProvider';
import PortfolioAbout from './PortfolioAbout';
import PortfolioContact from './PortfolioContact';
import PortfolioEducation from './PortfolioEducation';
import PortfolioExperience from './PortfolioExperience';
import PortfolioNavbar from './PortfolioNavbar';
import PortfolioProjects from './PortfolioProjects';
import PortfolioSkills from './PortfolioSkills';
import PortfolioTestimonials from './PortfolioTestimonials';

export default function PortfolioHome() {
	const { backgroundColor, primaryColor, secondaryColor, fontColor, fileList } =
		useContext(COLOR_CONTEXT);

	const [showAbout, setShowAbout] = React.useState(false);
	const [showProjects, setShowProjects] = React.useState(false);
	const [showSkills, setShowSkills] = React.useState(false);
	const [showContact, setShowContact] = React.useState(false);
	const [showEducation, setShowEducation] = React.useState(false);
	const [showExperience, setShowExperience] = React.useState(false);

	return (
		<div style={{ backgroundColor: backgroundColor, color: fontColor }} className="">
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
				showExperience={showExperience}
				setShowExperience={setShowExperience}
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
			) : showExperience ? (
				<PortfolioExperience />
			) : (
				<>
					<div className="flex items-center justify-between  mx-auto">
						<PortfolioAbout />
					</div>
					<div className=''>
						<PortfolioSkills />
						<PortfolioTestimonials />
					</div>
				</>
			)}
		</div>
	);
}
