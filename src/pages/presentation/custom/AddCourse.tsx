import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Button from '../../../components/bootstrap/Button';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Icon from '../../../components/icon/Icon';

const AddCourse = () => {
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='container'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-6 col-md-5'>
							<div className='py-3'>
								<div>CATALAG</div>
								<div className='display-4 fw-bold'>Add Course</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-7'>
							<div className='py-3'>
								<div className='d-flex align-items-center justify-content-between'>
									<div className='d-flex align-items-center'>
										<div className='bg-dark p-1 me-3 d-flex align-items-center justify-content-center rounded-circle' style={{ width: '30px', height: '30px' }}>
											<span className='text-white fw-bold'>1</span>
										</div>
										<p className='m-0 d-none d-md-block'>General Details</p>
									</div>
									<div className='d-flex align-items-center'>
										<div className='bg-dark p-1 me-3 d-flex align-items-center justify-content-center rounded-circle bg-opacity-10' style={{ width: '30px', height: '30px' }}>
											<span className='text-white fw-bold'>2</span>
										</div>
										<p className='m-0 d-none d-md-block'>Categories and Skills</p>
									</div>
									<div className='d-flex align-items-center'>
										<div className='bg-dark p-1 me-3 d-flex align-items-center justify-content-center rounded-circle bg-opacity-10' style={{ width: '30px', height: '30px' }}>
											<span className='text-white fw-bold'>3</span>
										</div>
										<p className='m-0 d-none d-md-block'>Images</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<Card>
								<CardBody>
									<div className='row align-items-center'>
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Title'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Vendor'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
												{/* <Select
															value=""
														>
															<Option value={1}>
																One
															</Option>
															<Option value={2}>
																Two
															</Option>
															<Option value={3}>
																Three
															</Option>
															<Option value={4}>
																Four
															</Option>
															<Option value={5}>
																Five
															</Option>
															<Option value={6}>
																Six
															</Option>
														</Select> */}
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Category'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
												{/* <Select
															value=""
														>
															<Option value={1}>
																One
															</Option>
															<Option value={2}>
																Two
															</Option>
															<Option value={3}>
																Three
															</Option>
															<Option value={4}>
																Four
															</Option>
															<Option value={5}>
																Five
															</Option>
															<Option value={6}>
																Six
															</Option>
														</Select> */}
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Code'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Price'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Duration'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<ChecksGroup className='d-flex align-items-center justify-content-between'>
												<Checks
													id='example'
													label='Hours'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
													className='me-3'
												/>
												<Checks
													id='example'
													label='Days'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
												/>
												<Checks
													id='example'
													label='Weeks'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
												/>
												<Checks
													id='example'
													label='Months'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
												/>
											</ChecksGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Access Time'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<ChecksGroup className='d-flex align-items-center justify-content-between'>
												<Checks
													id='example'
													label='Hours'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
													className='me-3'
												/>
												<Checks
													id='example'
													label='Days'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
												/>
												<Checks
													id='example'
													label='Weeks'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
												/>
												<Checks
													id='example'
													label='Months'
													name='example'
													onChange={function noRefCheck() {}}
													type='radio'
													value='radio value'
												/>
											</ChecksGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Description'>
												<Textarea
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
									</div>
									<div className='row align-items-center justify-content-center mt-5'>
										<div className='col-lg-3'>
											<Button
												color='dark'
												isOutline
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Cancel
											</Button>
										</div>
										<div className='col-lg-3'>
											<Button
												color='dark'
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Save and Continue
											</Button>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									<div className='row align-items-center mb-5'>
										<div className='col-lg-6 mb-2'>
											<p className='fw-bold m-0 fs-5'>Category</p>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
													placeholder='Skill (ex: Cybersecurity)'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<div className='row align-items-center'>
												<div className="col-auto">
													<div className="border d-flex align-items-center border-info border-2 text-info fw-bold px-2 py-1 rounded-1">
														<p className='m-0'>Cybersercutiry</p>
														<Icon
															icon='Close'
															size='lg'
															color='primary'
															className='ms-4'
															/>
													</div>
												</div>
												<div className="col-auto">
													<div className="border d-flex align-items-center border-info border-2 text-info fw-bold px-2 py-1 rounded-1">
														<p className='m-0'>Cybersercutiry</p>
														<Icon
															icon='Close'
															size='lg'
															color='primary'
															className='ms-4'
															/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='row align-items-center'>
										<div className='col-lg-6 mb-2'>
											<p className='fw-bold m-0 fs-5'>Skills</p>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
													placeholder='Skill (ex: Cybersecurity)'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<div className='row align-items-center'>
												<div className="col-auto">
													<div className="border d-flex align-items-center border-info border-2 text-info fw-bold px-2 py-1 rounded-1">
														<p className='m-0'>Cybersercutiry</p>
														<Icon
															icon='Close'
															size='lg'
															color='primary'
															className='ms-4'
															/>
													</div>
												</div>
												<div className="col-auto">
													<div className="border d-flex align-items-center border-info border-2 text-info fw-bold px-2 py-1 rounded-1">
														<p className='m-0'>Cybersercutiry</p>
														<Icon
															icon='Close'
															size='lg'
															color='primary'
															className='ms-4'
															/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='row align-items-center justify-content-center mt-5'>
										<div className='col-lg-3'>
											<Button
												color='dark'
												isOutline
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Return
											</Button>
										</div>
										<div className='col-lg-3'>
											<Button
												color='dark'
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Save and Continue
											</Button>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									<div className='row align-items-center'>
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Thumbnail'>
													<Input type='file' autoComplete='photo'/>
											</FormGroup>
										</div>
									</div>
									<div className='row align-items-center justify-content-center mt-5'>
										<div className='col-lg-3'>
											<Button
												color='dark'
												isOutline
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Return
											</Button>
										</div>
										<div className='col-lg-3'>
											<Button
												color='dark'
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Save
											</Button>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardBody>
									<div className='row align-items-center justify-content-center'>
										<div className='col-md-10 text-center pt-5 pb-5'>
											<h3 className='fw-bold display-5 mb-3'>Congratulations</h3>
											<p className='m-0 fs-3 mb-3'>Your Course has been created</p>
											<p className='mb-1'>You can now access, edit, and manage your Course from the main menu.</p>
											<p>What do you want to do next?</p>
											<div className='d-lg-flex items-center justify-content-center mt-5 gap-4'>
												<button className='btn btn-outline-dark btn-lg mb-3 mb-lg-0'>Return to Course Management</button>
												<button className='btn btn-outline-dark btn-lg mb-3 mb-lg-0'>Create Another Course</button>
												<button className='btn btn-outline-dark btn-lg mb-3 mb-lg-0'>Edit Course in CMS</button>
											</div>
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

export default AddCourse;
