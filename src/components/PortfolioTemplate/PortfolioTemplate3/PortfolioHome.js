import React from 'react';
import PortfolioAbout from './PortfolioAbout';
import PortfolioContact from './PortfolioContact';
import PortfolioEducation from './PortfolioEducation';
import PortfolioExperience from './PortfolioExperience';
import PortfolioNavbar from './PortfolioNavbar';
import PortfolioSkills from './PortfolioSkills';

const PortfolioHome = () => {
	const [showAbout, setShowAbout] = React.useState(false);
	const [showProjects, setShowProjects] = React.useState(false);
	const [showSkills, setShowSkills] = React.useState(false);
	const [showContact, setShowContact] = React.useState(false);
	const [showEducation, setShowEducation] = React.useState(false);
	const [showExperience, setShowExperience] = React.useState(false);

	return (
		<div>
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
			) : showEducation ? (
				<PortfolioEducation />
			) : showExperience ? (
				<PortfolioExperience />
			) : showContact ? (
				<PortfolioContact />
			) : (
				<>
					<div>
						<PortfolioAbout />
						<PortfolioSkills />
					</div>
				</>
			)}
		</div>
	);
};

export { PortfolioHome };

