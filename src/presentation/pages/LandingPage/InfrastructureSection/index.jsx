import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import InfrastructureSectionStyles, { LeftSide, RightSide, ImageWrapper, Container, ImageWrapperMobile } from './styles';
import { Text } from '../../../components/Typography/styles';
import BgCircleIMG from '../../../../assets/landing/bg-pattern-circles.svg';
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';
import MobilePhoneIMG from '../../../../assets/landing/illustration-phones.svg';

const InfrastructureSection = () => {
    const { xs, sm } = useMediaQuery();
    const { t } = useTranslation('common');

    return (
        <InfrastructureSectionStyles sm={sm} xs={xs} backgroundImage={BgCircleIMG} span={24}>
            {sm || xs ? (
                <Container align="middle" justify="center">
                    <Col span={24}>
                        <ImageWrapperMobile align="middle" justify="center">
                            <img src={MobilePhoneIMG} alt="" srcSet="" />
                        </ImageWrapperMobile>
                        <Row align="middle" justify="center">
                            <Text className="mobile-text" color="white" size="mobile-big-title" weight="medium">
                                {t('landingPage.infrastructureSection.title')}
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text className="mobile-text" color="white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veritatis excepturi debitis ipsum maxime, consequatur
                                itaque consequuntur porro rem illum at laudantium id saepe delectus cupiditate similique quibusdam quasi. Voluptatum.
                            </Text>
                        </Row>
                    </Col>
                </Container>
            ) : (
                <Container align="middle" justify="center">
                    <LeftSide span={12}>
                        <ImageWrapper>
                            <img src={MobilePhoneIMG} alt="" srcSet="" />
                        </ImageWrapper>
                    </LeftSide>
                    <RightSide span={12}>
                        <Row>
                            <Text color="white" size="big-title" weight="medium">
                                {t('landingPage.infrastructureSection.title')}
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text color="white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere veritatis excepturi debitis ipsum maxime, consequatur
                                itaque consequuntur porro rem illum at laudantium id saepe delectus cupiditate similique quibusdam quasi. Voluptatum.
                                Aut ipsum, ab earum veniam aperiam fugit sit perspiciatis ipsa atque! Voluptates nostrum vel repellat optio rerum
                                perspiciatis facere iste incidunt, fuga harum eum libero similique corrupti dolorem, odit nihil.
                            </Text>
                        </Row>
                    </RightSide>
                </Container>
            )}
        </InfrastructureSectionStyles>
    );
};

export default InfrastructureSection;
