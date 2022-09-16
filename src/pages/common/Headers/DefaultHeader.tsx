import React, { useContext } from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import UserImageWebp from '../../../assets/img/wanna/wanna1.webp';
import UserImage from '../../../assets/img/wanna/wanna1.png';
import Logo2 from '../../../assets/img/logo-2.jpeg';
import Avatar from '../../../components/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';
import { demoPages, forms } from '../../../menu';

const DefaultHeader = () => {
	const { width } = useDeviceScreen();
	const { userData, setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<Header>
			<HeaderLeft>
				<img src={Logo2} alt='Company' height={44} />
			</HeaderLeft>
			<HeaderRight>
				<div className='row'>
					<Dropdown setIsOpen={function noRefCheck() {}}>
						<DropdownToggle>
							<Button color='light' isLight className='d-flex align-items-center'>
								<Avatar
									srcSet={UserImageWebp}
									src={UserImage}
									className='rounded-circle'
									size={42}
									color='primary'
								/>
								<div className='d-flex align-items-start flex-column ms-3 me-3'>
									<span className='fw-bold fs-6 mb-0'>Michael Smith</span>
									<span className='text-muted'>Tenant Admin</span>
								</div>
							</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem
								onClick={() => {
									navigate(`../${forms.profile.path}`);
								}}>
								Edit Profile
							</DropdownItem>
							<DropdownItem>
								<Link to={'/profile'} state={{ editStatus: false }}>
									Forgot Password?
								</Link>
							</DropdownItem>
							<DropdownItem
								onClick={() => {
									if (setUser) {
										setUser('');
									}
									navigate(`../${demoPages.login.path}`);
								}}>
								Sign Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</HeaderRight>
		</Header>
	);
};

export default DefaultHeader;
