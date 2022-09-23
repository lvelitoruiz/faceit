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
	return (
		<PageWrapper isProtected={false} title={"Register"} className={classNames({ 'bg-light': true })}>
			<Page>
				<></>
			</Page>
		</PageWrapper>
	);
};

export default Register;
