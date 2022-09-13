export const homeMenu = {
	intro: { id: 'intro', text: 'Intro', path: '#intro', icon: 'Vrpano', subMenu: null },
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap Components',
		path: '#bootstrap',
		icon: 'BootstrapFill',
		subMenu: null,
	},
	storybook: {
		id: 'storybook',
		text: 'Storybook',
		path: '#storybook',
		icon: 'CustomStorybook',
		subMenu: null,
	},
	formik: {
		id: 'formik',
		text: 'Formik',
		path: '#formik',
		icon: 'CheckBox',
		subMenu: null,
	},
	apex: {
		id: 'apex',
		text: 'Apex Charts',
		path: '#apex',
		icon: 'AreaChart',
		subMenu: null,
	},
};

export const skills = {
	skill: {
		id: 'skills',
		text: 'Skills',
		path: '/skills',
		icon: 'Code',
		subMenu: null,
	},
};

export const categories = {
	category: {
		id: 'categories',
		text: 'Categories',
		path: '/categories',
		icon: 'Code',
		subMenu: null,
	},
};

export const dashboardMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: '/',
		icon: 'Dashboard',
		subMenu: null,
	},
};

export const userMenu = {
	user: {
		id: 'user',
		text: 'User',
		path: 'user',
		icon: 'Group',
		subMenu: {
			students: {
				id: 'students',
				text: 'Students',
				path: 'user/students',
				icon: 'ViewAgenda',
			},
			organizationAdmin: {
				id: 'organizationAdmin',
				text: 'Organization Admin',
				path: 'user/organization-admin',
				icon: 'WebAsset',
			},
		},
	},
};

export const catalogMenu = {
	catalog: {
		id: 'catalog',
		text: 'CATALOG',
		path: '/catalog',
		icon: 'Book',
		subMenu: {
			courses: {
				id: 'courses',
				text: 'COURSES',
				path: '/courses',
				icon: 'Book',
				subMenu: null,
			},
			// certificates: {
			// 	id: 'certificates',
			// 	text: 'CERTIFICATES',
			// 	path: '/certificates',
			// 	icon: 'Book',
			// 	subMenu: null,
			// },
			learningPath: {
				id: 'learningPath',
				text: 'LEARNING PATH',
				path: '/learning-path',
				icon: 'Book',
				subMenu: null,
			},
		},
	},	
};

export const organizationMenu = {
	organization: {
		id: 'organization',
		text: 'Organizations',
		path: '/organization',
		icon: 'Business',
		subMenu: null,
	},
};

export const cmsMenu = {
	cms: {
		id: 'cms',
		text: 'CMS',
		path: '/',
		icon: 'ControlCamera',
		subMenu: null,
	},
};

export const forms = {
	edit: {
		id: 'edit',
		text: 'EDIT',
		path: '/edit',
		icon: 'Code',
		subMenu: null,
	},
	add: {
		id: 'add',
		text: 'ADD',
		path: '/add',
		icon: 'Code',
		subMenu: null,
	},
	editOrganization: {
		id: 'editorganization',
		text: 'EDIT ORGANIZATION',
		path: '/edit-organization',
		icon: 'Code',
		subMenu: null,
	},
	addOrganization: {
		id: 'addorganization',
		text: 'ADD ORGANIZATION',
		path: '/add-organization',
		icon: 'Code',
		subMenu: null,
	},
	manageAdmin: {
		id: 'manageadmin',
		text: 'MANAGE ADMINS',
		path: '/manage-admins',
		icon: 'Code',
		subMenu: null,
	},
	profile: {
		id: 'profile',
		text: 'PROFILE',
		path: '/profile',
		icon: 'Code',
		subMenu: null,
	},
	editAdmin: {
		id: 'editadmin',
		text: 'EDIT ADMIN',
		path: '/edit-admin',
		icon: 'Code',
		subMenu: null,
	},
	addAdmin: {
		id: 'addadmin',
		text: 'ADD ADMIN',
		path: '/add-admin',
		icon: 'Code',
		subMenu: null,
	},
	addCourse: {
		id: 'addcourse',
		text: 'ADD COURSE',
		path: '/add-course',
		icon: 'Code',
		subMenu: null,
	},
	editCourse: {
		id: 'editcourse',
		text: 'EDIT COURSE',
		path: '/edit-course',
		icon: 'Code',
		subMenu: null,
	},
	addCertificate: {
		id: 'addcertificate',
		text: 'ADD CERTIFICATE',
		path: '/add-certificate',
		icon: 'Code',
		subMenu: null,
	},
	editCertificate: {
		id: 'editcertificate',
		text: 'EDIT CERTIFICATE',
		path: '/edit-certificate',
		icon: 'Code',
		subMenu: null,
	},
	addLearningPath: {
		id: 'addlearningpath',
		text: 'ADD LEARNING PATH',
		path: '/add-learning-path',
		icon: 'Code',
		subMenu: null,
	},
	editLearningPath: {
		id: 'editlearningpath',
		text: 'EDIT LEARNING PATH',
		path: '/edit-learning-path',
		icon: 'Code',
		subMenu: null,
	},
	learningPathView: {
		id: 'learningPathView',
		text: 'LEARNING PATH VIEW',
		path: '/learning-path-view',
		icon: 'Code',
		subMenu: null,
	},
	courseView: {
		id: 'courseView',
		text: 'COURSE VIEW',
		path: '/course-view',
		icon: 'Code',
		subMenu: null,
	},
	addSkills: {
		id: 'addskills',
		text: 'ADD SKILLS',
		path: '/add-skills',
		icon: 'Code',
		subMenu: null,
	},
	editSkills: {
		id: 'editskills',
		text: 'EDIT SKILLS',
		path: '/edit-skills',
		icon: 'Code',
		subMenu: null,
	},
	addCategories: {
		id: 'addcategories',
		text: 'ADD CATEGORIES',
		path: '/add-categories',
		icon: 'Code',
		subMenu: null,
	},
	editCategories: {
		id: 'editcategories',
		text: 'EDIT CATEGORIES',
		path: '/edit-categories',
		icon: 'Code',
		subMenu: null,
	},
};

export const demoPages = {
	auth: {
		id: 'auth',
		text: 'Auth Pages',
		icon: 'Extension',
	},
	login: {
		id: 'login',
		text: 'Login',
		path: 'auth-pages/login',
		icon: 'Login',
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: 'auth-pages/sign-up',
		icon: 'PersonAdd',
	},

	page404: {
		id: 'Page404',
		text: '404 Page',
		path: 'auth-pages/404',
		icon: 'ReportGmailerrorred',
	},
};

export const layoutMenu = {
	layoutTypes: {
		id: 'layoutTypes',
		text: 'Page Layout Types',
	},
	blank: {
		id: 'blank',
		text: 'Blank',
		path: 'page-layouts/blank',
		icon: 'check_box_outline_blank ',
	},
	pageLayout: {
		id: 'pageLayout',
		text: 'Page Layout',
		path: 'page-layouts',
		icon: 'BackupTable',
		subMenu: {
			headerAndSubheader: {
				id: 'headerAndSubheader',
				text: 'Header & Subheader',
				path: 'page-layouts/header-and-subheader',
				icon: 'ViewAgenda',
			},
			onlyHeader: {
				id: 'onlyHeader',
				text: 'Only Header',
				path: 'page-layouts/only-header',
				icon: 'ViewStream',
			},
			onlySubheader: {
				id: 'onlySubheader',
				text: 'Only Subheader',
				path: 'page-layouts/only-subheader',
				icon: 'ViewStream',
			},
			onlyContent: {
				id: 'onlyContent',
				text: 'Only Content',
				path: 'page-layouts/only-content',
				icon: 'WebAsset',
			},
		},
	},
	asideTypes: {
		id: 'asideTypes',
		text: 'Aside Types',
		path: 'aside-types',
		icon: 'Vertical Split',
		subMenu: {
			defaultAside: {
				id: 'defaultAside',
				text: 'Default Aside',
				path: 'aside-types/default-aside',
				icon: 'ViewQuilt',
			},
			minimizeAside: {
				id: 'minimizeAside',
				text: 'Minimize Aside',
				path: 'aside-types/minimize-aside',
				icon: 'View Compact',
			},
		},
	},
};

export const productsMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
