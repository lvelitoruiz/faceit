import React, { useEffect, useState } from 'react';
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
	const [edit, setEdit] = useState(true);
	const [categories, setCategories] = useState(false);
	const [images, setImages] = useState(false);
	const [courses, setCourses] = useState(false);

	useEffect(() => {
		setEdit(true);
		setCategories(false);
		setImages(false);
		setCourses(false);
	}, []);

	const handleChange = (status: string) => {
		if (status === 'edit') {
			setEdit(true);
			setCategories(false);
			setImages(false);
			setCourses(false);
		} else if (status === 'categories') {
			setEdit(false);
			setCategories(true);
			setImages(false);
			setCourses(false);
		} else if (status === 'images') {
			setEdit(false);
			setCategories(false);
			setImages(true);
			setCourses(false);
		} else {
			setEdit(false);
			setCategories(false);
			setImages(false);
			setCourses(true);
		}
	};

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
										<div
											className={`cursor-pointer bg-dark p-1 me-3 d-flex align-items-center justify-content-center rounded-circle ${
												edit ? '' : 'bg-opacity-10'
											}`}
											style={{ width: '30px', height: '30px' }}
											onClick={() => handleChange('edit')}>
											<span className='text-white fw-bold'>1</span>
										</div>
										<p className='m-0 d-none d-md-block'>General Details</p>
									</div>
									<div className='d-flex align-items-center'>
										<div
											className={`cursor-pointer bg-dark p-1 me-3 d-flex align-items-center justify-content-center rounded-circle ${
												categories ? '' : 'bg-opacity-10'
											}`}
											style={{ width: '30px', height: '30px' }}
											onClick={() => handleChange('categories')}>
											<span className='text-white fw-bold'>2</span>
										</div>
										<p className='m-0 d-none d-md-block'>
											Categories and Skills
										</p>
									</div>
									<div className='d-flex align-items-center'>
										<div
											className={`cursor-pointer bg-dark p-1 me-3 d-flex align-items-center justify-content-center rounded-circle ${
												images ? '' : 'bg-opacity-10'
											}`}
											style={{ width: '30px', height: '30px' }}
											onClick={() => handleChange('images')}>
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
							{edit ? (
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
													className='w-100 mb-3 mb-lg-0'
													onClick={() => handleChange('categories')}>
													Save and Continue
												</Button>
											</div>
										</div>
									</CardBody>
								</Card>
							) : (
								''
							)}
							{categories ? (
								<Card>
									<CardBody>
										<div className='row align-items-center mb-5'>
											<div className='col-lg-6 mb-2'>
												<p className='fw-bold m-0 fs-5'>Category</p>
											</div>
											<div className='col-lg-12'>
												<div className='g-drop-search'>
													<div className='g-drop-search--input'>
														<p className='m-0'>
															Sofware Development, Mobile and Web
															Development{' '}
															<span className='more'>+3 more...</span>
														</p>
														<Icon
															icon='KeyboardArrowDown'
															size='lg'
															className='ms-4'
														/>
													</div>
													<div className='g-drop-search--content'>
														<div className='d-flex align-items-center g-search'>
															<Icon
																icon='Search'
																size='2x'
																color='dark'
															/>
															<Input
																id='example'
																onBlur={function noRefCheck() {}}
																onChange={function noRefCheck() {}}
																onFocus={function noRefCheck() {}}
																onInput={function noRefCheck() {}}
																onInvalid={function noRefCheck() {}}
																onSelect={function noRefCheck() {}}
																placeholder='Search'
																size='lg'
																className='ms-2'
															/>
														</div>
														<div className='g-list-check'>
															<ChecksGroup className='mb-3'>
																<Checks
																	id='example'
																	label='Computer Science'
																	name='example'
																	onChange={function noRefCheck() {}}
																	type='radio'
																	value='radio value'
																/>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Sofware Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																		className=''
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Mobile and Web Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Algoritms'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
															</ChecksGroup>
															<ChecksGroup>
																<Checks
																	id='example'
																	label='Computer Science'
																	name='example'
																	onChange={function noRefCheck() {}}
																	type='radio'
																	value='radio value'
																/>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Sofware Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																		className=''
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Mobile and Web Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Algoritms'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
															</ChecksGroup>
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
												<div className='g-drop-search'>
													<div className='g-drop-search--input'>
														<p className='m-0'>
															Sofware Development, Mobile and Web
															Development{' '}
															<span className='more'>+3 more...</span>
														</p>
														<Icon
															icon='KeyboardArrowDown'
															size='lg'
															className='ms-4'
														/>
													</div>
													<div className='g-drop-search--content active'>
														<div className='d-flex align-items-center g-search'>
															<Icon
																icon='Search'
																size='2x'
																color='dark'
															/>
															<Input
																id='example'
																onBlur={function noRefCheck() {}}
																onChange={function noRefCheck() {}}
																onFocus={function noRefCheck() {}}
																onInput={function noRefCheck() {}}
																onInvalid={function noRefCheck() {}}
																onSelect={function noRefCheck() {}}
																placeholder='Search'
																size='lg'
																className='ms-2'
															/>
														</div>
														<div className='g-list-check'>
															<ChecksGroup className='mb-3'>
																<Checks
																	id='example'
																	label='Computer Science'
																	name='example'
																	onChange={function noRefCheck() {}}
																	type='radio'
																	value='radio value'
																/>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Sofware Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																		className=''
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Mobile and Web Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Algoritms'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
															</ChecksGroup>
															<ChecksGroup>
																<Checks
																	id='example'
																	label='Computer Science'
																	name='example'
																	onChange={function noRefCheck() {}}
																	type='radio'
																	value='radio value'
																/>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Sofware Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																		className=''
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Mobile and Web Development'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
																<div className='ms-3'>
																	<Checks
																		id='example'
																		label='Algoritms'
																		name='example'
																		onChange={function noRefCheck() {}}
																		type='radio'
																		value='radio value'
																	/>
																</div>
															</ChecksGroup>
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
							) : (
								''
							)}
							{images ? (
								<Card>
									<CardBody>
										<div className='row align-items-center'>
											<div className='col-lg-12'>
												<FormGroup
													className='mb-4'
													id='formPrefix'
													label='Thumbnail'>
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
													Return
												</Button>
											</div>
											<div className='col-lg-3'>
												<Button
													color='dark'
													size='lg'
													className='w-100 mb-3 mb-lg-0'
													onClick={() => handleChange('courses')}>
													Save
												</Button>
											</div>
										</div>
									</CardBody>
								</Card>
							) : (
								''
							)}
							{courses ? (
								<Card>
									<CardBody>
										<div className='row align-items-center justify-content-center'>
											<div className='col-md-10 text-center pt-5 pb-5'>
												<h3 className='fw-bold display-5 mb-3'>
													Congratulations
												</h3>
												<p className='m-0 fs-3 mb-3'>
													Your Course has been created
												</p>
												<p className='mb-1'>
													You can now access, edit, and manage your Course
													from the main menu.
												</p>
												<p>What do you want to do next?</p>
												<div className='d-lg-flex items-center justify-content-center mt-5 gap-4'>
													<button className='btn btn-outline-dark btn-lg mb-3 mb-lg-0'>
														Return to Course Management
													</button>
													<button className='btn btn-outline-dark btn-lg mb-3 mb-lg-0'>
														Create Another Course
													</button>
													<button className='btn btn-outline-dark btn-lg mb-3 mb-lg-0'>
														Edit Course in CMS
													</button>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default AddCourse;
