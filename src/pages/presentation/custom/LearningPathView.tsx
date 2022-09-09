import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';

const LearningPathView = () => {
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='container'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-12'>
							<div className='py-3'>
								<div>CATALAG</div>
								<div className='display-4 fw-bold'>Learning Path Details</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<Card>
								<CardBody>
									<div className='row border-bottom'>
										<div className='col-lg-4 border-end py-4'>
											<p className='fw-bold m-0 fs-5'>Code</p>
											<p className='m-0 fs-5'>LP001</p>
										</div>
										<div className='col-lg-4 border-end py-4'>
											<p className='fw-bold m-0 fs-5'>Title</p>
											<p className='m-0 fs-5'>Cybersecurity Learning Path</p>
										</div>
										<div className='col-lg-4 py-4'>
											<p className='fw-bold m-0 fs-5'>Vendo</p>
											<p className='m-0 fs-5'>UMGC</p>
										</div>
									</div>
									<div className='row border-bottom'>
										<div className='col-lg-4 border-end py-4'>
											<p className='fw-bold m-0 fs-5'>Price</p>
											<p className='m-0 fs-5'>$999</p>
										</div>
										<div className='col-lg-4 border-end py-4'>
											<p className='fw-bold m-0 fs-5'>Duration</p>
											<p className='m-0 fs-5'>12 Months</p>
										</div>
										<div className='col-lg-4 py-4'>
											<p className='fw-bold m-0 fs-5'>Access Time</p>
											<p className='m-0 fs-5'>365 Days</p>
										</div>
									</div>
									<div className='row border-bottom'>
										<div className='col-lg-12 py-4'>
											<p className='fw-bold m-0 fs-5'>Description</p>
											<p className='m-0 fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
										</div>
									</div>
									<div className='row border-bottom'>
										<div className='col-lg-12 py-4'>
											<p className='fw-bold m-0 fs-5'>Categories</p>
											<p className='m-0 fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										</div>
									</div>
									<div className='row border-bottom'>
										<div className='col-lg-12 py-4'>
											<p className='fw-bold m-0 fs-5'>Skills</p>
											<p className='m-0 fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
										</div>
									</div>
									<div className='row border-bottom'>
										<div className='col-lg-12 py-4'>
											<p className='fw-bold m-0 fs-5'>Images</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-lg-12 py-4'>
											<p className='fw-bold m-0 fs-5'>Courses and Learning Paths</p>
										</div>
									</div>
									<div className='row border-bottom'>
										<div className='col-lg-12'>
											<Card>
												<div className='border-bottom p-3 p-lg-4 d-flex align-items-center justify-content-between'>
													<div className='d-flex flex-column'>
														<p className='mb-0 fs-5 fw-bold'>Intro to Cybersecutity</p>
														<p className='mb-0'>Courses</p>
													</div>
													<Button
														color="dark"
														isOutline
														icon="RemoveRedEye"
													>
														View
													</Button>
												</div>
												<div className='border-bottom p-3 p-lg-4 d-flex align-items-center justify-content-between'>
													<div className='d-flex flex-column'>
														<p className='mb-0 fs-5 fw-bold'>Cybersecutity Certificate</p>
														<p className='mb-0'>Courses</p>
													</div>
													<Button
														color="dark"
														isOutline
														icon="RemoveRedEye"
													>
														View
													</Button>
												</div>
												<div className='p-3 p-lg-4 d-flex align-items-center justify-content-between'>
													<div className='d-flex flex-column'>
														<p className='mb-0 fs-5 fw-bold'>Intro to Machine Learning</p>
														<p className='mb-0'>Courses</p>
													</div>
													<Button
														color="dark"
														isOutline
														icon="RemoveRedEye"
													>
														View
													</Button>
												</div>
											</Card>
										</div>
									</div>
									<div className="row align-items-center justify-content-center mt-5">
										<div className="col-lg-3">
											<button type="button" className="btn btn-outline-dark btn-lg w-100 mb-3 mb-lg-0">Return</button>
										</div>
										<div className="col-lg-3">
											<button type="button" className="btn btn-dark btn-lg w-100 mb-3 mb-lg-0">Edit Learning Path</button>
											</div>
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

export default LearningPathView;