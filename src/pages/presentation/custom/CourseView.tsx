import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import { userMenu } from '../../../menu';
import Popovers from '../../../components/bootstrap/Popovers';

const CourseView = () => {
	return (
		<PageWrapper title={userMenu.user.subMenu.organizationAdmin.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div
						className='col-12 d-flex justify-content-center align-items-center'
						style={{ fontSize: 'calc(3rem + 3vw)' }}>
						<Popovers
							title='CourseView.tsx'
							desc={<code>src/pages/presentation/custom/CourseView.tsx</code>}>
							LearningPathView
						</Popovers>
						<code className='ps-3'>CourseView.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CourseView;