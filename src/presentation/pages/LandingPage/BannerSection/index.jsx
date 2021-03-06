import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import BannerSectionStyles, { CustomBtn } from './styles';
import { Text } from '../../../components/Typography/styles';
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';

const BannerSection = () => {
    const { xs, sm } = useMediaQuery();
    const { t } = useTranslation('common');

    return (
        <BannerSectionStyles sm={sm} xs={xs} span={24}>
            <Row align="middle" justify="center">
                <Text style={{ textAlign: 'center' }} color="white" size={sm || xs ? 'mobile-big-title' : 'motto'} disableSelect>
                    {t('landingPage.bannerSection.motto')}
                </Text>
            </Row>
            <Row style={{ paddingTop: '20px' }} align="middle" justify="center">
                <Text style={{ textAlign: 'center' }} size={xs || sm ? '' : 'title'} color="white" disableSelect>
                    {t('landingPage.bannerSection.text')}
                </Text>
            </Row>
            <Row style={{ paddingTop: '32px' }} align="middle" justify="space-between" gutter={([16], [16])}>
                <Col span={12}>
                    <CustomBtn className={(xs || sm) && 'mobile-banner-btn'}> {t('landingPage.bannerSection.buttonLeft')}</CustomBtn>
                </Col>
                <Col span={12}>
                    <CustomBtn className={(xs || sm) && 'mobile-banner-btn'} type="bordered">
                        {t('landingPage.bannerSection.buttonRight')}
                    </CustomBtn>
                </Col>
            </Row>
        </BannerSectionStyles>
    );
};

export default BannerSection;
