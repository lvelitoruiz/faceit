import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Popovers from '../../../components/bootstrap/Popovers';

const EditCertificate = () => {
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center align-items-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<Popovers
							title='EditCertificate.tsx'
							desc={<code>src/pages/presentation/custom/EditCertificate.tsx</code>}>
							EditCertificate
						</Popovers>
						<code className='ps-3'>EditCertificate.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default EditCertificate;