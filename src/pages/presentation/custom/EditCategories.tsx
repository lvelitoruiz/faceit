import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';

const EditCategories = () => {
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='container'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-12'>
							<div className='py-3'>
								<div>CATEGORIES</div>
								<div className='display-4 fw-bold'>Edit Category</div>
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
												label='Name'>
												<Input
													autoComplete='honorific-prefix'
													onChange={function noRefCheck() {}}
													value=''
													className='w-100'
												/>
											</FormGroup>
										</div>
									</div>
									<div className='row align-items-center'>
										<div className='col-lg-6 mb-2'>
											<p className='m-0'>Parent</p>
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
												Return
											</Button>
										</div>
										<div className='col-lg-3'>
											<Button
												color='dark'
												size='lg'
												className='w-100 mb-3 mb-lg-0'>
												Edit Category
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

export default EditCategories;
