import React from 'react';
import { useHistory } from 'react-router';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import StyledFooter, { FooterNavItemStyles, FooterItemsWrapper, LogoContainer } from './styles';
import { Text } from '../../Typography/styles';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import BlogrIcon from '../../../../assets/layout/logo.svg';

const FooterNavItem = ({ title, datas }) => {
    const history = useHistory();
    const { xs, sm } = useResponsive();

    return (
        <FooterNavItemStyles>
            <Col span={24}>
                <Row align={(xs || sm) && 'middle'} justify={(xs || sm) && 'center'} style={{ paddingBottom: '2vh' }}>
                    <Text disableSelect color="white" weight="bold">
                        {title}
                    </Text>
                </Row>
                {datas.map(({ id, name, path }) => (
                    <Row align={(xs || sm) && 'middle'} justify={(xs || sm) && 'center'} style={{ marginBottom: '10px' }} key={id}>
                        <Text
                            disableSelect
                            size="description"
                            color="light-grayish-blue"
                            onClick={() => history.push(path)}
                            style={{ cursor: 'pointer' }}>
                            {name}
                        </Text>
                    </Row>
                ))}
            </Col>
        </FooterNavItemStyles>
    );
};

const Footer = () => {
    const history = useHistory();
    const { xs, sm } = useResponsive();
    const onClickLogo = () => {
        history.push('/');
    };
    const { t } = useTranslation('common');

    return (
        <StyledFooter>
            <FooterItemsWrapper sm={sm} xs={xs} gutter={[0, 64]}>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
                    <LogoContainer align={(xs || sm) && 'middle'} justify={(xs || sm) && 'center'} onClick={() => onClickLogo()}>
                        <img src={BlogrIcon} alt="blog-icon" />
                    </LogoContainer>
                </Col>
                <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
                    <Row gutter={([20], [0])}>
                        {t('footerData', { returnObjects: true }).map(({ id, title, datas }) => (
                            <Col key={id} xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                <FooterNavItem title={title} datas={datas} key={id} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </FooterItemsWrapper>
        </StyledFooter>
    );
};

export default Footer;
