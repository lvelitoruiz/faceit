import React from 'react';
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
import Icon from '../../../components/icon/Icon';

const EditAdmin = () => {
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
										<p className='fw-bold fs-5 mt-2'>Accelered</p>
									</div>
									<div className='row p-4'>
										<div className='col-12'>
											<Button
												color='dark'
												className='w-100 p-3 mb-4'
											>
												Edit Information
											</Button>
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												isOutline
												className='w-100 p-3 mb-4'
											>
												Change Password
											</Button>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-9 col-lg-10'>
							{/* Edit information */}
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
													Desactivate
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
														label='Password'>
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
												<div className='col-lg-12'>
													<FormGroup
														className='mb-4'
														id='formPrefix'
														label='Avatar Picture'>
															<Input type='file' autoComplete='photo'/>
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
														Create User
													</Button>
												</div>
											</div>
										</Card>
									</div>
								</div>
							</div>

							{/* Change Password */}
							<div>
								<div className='row align-items-center mb-3 mb-lg-3'>
									<div className='col-lg-6'>
										<div className='py-3'>
											<div>ORGANIZATION ADMIN INFO</div>
											<div className='display-4 fw-bold'>Change Password</div>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='row align-items-center justify-content-end'>
											<div className='col-md-5 col-lg-auto'>
												<Button
													color="dark"
													icon='PersonAdd'
													size='lg'
													className='w-100 mb-3 mb-lg-0'
												>
													Add Admin
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
							</div>

						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditAdmin;