import React, { FC, useCallback, useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import Logo1 from '../../../assets/img/logo.jpeg';
import useDarkMode from '../../../hooks/useDarkMode';
import { useFormik } from 'formik';
import AuthContext from '../../../contexts/authContext';
import USERS, { getUserDataWithUsername, ROLE } from '../../../common/data/userDummyData';
import Spinner from '../../../components/bootstrap/Spinner';
import axios from "axios";
import jwt_decode from "jwt-decode";

const Register = () => {
    const singUpStatus = false;

    const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			loginUsername: "",
			loginHandler: "",
			loginConfirm: "",
			loginPassword: "",
		},
		validate: (values) => {
			const errors: { loginUsername?: string; loginPassword?: string; loginHandler?: string; loginConfirm?: string } = {};

			if (!values.loginUsername) {
				errors.loginUsername = 'Required';
			}

			if (!values.loginPassword) {
				errors.loginPassword = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: (values) => {
		},
	});
	return (
		<PageWrapper isProtected={false} title={"Register"} className={classNames({ 'bg-light': true })}>
			<Page>
                <div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-6 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center mt-5'>
									<Link
										to='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											'text-dark',
										)}>
										<img src={Logo1} alt='logo' height={120} />
									</Link>
								</div>
								<div className='text-center h1 fw-bold mt-3 mb-5'>Register</div>
								<form className='row g-4 align-items-center justify-content-center mb-4'>
									{singUpStatus ? (
										<>
										</>
									) : (
										<>
											<div className='col-lg-9'>
												<FormGroup
													id='firstName'
													isFloating
													label='Name'>
													<Input
														name='firstname'
                                                        value={formik.values.loginUsername}
                                                        onChange={formik.handleChange}
														className='mt-4'
													/>
												</FormGroup>
												<FormGroup
													id='lastName'
													isFloating
													label='Email'>
													<Input
														name='lastname'
                                                        value={formik.values.loginUsername}
                                                        onChange={formik.handleChange}
														className='mt-4'
													/>
												</FormGroup>
                                                <FormGroup
													id='userName'
													isFloating
													label='Email'>
													<Input
														name='userName'
                                                        value={formik.values.loginUsername}
                                                        onChange={formik.handleChange}
														className='mt-4'
													/>
												</FormGroup>
												<FormGroup
													id='loginUsername'
													isFloating
													label='Password'>
													<Input
														name='loginPassword'
                                                        value={formik.values.loginPassword}
                                                        onChange={formik.handleChange}
														className='mt-4'
													/>
												</FormGroup>
												<FormGroup
													id='loginUsername'
													isFloating
													label='Confirm password'>
													<Input
														name='loginPassword'
                                                        value={formik.values.loginUsername}
                                                        onChange={formik.handleChange}
														className='mt-4'
													/>
												</FormGroup>
											</div>
											<div className='col-lg-9 my-5'>
												<div>
													<Button
														color='dark'
														className='w-100 py-3 fw-bold'
														onClick={formik.handleSubmit}>
														Register
													</Button>
												</div>
											</div>
										</>
									)}
								</form>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Register;
