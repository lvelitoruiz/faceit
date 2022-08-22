import React, { lazy } from 'react';
import { dashboardMenu, demoPages, layoutMenu, userMenu, organizationMenu, forms } from '../menu';
import Login from '../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/dashboard/DashboardPage')),
};
const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};
const PAGE_LAYOUTS = {
	HEADER_SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/HeaderAndSubheader')),
	HEADER: lazy(() => import('../pages/presentation/page-layouts/OnlyHeader')),
	SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/OnlySubheader')),
	CONTENT: lazy(() => import('../pages/presentation/page-layouts/OnlyContent')),
	BLANK: lazy(() => import('../pages/presentation/page-layouts/Blank')),
	ASIDE: lazy(() => import('../pages/presentation/aside-types/DefaultAsidePage')),
	MINIMIZE_ASIDE: lazy(() => import('../pages/presentation/aside-types/MinimizeAsidePage')),
	ORGANIZATION: lazy(() => import('../pages/presentation/custom/Organization')),
	STUDENT: lazy(() => import('../pages/presentation/custom/Student')),
	ORGANIZATION_ADMIN: lazy(() => import('../pages/presentation/custom/OrganizationAdmin')),
	EDIT_FORM: lazy(() => import('../pages/presentation/custom/EditForm')),
	ADD_FORM: lazy(() => import('../pages/presentation/custom/AddForm')),
};

const presentation = [
	/**
	 * Landing
	 */
	{
		path: dashboardMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
		exact: true,
	},
	{
		path: demoPages.page404.path,
		element: <AUTH.PAGE_404 />,
		exact: true,
	},
	{
		path: demoPages.login.path,
		element: <Login />,
		exact: true,
	},
	{
		path: demoPages.signUp.path,
		element: <Login isSignUp />,
		exact: true,
	},

	/** ************************************************** */

	/**
	 * Page Layout Types
	 */
	{
		path: layoutMenu.blank.path,
		element: <PAGE_LAYOUTS.BLANK />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PAGE_LAYOUTS.HEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlySubheader.path,
		element: <PAGE_LAYOUTS.SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyContent.path,
		element: <PAGE_LAYOUTS.CONTENT />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.defaultAside.path,
		element: <PAGE_LAYOUTS.ASIDE />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.minimizeAside.path,
		element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
		exact: true,
	},
	{
		path: organizationMenu.organization.path,
		element: <PAGE_LAYOUTS.ORGANIZATION />,
		exact: true,
	},
	{
		path: userMenu.user.subMenu.students.path,
		element: <PAGE_LAYOUTS.STUDENT />,
		exact: true,
	},
	{
		path: userMenu.user.subMenu.organizationAdmin.path,
		element: <PAGE_LAYOUTS.ORGANIZATION_ADMIN />,
		exact: true,
	},
	{
		path: forms.edit.path,
		element: <PAGE_LAYOUTS.EDIT_FORM />,
		exact: true,
	},
	{
		path: forms.add.path,
		element: <PAGE_LAYOUTS.ADD_FORM />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
