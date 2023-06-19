import React from 'react';
import PortfolioAbout from './PortfolioAbout';
import PortfolioContact from './PortfolioContact';
import PortfolioEducation from './PortfolioEducation';
import PortfolioExperience from './PortfolioExperience';
import PortfolioNavbar from './PortfolioNavbar';
import PortfolioSkills from './PortfolioSkills';
import PortfolioTestimonial from './PortfolioTestimonial';

const PortfolioHome = () => {
	const [showAbout, setShowAbout] = React.useState(false);
	const [showProjects, setShowProjects] = React.useState(false);
	const [showSkills, setShowSkills] = React.useState(false);
	const [showContact, setShowContact] = React.useState(false);
	const [showEducation, setShowEducation] = React.useState(false);
	const [showExperience, setShowExperience] = React.useState(false);

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
				showExperience={showExperience}
				setShowExperience={setShowExperience}
			/>
			{showAbout ? (
				<PortfolioAbout />
			) : showSkills ? (
				<PortfolioSkills />
			) : showContact ? (
				<PortfolioContact />
			) : showEducation ? (
				<PortfolioEducation />
			) : showExperience ? (
				<PortfolioExperience />
			) : (
				<div>
					<PortfolioAbout />
					<PortfolioSkills />
					<PortfolioTestimonial />
				</div>
			)}
		</div>
	);
};

export { PortfolioHome };

