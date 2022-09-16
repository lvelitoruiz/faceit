import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
	const navigate = useNavigate();
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='p-lg-5'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-6'>
							<div className='display-4 fw-bold py-3'>Categories</div>
						</div>
						<div className='col-lg-6'>
							<div className='row align-items-center justify-content-end'>
								<div className='col-md-4 col-lg-4'>
									<Button
										color='dark'
										isOutline
										icon='InsertDriveFile'
										size='lg'
										className='w-100 mb-3 mb-lg-0'>
										Export CSV
									</Button>
								</div>
								<div className='col-md-4 col-lg-4'>
									<Button
										color='dark'
										icon='Category'
										size='lg'
										className='w-100'
										onClick={() => {
											navigate(`../add-categories`);
										}}>
										Add Category
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className='row align-items-center'>
						<div className='col-lg-12'>
							<Card className='px-4 py-3'>
								<div className='row align-items-center justify-content-between'>
									<div className='col-lg-12 mb-2 mb-lg-0'>
										<div className='d-flex align-items-center'>
											<Icon icon='Search' size='2x' color='dark' />
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
									</div>
								</div>
							</Card>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<Card>
								<CardBody className='table-responsive'>
									<table className='table table-modern'>
										<thead>
											<tr>
												<th>Name</th>
												<th>Parent</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<p className='m-0'>Computer Science</p>
												</td>
												<td>
													<p className='m-0'>None</p>
												</td>
												<td className='text-center'>
													<Button
														color='dark'
														isOutline
														icon='Edit'
														onClick={() => {
															navigate(`../edit-categories`);
														}}>
														Edit
													</Button>
												</td>
											</tr>
											<tr>
												<td>
													<p className='m-0'>Computer Science</p>
												</td>
												<td>
													<p className='m-0'>Computer Science</p>
												</td>
												<td className='text-center'>
													<Button
														color='dark'
														isOutline
														icon='Edit'
														onClick={() => {
															navigate(`../edit-categories`);
														}}>
														Edit
													</Button>
												</td>
											</tr>
										</tbody>
									</table>
									<div className='d-flex justify-content-between px-4 mt-4 align-items-center'>
										<p className='fw-bold m-0'>Showing 1-4 of 10 Categories</p>
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

export default Categories;
