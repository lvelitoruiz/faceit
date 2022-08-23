import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { forms, userMenu } from '../../../menu';
import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Dropdown, {
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import Pagination, { PaginationItem } from '../../../components/bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';

const OrganizationAdmin = () => {
	const navigate = useNavigate();
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='p-lg-5'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-6'>
							<div className='py-3'>
								<div>USERS</div>
								<div className='display-4 fw-bold'>Organization Admins</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='row align-items-center justify-content-end'>
								<div className='col-md-4 col-lg-4'>
									<Button
										color="dark"
										isOutline
										icon="InsertDriveFile"
										size='lg'
										className='w-100 mb-3 mb-lg-0'
									>
										Export CSV
									</Button>
								</div>
								<div className='col-md-4 col-lg-4'>
									<Button 
										color="dark"
										icon="PersonAdd"
										size='lg'
										className='w-100'
										onClick={() => {
											navigate(`../${forms.addAdmin.path}`);
										}}
									>
										Add Admin
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className='row align-items-center'>
						<div className='col-lg-12'>
							<Card className='px-4 py-3'>
								<div className='row align-items-center justify-content-between'>
									<div className='col-lg-11 mb-2 mb-lg-0'>
										<div className='d-flex align-items-center'>
											<Icon
												icon='Search'
												size='2x'
												color='dark'
												/>
											<Input
												id="example"
												onBlur={function noRefCheck(){}}
												onChange={function noRefCheck(){}}
												onFocus={function noRefCheck(){}}
												onInput={function noRefCheck(){}}
												onInvalid={function noRefCheck(){}}
												onSelect={function noRefCheck(){}}
												placeholder="Search"
												size="lg" 
												className='ms-2'
											/>
										</div>
									</div>
									<div className='col-auto'>
										<Dropdown setIsOpen={function noRefCheck(){}}>
											<DropdownToggle>
												<Button
													color="light"
													isLight
													className='d-flex align-items-center'
													icon="FilterAlt"
												>
													Filter By
												</Button>
											</DropdownToggle>
											<DropdownMenu className='p-4'>
												<div className='mb-4'>
													<p className='fw-bold mb-2'>Organization</p>
													<ChecksGroup>
														<Checks
															id="example"
															label="All"
															name="example"
															onChange={function noRefCheck(){}}
															type="radio"
															value="radio value"
														/>
														<Checks
															id="example"
															label="Accelered"
															name="example"
															onChange={function noRefCheck(){}}
															type="radio"
															value="radio value"
														/>
														<Checks
															id="example"
															label="Microsoft"
															name="example"
															onChange={function noRefCheck(){}}
															type="radio"
															value="radio value"
														/>
													</ChecksGroup>
												</div>
												<div>
													<p className='fw-bold mb-2'>Status</p>
													<ChecksGroup>
														<Checks
															id="example"
															label="All"
															name="example"
															onChange={function noRefCheck(){}}
															type="radio"
															value="radio value"
														/>
														<Checks
															id="example"
															label="Active"
															name="example"
															onChange={function noRefCheck(){}}
															type="radio"
															value="radio value"
														/>
														<Checks
															id="example"
															label="Inactive"
															name="example"
															onChange={function noRefCheck(){}}
															type="radio"
															value="radio value"
														/>
													</ChecksGroup>
												</div>
											</DropdownMenu>
										</Dropdown>
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
												<th>Email</th>
												<th>Organization</th>
												<th>Status</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Icon
															icon='Person'
															size='2x'
															color='dark'
														/>
														<p className='m-0 px-2'>Jhon Doe</p>
													</div>
												</td>
												<td>
													<p className='m-0'>John@accelered.com</p>
												</td>
												<td>
													<p className='m-0'>Accelered</p>
												</td>
												<td>
													<p className='m-0'>Active</p>
												</td>
												<td className='text-center'>
													<Button
														color="dark"
														isOutline
														icon="Edit"
														onClick={() => {
															navigate(`../${forms.editAdmin.path}`);
														}}
													>
														Edit
													</Button>
												</td>
											</tr>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Icon
															icon='Person'
															size='2x'
															color='dark'
														/>
														<p className='m-0 px-2'>Jane Carpenter</p>
													</div>
												</td>
												<td>
													<p className='m-0'>John@accelered.com</p>
												</td>
												<td>
													<p className='m-0'>Accelered</p>
												</td>
												<td>
													<p className='m-0'>Active</p>
												</td>
												<td className='text-center'>
													<Button
														color="dark"
														isOutline
														icon="Edit"
														onClick={() => {
															navigate(`../${forms.editAdmin.path}`);
														}}
													>
														Edit
													</Button>
												</td>
											</tr>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Icon
															icon='Person'
															size='2x'
															color='dark'
														/>
														<p className='m-0 px-2'>Jhon Doe</p>
													</div>
												</td>
												<td>
													<p className='m-0'>John@accelered.com</p>
												</td>
												<td>
													<p className='m-0'>Accelered</p>
												</td>
												<td>
													<p className='m-0'>Active</p>
												</td>
												<td className='text-center'>
													<Button
														color="dark"
														isOutline
														icon="Edit"
														onClick={() => {
															navigate(`../${forms.editAdmin.path}`);
														}}
													>
														Edit
													</Button>
												</td>
											</tr>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Icon
															icon='Person'
															size='2x'
															color='dark'
														/>
														<p className='m-0 px-2'>Jane Carpenter</p>
													</div>
												</td>
												<td>
													<p className='m-0'>John@accelered.com</p>
												</td>
												<td>
													<p className='m-0'>Accelered</p>
												</td>
												<td>
													<p className='m-0'>Active</p>
												</td>
												<td className='text-center'>
													<Button
														color="dark"
														isOutline
														icon="Edit"
														onClick={() => {
															navigate(`../${forms.editAdmin.path}`);
														}}
													>
														Edit
													</Button>
												</td>
											</tr>
										</tbody>
									</table>
									<div className='d-flex justify-content-between px-4 mt-4 align-items-center'>
										<p className='fw-bold m-0'>Showing 1-4 of 10 Students</p>
										{/* <Pagination ariaLabel="pagination">
											<PaginationItem isActive>
												1
											</PaginationItem>
											<PaginationItem>
												2
											</PaginationItem>
										</Pagination> */}
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

export default OrganizationAdmin;
