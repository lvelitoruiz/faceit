import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { organizationMenu } from '../../../menu';
import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';

const Organization = () => {
	return (
		<PageWrapper title={organizationMenu.organization.text}>
			<Page className='p-lg-5'>
				<div className='mb-lg-5'>
					<div className='row align-items-center mb-3 mb-lg-5'>
						<div className='col-lg-6'>
							<div className='display-4 fw-bold py-3'>Organizations</div>
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
										icon="AddBusiness"
										size='lg'
										className='w-100'
									>
										Add Organization
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
											<DropdownMenu>
												<DropdownItem>
													Option1
												</DropdownItem>
												<DropdownItem>
													Option2
												</DropdownItem>
												<DropdownItem>
													Option3
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>	
								</div>
							</Card>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<Card className='p-3'>
								<CardBody className='table-responsive'>
									<table className='table table-modern'>
										<thead>
											<tr>
												<th>Name</th>
												<th>Website</th>
												<th>Category</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<p className='m-0'>Accelered</p>
												</td>
												<td>
													<p className='m-0'>www.accelered.com</p>
												</td>
												<td>
													<p className='m-0'>Education</p>
												</td>
												<td className='text-center'>
													<Button
														color="dark"
														isOutline
														icon="Edit"
													>
														Edit
													</Button>
												</td>
											</tr>
											<tr>
												<td>
													<p className='m-0'>Accelered</p>
												</td>
												<td>
													<p className='m-0'>www.accelered.com</p>
												</td>
												<td>
													<p className='m-0'>Education</p>
												</td>
												<td className='text-center'>
													<Button
														color="dark"
														isOutline
														icon="Edit"
													>
														Edit
													</Button>
												</td>
											</tr>
										</tbody>
									</table>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Organization;
