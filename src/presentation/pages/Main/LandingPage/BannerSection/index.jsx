import React from 'react';
import { Row, Col } from 'antd';
import BannerSectionStyles, { CustomBtn } from './styles';
import { Text } from '../../../../components/Typography/styles';

const BannerSection = () => {
    console.log('bannersection');
    return (
        <BannerSectionStyles span={24}>
            <Row>
                <Text color="white" size="motto" disableSelect>
                    A modern publishing platform
                </Text>
            </Row>
            <Row>
                <Text size="title" color="white" disableSelect>
                    Grow your audience and build your online brand
                </Text>
            </Row>
            <Row style={{ paddingTop: '32px' }} gutter={([0], [32])}>
                <Col>
                    <CustomBtn>Start for Free</CustomBtn>
                </Col>
                <Col>
                    <CustomBtn type="bordered">Learn More</CustomBtn>
                </Col>
            </Row>
        </BannerSectionStyles>
    );
};

export default BannerSection;
