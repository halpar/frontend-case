import React from 'react';
import { Row, Col } from 'antd';
import BannerSectionStyles, { CustomBtn } from './styles';
import { Text } from '../../../../components/Typography/styles';
import useMediaQuery from '../../../../../utils/Hooks/useMediaQuery';

const BannerSection = () => {
    const { xs, sm } = useMediaQuery();
    return (
        <BannerSectionStyles sm={sm} xs={xs} span={24}>
            <Row align="middle" justify="center">
                <Text style={{ textAlign: 'center' }} color="white" size={sm || xs ? 'mobile-big-title' : 'motto'} disableSelect>
                    A modern publishing platform
                </Text>
            </Row>
            <Row style={{ paddingTop: '20px' }} align="middle" justify="center">
                <Text style={{ textAlign: 'center' }} size={xs || sm ? '' : 'title'} color="white" disableSelect>
                    Grow your audience and build your online brand
                </Text>
            </Row>
            <Row style={{ paddingTop: '32px' }} gutter={([16], [16])}>
                <Col span={12}>
                    <CustomBtn className={(xs || sm) && 'mobile-banner-btn'}>Start for Free</CustomBtn>
                </Col>
                <Col span={12}>
                    <CustomBtn className={(xs || sm) && 'mobile-banner-btn'} type="bordered">
                        Learn More
                    </CustomBtn>
                </Col>
            </Row>
        </BannerSectionStyles>
    );
};

export default BannerSection;
