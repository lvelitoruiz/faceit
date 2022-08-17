import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { organizationMenu } from '../../../menu';
import Popovers from '../../../components/bootstrap/Popovers';

const Organization = () => {
	return (
		<PageWrapper title={organizationMenu.organization.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center align-items-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<Popovers
							title='Organization.tsx'
							desc={<code>src/pages/presentation/custom/Organization.tsx</code>}>
							Organization
						</Popovers>
						<code className='ps-3'>Organization.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Organization;
