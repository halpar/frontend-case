import React from 'react';
import { Row } from 'antd';
import { StyledLandingPage } from './styles';
import BannerSection from './BannerSection';
import OverviewSection from './OverviewSection';

const LandingPage = () => {
    console.log('landingpage');
    return (
        <StyledLandingPage span={24}>
            <Row>
                <BannerSection />
            </Row>
            <Row>
                <OverviewSection />
            </Row>
        </StyledLandingPage>
    );
};

export default LandingPage;
