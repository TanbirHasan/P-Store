import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import MainLayout from '../../Layouts/MainLayout/MainLayout';
import PortfolioHome from '../../components/PortfolioTemplate/PortfolioHome';
import AllPortfolios from '../../pages/Dashboard/Admin/AllPortfolios/AllPortfolios';
import Analytics from '../../pages/Dashboard/Admin/Analytics/Analytics';
import Branding from '../../pages/Dashboard/Admin/Branding/Branding';
import CreatePortfolioHome from '../../pages/Dashboard/Admin/CreatePortfolioHome/CreatePortfolioHome';
import Projects from '../../pages/Dashboard/Admin/Projects/Projects';
import Recommendation from '../../pages/Dashboard/Admin/Recommendation/Recommendation';
import TestimonialInfo from '../../pages/Dashboard/Admin/TestimonialInfo/TestimonialInfo';
import UserBasicInformation from '../../pages/Dashboard/Admin/UserBasicInformation/UserBasicInformation';
import UserEducationInformation from '../../pages/Dashboard/Admin/UserEducationInformation/UserEducationInformation';
import UserExperience from '../../pages/Dashboard/Admin/UserExperience/UserExperience';
import UserSkill from '../../pages/Dashboard/Admin/UserSkill/UserSkill';
import Users from '../../pages/Dashboard/Admin/Users/Users';
import VideoLibrary from '../../pages/Dashboard/Admin/VideoLibrary/VideoLibrary';
import AdminHome from './../../pages/Dashboard/Admin/AdminHome/AdminHome';
import Organization from './../../pages/Dashboard/Admin/Organization/Organization';
import Login from './../../pages/Login/Login';

export const router = createBrowserRouter([
	// normal main route
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
		],
	},

	// for ADMIN routes

	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				path: '/dashboard/admin/home',
				element: <AdminHome />,
			},
			{
				path: '/dashboard/admin/allPortfolios',
				element: <AllPortfolios />,
			},
			{
				path: '/dashboard/admin/organization',
				element: <Organization />,
			},
			{
				path: '/dashboard/admin/administrator',
				element: <Users />,
			},
			{
				path: '/dashboard/admin/analytics',
				element: <Analytics />,
			},
			{
				path: '/dashboard/admin/branding',
				element: <Branding />,
			},
			{
				path: '/dashboard/admin/createPortfolio-home',
				element: <CreatePortfolioHome />,
			},
			{
				path: '/dashboard/admin/recommendation',
				element: <Recommendation />,
			},
			{
				path: '/dashboard/admin/projects',
				element: <Projects />,
			},
			{
				path: '/dashboard/admin/videolibrary',
				element: <VideoLibrary />,
			},
			{
				path: '/dashboard/admin/basic-user-info',
				element: <UserBasicInformation />,
			},
			{
				path: '/dashboard/admin/user-education-info',
				element: <UserEducationInformation />,
			},
			{
				path: '/dashboard/admin/user-skills',
				element: <UserSkill />,
			},
			{
				path: '/dashboard/admin/user-experience',
				element: <UserExperience />,
			},
			{
				path: '/dashboard/admin/testimonial',
				element: <TestimonialInfo />,
			},
		],
	},
	{
		path: '/portfoliohome',
		element: <PortfolioHome />,
	},
]);
