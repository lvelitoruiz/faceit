import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { forms, userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import UserImageWebp from '../../../assets/img/wanna/wanna1.webp';
import UserImage from '../../../assets/img/wanna/wanna1.png';
import Avatar from '../../../components/Avatar';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Icon from '../../../components/icon/Icon';
import { useNavigate } from 'react-router-dom';

const EditOrganization = () => {
	const navigate = useNavigate();

	const [ edit,setEdit ] = useState(true);

	useEffect( () => {
		setEdit(true)
	},[])

	const handleChange = ( status: string ) => {
		if(status === "active") {
			setEdit(true)
		} else {
			setEdit(false)
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
										<p className='fw-bold fs-5 mt-2'>Accelered</p>
									</div>
									<div className='row p-4'>
										<div className='col-12'>
											<Button
												color='dark'
												isOutline={!edit}
												className='w-100 p-3 mb-4'
												onClick={ () => handleChange('active')}
											>
												Edit Information
											</Button>
										</div>
										<div className='col-12'>
											<Button
												color='dark'
												isOutline={edit}
												className='w-100 p-3 mb-4'
												onClick={ () => handleChange('inactive')}
											>
												Management Admin
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
											<div>ORGANIZATION INFO</div>
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
												<div className='col-lg-12'>
													<FormGroup
														className='mb-4'
														id='formPrefix'
														label='Name'>
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
														label='Website'>
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
														label='Industry'>
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
														label='Company Size'>
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
							</div> :
							<div>
							<div className='row align-items-center mb-3 mb-lg-3'>
								<div className='col-lg-6'>
									<div className='py-3'>
										<div>ORGANIZATIONS</div>
										<div className='display-4 fw-bold'>Manage Admins</div>
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
							<div className='row'>
								<div className='col-md-12'>
								<Card>
							<CardBody className='table-responsive'>
								<table className='table table-modern'>
									<thead>
										<tr>
											<th>Name</th>
											<th>Email</th>
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

							}

							{/* Manage Admins */}
							

						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditOrganization;