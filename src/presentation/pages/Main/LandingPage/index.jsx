import React from 'react';
import { Row } from 'antd';
import { StyledLandingPage } from './styles';
import BannerSection from './BannerSection';
import OverviewSection from './OverviewSection';
import InfrastructureSection from './InfrastructureSection';
import FeaturesSection from './FeaturesSection';

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
            <Row style={{ paddingTop: '10vh' }}>
                <InfrastructureSection />
            </Row>
            <Row style={{ paddingTop: '10vh' }}>
                <FeaturesSection />
            </Row>
        </StyledLandingPage>
    );
};

export default LandingPage;
