import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import UserImageWebp from '../../../assets/img/wanna/wanna1.webp';
import UserImage from '../../../assets/img/wanna/wanna1.png';
import Avatar from '../../../components/Avatar';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';

const EditForm = () => {
	const [ edit,setEdit ] = useState(true);
	const [ change,setChange ] = useState(false);
	const [ enroll,setEnroll ] = useState(false);

	useEffect( () => {
		setEdit(true)
		setChange(false)
		setEnroll(false)
	},[])

	const handleChange = ( status: string ) => {
		if(status === "edit") {
			setEdit(true)
			setChange(false)
			setEnroll(false)
		} else if(status === 'change') {
			setEdit(false)
			setChange(true)
			setEnroll(false)
		} else {
			setEdit(false)
			setChange(false)
			setEnroll(true)
		}
	}

	
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='py-lg-5'>
				<div className='mb-lg-5'>
					<div className='row h-100'>
						<div className='col-md-3 col-lg-2'>
							<Card className='card card-stretch-full'>
								<CardBody className='p-0'>
									<div className='border-bottom mb-4 pt-3 ps-2'>
										<Button
											color="link"
											icon='ArrowBackIos'
											className='mb-2'
										>
											Return
										</Button>
									</div>
									<div className='d-flex align-items-center justify-content-center flex-column border-bottom'>
										<Avatar
											srcSet={UserImageWebp}
											src={UserImage}
											className='rounded-circle'
										/>
										<p className='fw-bold fs-5 mt-2'>John Doe</p>
									</div>
									<div className='row p-4'>
										<div className='col-12'>
											<Button
												color='dark'
												isOutline={!edit}
												className='w-100 p-3 mb-4'
												onClick={ () => handleChange('edit')}
											>
												Edit Information
											</Button>
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												isOutline={!change}
												className='w-100 p-3 mb-4'
												onClick={ () => handleChange('change')}
											>
												Change Password
											</Button>
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												isOutline={!enroll}
												className='w-100 p-3 mb-4'
												onClick={ () => handleChange('enroll')}
											>
												Enrollments
											</Button>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-9 col-lg-10'>
							{/* Edit information */}
							{
								(edit) ? 
								<div>
									<div className='row align-items-center mb-3 mb-lg-3'>
										<div className='col-lg-6'>
											<div className='py-3'>
												<div>STUDENT INFO</div>
												<div className='display-4 fw-bold'>Edit Information</div>
											</div>
										</div>
										<div className='col-lg-6'>
											<div className='row align-items-center justify-content-end'>
												<div className='col-md-5 col-lg-auto'>
													<Button
														color="dark"
														isOutline
														size='lg'
														className='w-100 mb-3 mb-lg-0'
													>
														Delete user Permanently
													</Button>
												</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<Card className='px-4 py-3 card card-stretch-full'>
												<div className='row'>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='First Name'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Last Name'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Email Address'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Phome Number'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Organization'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Group'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
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
															label='Time Zone'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
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
															label='Status'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
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
												</div>
												<div className='row align-items-center justify-content-center mt-5'>
													<div className='col-lg-3'>
														<Button
															color="dark"
															isOutline
															size='lg'
															className='w-100 mb-3 mb-lg-0'
														>
															Cancel
														</Button>
													</div>
													<div className='col-lg-3'>
														<Button
															color="dark"
															size='lg'
															className='w-100 mb-3 mb-lg-0'
														>
															Save Changes
														</Button>
													</div>
												</div>
											</Card>
										</div>
									</div>
								</div> : ""
							}

							{/* Change Password */}
							{
								(change) ? 
								<div>
									<div className='row align-items-center mb-3 mb-lg-3'>
										<div className='col-lg-6'>
											<div className='py-3'>
												<div>STUDENT INFO</div>
												<div className='display-4 fw-bold'>Change Password</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<Card className='px-4 py-3 card card-stretch-full'>
												<div className='row'>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='New Password'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
													<div className='col-lg-6'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Confirm New Password'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
																className='w-100'
															/>
														</FormGroup>
													</div>
												</div>
												<div className='row align-items-center justify-content-center mt-5'>
													<div className='col-lg-3'>
														<Button
															color="dark"
															isOutline
															size='lg'
															className='w-100 mb-3 mb-lg-0'
														>
															Cancel
														</Button>
													</div>
													<div className='col-lg-3'>
														<Button
															color="dark"
															size='lg'
															className='w-100 mb-3 mb-lg-0'
														>
															Save Changes
														</Button>
													</div>
												</div>
											</Card>
										</div>
									</div>
								</div>: ""
							}

							{/* Enrollments */}
							{
								(enroll) ?
								<div>
									<div className='row align-items-center mb-3 mb-lg-3'>
										<div className='col-lg-6'>
											<div className='py-3'>
												<div>STUDENT INFO</div>
												<div className='display-4 fw-bold'>Enrollments</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<Card className='p-0 card card-stretch-full'>
												<div className='border-bottom p-3 p-lg-5 d-flex align-items-center justify-content-between'>
													<p className='mb-0 fs-5'>Cybersecutity Bootcamp</p>
													<Button
														color="dark"
														isOutline
														icon="Edit"
													>
														Unenroll
													</Button>
												</div>
												<div className='p-3 p-lg-5 d-flex align-items-center justify-content-between'>
													<p className='mb-0 fs-5'>Cybersecutity Bootcamp</p>
													<Button
														color="dark"
														isOutline
														icon="Edit"
													>
														Unenroll
													</Button>
												</div>
											</Card>
										</div>
									</div>
									<div className='row align-items-center mb-3 mb-lg-3'>
										<div className='col-lg-6'>
											<div className='py-3'>
												<div className='display-4 fw-bold'>Enroll in Course</div>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<Card className='px-4 py-3 card card-stretch-full'>
												<div className='row'>
													<div className='col-12'>
														<FormGroup
															className='mb-4'
															id='formPrefix'
															label='Courses'>
															<Input
																autoComplete='honorific-prefix'
																onChange={function noRefCheck(){}}
																value=""
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
													<div className='col-12'>
														<Button 
															color="dark"
															size='lg'
														>
															Enroll
														</Button>
													</div>
												</div>
											</Card>
										</div>
									</div>
								</div> : ""
							}
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditForm;