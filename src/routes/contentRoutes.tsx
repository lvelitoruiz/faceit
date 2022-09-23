import React, { lazy } from 'react';
import {
	dashboardMenu,
	demoPages,
	layoutMenu,
	userMenu,
	organizationMenu,
	forms,
	catalogMenu,
	skills,
	categories,
} from '../menu';
import Login from '../pages/presentation/auth/Login';
import Categories from '../pages/presentation/custom/Categories';
import Register from '../pages/presentation/auth/Register';

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
	ADD_ADMIN: lazy(() => import('../pages/presentation/custom/AddAdmin')),
	EDIT_ADMIN: lazy(() => import('../pages/presentation/custom/EditAdmin')),
	ADD_ORGANIZATION: lazy(() => import('../pages/presentation/custom/AddOrganization')),
	EDIT_ORGANIZATION: lazy(() => import('../pages/presentation/custom/EditOrganization')),
	MANAGE_ADMIN: lazy(() => import('../pages/presentation/custom/ManageAdmin')),
	PROFILE: lazy(() => import('../pages/presentation/custom/Profile')),
	COURSES: lazy(() => import('../pages/presentation/custom/Courses')),
	CERTIFICATES: lazy(() => import('../pages/presentation/custom/Certificates')),
	LEARNING_PATH: lazy(() => import('../pages/presentation/custom/LearningPath')),
	ADD_COURSE: lazy(() => import('../pages/presentation/custom/AddCourse')),
	EDIT_COURSE: lazy(() => import('../pages/presentation/custom/EditCourse')),
	ADD_CERTIFICATE: lazy(() => import('../pages/presentation/custom/AddCertificate')),
	EDIT_CERTIFICATE: lazy(() => import('../pages/presentation/custom/EditCertificate')),
	ADD_LEARNING_PATH: lazy(() => import('../pages/presentation/custom/AddLearningPath')),
	EDIT_LEARNING_PATH: lazy(() => import('../pages/presentation/custom/EditLearningPath')),
	LEARNING_PATH_VIEW: lazy(() => import('../pages/presentation/custom/LearningPathView')),
	COURSE_VIEW: lazy(() => import('../pages/presentation/custom/CourseView')),
	SKILLS: lazy(() => import('../pages/presentation/custom/Skills')),
	CATEGORIES: lazy(() => import('../pages/presentation/custom/Categories')),
	SKILLS_ADD: lazy(() => import('../pages/presentation/custom/AddSkills')),
	SKILLS_EDIT: lazy(() => import('../pages/presentation/custom/EditSkills')),
	CATEGORIES_ADD: lazy(() => import('../pages/presentation/custom/AddCategories')),
	CATEGORIES_EDIT: lazy(() => import('../pages/presentation/custom/EditCategories')),
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
	{
		path: demoPages.register.path,
		element: <Register />,
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
	{
		path: forms.profile.path,
		element: <PAGE_LAYOUTS.PROFILE />,
		exact: true,
	},
	{
		path: forms.editOrganization.path,
		element: <PAGE_LAYOUTS.EDIT_ORGANIZATION />,
		exact: true,
	},
	{
		path: forms.addOrganization.path,
		element: <PAGE_LAYOUTS.ADD_ORGANIZATION />,
		exact: true,
	},
	{
		path: forms.manageAdmin.path,
		element: <PAGE_LAYOUTS.MANAGE_ADMIN />,
		exact: true,
	},
	{
		path: forms.editAdmin.path,
		element: <PAGE_LAYOUTS.EDIT_ADMIN />,
		exact: true,
	},
	{
		path: forms.addAdmin.path,
		element: <PAGE_LAYOUTS.ADD_ADMIN />,
		exact: true,
	},
	{
		path: catalogMenu.catalog.subMenu.courses.path,
		element: <PAGE_LAYOUTS.COURSES />,
		exact: true,
	},
	// {
	// 	path: catalogMenu.catalog.subMenu.certificates.path,
	// 	element: <PAGE_LAYOUTS.CERTIFICATES />,
	// 	exact: true,
	// },
	{
		path: catalogMenu.catalog.subMenu.learningPath.path,
		element: <PAGE_LAYOUTS.LEARNING_PATH />,
		exact: true,
	},
	{
		path: forms.addLearningPath.path,
		element: <PAGE_LAYOUTS.ADD_LEARNING_PATH />,
		exact: true,
	},
	{
		path: forms.editLearningPath.path,
		element: <PAGE_LAYOUTS.EDIT_LEARNING_PATH />,
		exact: true,
	},
	{
		path: forms.addCourse.path,
		element: <PAGE_LAYOUTS.ADD_COURSE />,
		exact: true,
	},
	{
		path: forms.editCourse.path,
		element: <PAGE_LAYOUTS.EDIT_COURSE />,
		exact: true,
	},
	// {
	// 	path: forms.addCertificate.path,
	// 	element: <PAGE_LAYOUTS.ADD_CERTIFICATE />,
	// 	exact: true,
	// },
	{
		path: forms.editCertificate.path,
		element: <PAGE_LAYOUTS.EDIT_CERTIFICATE />,
		exact: true,
	},
	{
		path: forms.learningPathView.path,
		element: <PAGE_LAYOUTS.LEARNING_PATH_VIEW />,
		exact: true,
	},
	{
		path: forms.courseView.path,
		element: <PAGE_LAYOUTS.COURSE_VIEW />,
		exact: true,
	},
	{
		path: skills.skill.path,
		element: <PAGE_LAYOUTS.SKILLS />,
		exact: true,
	},
	{
		path: categories.category.path,
		element: <PAGE_LAYOUTS.CATEGORIES />,
		exact: true,
	},
	{
		path: forms.addSkills.path,
		element: <PAGE_LAYOUTS.SKILLS_ADD />,
		exact: true,
	},
	{
		path: forms.editSkills.path,
		element: <PAGE_LAYOUTS.SKILLS_EDIT />,
		exact: true,
	},
	{
		path: forms.addCategories.path,
		element: <PAGE_LAYOUTS.CATEGORIES_ADD />,
		exact: true,
	},
	{
		path: forms.editCategories.path,
		element: <PAGE_LAYOUTS.CATEGORIES_EDIT />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
