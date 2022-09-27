import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Button from '../../../components/bootstrap/Button';
import { useFormik } from 'formik';
import axios from 'axios';

const AddOrganization = () => {

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: "",
			description: "",
			phone: "",
			website: "",
			company_size: "",
			industry: "",
			profile_url: ""
		},
		validate: (values) => {
			const errors: { name?: string; description?: string; phone?: string; website?: string; company_size?: string; industry?: string; profile_url?: string } = {};

			return errors;
		},
		validateOnChange: false,
		onSubmit: (values) => {
			createGroup();
		},
	});

	const createGroup = () => {
		let token = localStorage.getItem("access_token");
		axios
		.post('https://accelered-api.whiz.pe/api/groups', {
			name: formik.values.name,
			description: formik.values.description,
			phone: formik.values.phone,
			web_url: formik.values.website,
			company_size: formik.values.company_size,
			industry: formik.values.industry,
			profile_url: formik.values.profile_url
		},{
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then((response) => {
			console.log('**** this is the response ***',response);
			// setUserInfo(response.data);
			// setPost(jwt_decode(response.data.access_token));
		}).catch( function(error) {
			console.log(error)
			// console.log(error);
			// setNoUser(true);
			// setErrors(false);
		});
	}
	
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page className='container'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-6'>
							<div className='py-3'>
								<div>USERS</div>
								<div className='display-4 fw-bold'>Add Organization</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<Card>
								<CardBody>
									<div className='row'>
										<div className='col-lg-12'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Name'>
												<Input
													name='name'
													value={formik.values.name}
                                                    onChange={formik.handleChange}
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Description'>
												<Input
													name='description'
													value={formik.values.description}
                                                    onChange={formik.handleChange}
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Phone Number'>
												<Input
													name='phone'
													value={formik.values.phone}
                                                    onChange={formik.handleChange}
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
													name='website'
													value={formik.values.website}
                                                    onChange={formik.handleChange}
													className='w-100'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-6'>
											<FormGroup
												className='mb-4'
												id='formPrefix'
												label='Company Size'>
												<Input
													name='company_size'
													value={formik.values.company_size}
                                                    onChange={formik.handleChange}
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
												label='Industry'>
												<Input
													name='industry'
													value={formik.values.industry}
                                                    onChange={formik.handleChange}
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
												label='Profile Url'>
												<Input
													name='profile_url'
													value={formik.values.profile_url}
                                                    onChange={formik.handleChange}
													className='w-100'
												/>
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
												className='w-100 mb-3 mb-lg-0'
												onClick={formik.handleSubmit}>
												Create Organization
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

export default AddOrganization;
