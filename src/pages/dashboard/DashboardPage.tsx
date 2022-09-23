import React, { useEffect, useState } from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Card, { CardBody } from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import { useNavigate } from 'react-router-dom';
import { forms, organizationMenu, userMenu } from '../../menu';

const DashboardPage = () => {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState<any>([]);

	useEffect(() => {
		const userInformation = JSON.parse(localStorage.getItem('user_info') || '{}');
		if (userInformation) {
			setUserInfo(userInformation.profile);
		}
	}, []);

	return (
		<PageWrapper title='Dashboard Page'>
			<Page className='p-lg-5'>
				<div className='mb-lg-5'>
					<div className='row'>
						<div className='col-12 mb-3'>
							<div className='display-4 fw-bold py-3'>Welcome back, {userInfo?.firstName}!</div>
						</div>
					</div>
					<div className='row mt-lg-4'>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div className='d-flex align-items-center'>
										<div>
											<h3 className='display-3 m-0'>150</h3>
											<span className='h5 fw-bold'>Courses</span>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div className='d-flex align-items-center'>
										<div>
											<h3 className='display-3 m-0'>500</h3>
											<span className='h5 fw-bold'>Students</span>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div className='d-flex align-items-center'>
										<div>
											<h3 className='display-3 m-0'>20</h3>
											<span className='h5 fw-bold'>Organizations</span>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div className='d-flex align-items-center'>
										<div>
											<h3 className='display-3 m-0'>150</h3>
											<span className='h5 fw-bold'>New Enrollments</span>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>

				<div className='mt-lg-5'>
					<div className='row'>
						<div className='col-12'>
							<div className='h5 fw-bold py-3'>QUICK ACTIONS</div>
						</div>
					</div>
					<div className='row mt-lg-2'>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div
										className='d-flex align-items-center justify-content-between'
										onClick={() => {
											navigate(`../${forms.add.path}`);
										}}>
										<div>
											<h3 className='display-3 m-0'>Add</h3>
											<span className='h5 fw-bold'>New User</span>
										</div>
										<Icon icon='PersonAdd' size='4x' color='dark' />
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div
										className='d-flex align-items-center justify-content-between'
										onClick={() => {
											navigate(`../${userMenu.user.subMenu.students.path}`);
										}}>
										<div>
											<h3 className='display-3 m-0'>Manage</h3>
											<span className='h5 fw-bold'>Users</span>
										</div>
										<Icon icon='Group' size='4x' color='dark' />
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div
										className='d-flex align-items-center justify-content-between'
										onClick={() => {
											navigate(`../${forms.addOrganization.path}`);
										}}>
										<div>
											<h3 className='display-3 m-0'>Add</h3>
											<span className='h5 fw-bold'>New Organization</span>
										</div>
										<Icon icon='AddBusiness' size='4x' color='dark' />
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-6 col-lg-3'>
							<Card
								className={`bg-lg-dark rounded-2 shadow-3d-dark shadow-3d-hover cursor-pointer p-3`}>
								<CardBody>
									<div
										className='d-flex align-items-center justify-content-between'
										onClick={() => {
											navigate(`../${organizationMenu.organization.path}`);
										}}>
										<div>
											<h3 className='display-3 m-0'>Manage</h3>
											<span className='h5 fw-bold'>Organization</span>
										</div>
										<Icon icon='Business' size='4x' color='dark' />
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
