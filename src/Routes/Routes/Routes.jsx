import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import MainLayout from '../../Layouts/MainLayout/MainLayout';
import Users from '../../pages/Dashboard/Admin/Users/Users';
import AdminHome from './../../pages/Dashboard/Admin/AdminHome/AdminHome';
import Organization from './../../pages/Dashboard/Admin/Organization/Organization';
import Login from './../../pages/Login/Login';
import Analytics from '../../pages/Dashboard/Admin/Analytics/Analytics';

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
		],
	},
]);
