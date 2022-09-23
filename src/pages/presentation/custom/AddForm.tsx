import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Button from '../../../components/bootstrap/Button';

const AddForm = () => {
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='container'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-6'>
							<div className='py-3'>
								<div>USERS</div>
								<div className='display-4 fw-bold'>Add Students</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<Card>
								<CardBody>
									<div className='row'>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='First Name'>
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
												label='Last Name'>
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
												label='Email Address'>
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
												label='Password'>
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
												label='Phome Number'>
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
												label='Organization'>
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
												label='Group'>
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
												label='Time Zone'>
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
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Avatar Picture'>
												<Input type='file' autoComplete='photo' />
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
												Create User
											</Button>
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

export default AddForm;
