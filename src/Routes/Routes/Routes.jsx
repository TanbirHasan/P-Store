import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import MainLayout from '../../Layouts/MainLayout/MainLayout';
import AllPortfolios from '../../pages/Dashboard/Admin/AllPortfolios/AllPortfolios';
import Analytics from '../../pages/Dashboard/Admin/Analytics/Analytics';
import Branding from '../../pages/Dashboard/Admin/Branding/Branding';
import Users from '../../pages/Dashboard/Admin/Users/Users';
import AdminHome from './../../pages/Dashboard/Admin/AdminHome/AdminHome';
import Organization from './../../pages/Dashboard/Admin/Organization/Organization';
import Login from './../../pages/Login/Login';
import CreatePortfolioHome from '../../pages/Dashboard/Admin/CreatePortfolioHome/CreatePortfolioHome';
import Recommendation from '../../pages/Dashboard/Admin/Recommendation/Recommendation';
import Projects from '../../pages/Dashboard/Admin/Projects/Projects';

export const router = createBrowserRouter([
	//* normal main route
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

	//* for admin routes

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
		],
	},
]);
