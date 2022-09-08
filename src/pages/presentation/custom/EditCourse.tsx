import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Icon from '../../../components/icon/Icon';

const EditCourse = () => {

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
									<div className='row p-4'>
										<div className='col-12'>
											<Button
												color='dark'
												className='w-100 p-3 mb-4'
												isOutline={!edit}
												onClick={ () => handleChange('edit')}
											>
												General Information
											</Button>
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												className='w-100 p-3 mb-4'
												isOutline={!change}
												onClick={ () => handleChange('change')}
											>
												Categories and Skills
											</Button>
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												className='w-100 p-3 mb-4'
												isOutline={!enroll}
												onClick={ () => handleChange('enroll')}
											>
												Images
											</Button>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-md-9 col-lg-10'>
							<div className='row align-items-center mb-3 mb-lg-3'>
								<div className='col-lg-9'>
									<div className='py-3'>
										<div>CATALOG</div>
										<div className='display-4 fw-bold'>Edit Course</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<div className='py-3'>
										<Button
											color='dark'
											isOutline
											size='lg'
											className='w-100 mb-3 mb-lg-0'>
											Desactivate
										</Button>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									{
										(edit) ?
										<div>
											<Card>
												<CardBody>
													<div className='row align-items-center'>
														<div className='col-lg-9'>
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
														<div className='col-lg-3'>
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
																Seve Changes
															</Button>
														</div>
													</div>
												</CardBody>
											</Card>
										</div> : ""
									}
									{
										(change) ?
										<div>
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
																Seve Changes
															</Button>
														</div>
													</div>
												</div>
												</CardBody>
											</Card>
										</div> : ""
									}
									{
										(enroll) ?
										<div>
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
																Seve Changes
															</Button>
														</div>
													</div>
												</CardBody>
											</Card>
										</div> : ""
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditCourse;