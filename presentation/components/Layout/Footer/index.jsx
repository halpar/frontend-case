import React from 'react';
import { useHistory } from 'react-router';
import { Col, Row } from 'antd';
import StyledFooter, { FooterBottomWrapper, FooterTopWrapper, FooterBadgeWrapper, FooterNavItemStyles, IconWrapperCircle, Icon } from './styles';
import { Text } from '../../Typography/styles';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';

const dummyData = [
    {
        id: 1,
        title: 'ABOUT',
        datas: [
            {
                id: 1,
                name: 'Why Vidieats?',
                path: '/about',
            },
        ],
    },
    {
        id: 2,
        title: 'HOST',
        datas: [
            {
                id: 2,
                name: 'Explore',
            },
            {
                id: 3,
                name: 'Order',
            },
            {
                id: 4,
                name: 'My Meals',
            },
            {
                id: 5,
                name: 'In Box',
            },
            {
                id: 6,
                name: 'Build Your Kitchen',
            },
            {
                id: 7,
                name: 'Join an Online Experience',
            },
            {
                id: 8,
                name: 'Become Courrier',
            },
        ],
    },
    {
        id: 3,
        title: 'FOR YOUR INFORMATION',
        datas: [
            {
                id: 9,
                name: 'For Guest',
            },
            {
                id: 10,
                name: 'For Chefs',
            },
            {
                id: 11,
                name: 'Cancellation Policy',
            },
            {
                id: 12,
                name: 'Privacy and Cookie Policy',
                path: '/privacy',
            },
            {
                id: 13,
                name: 'Protection of Data',
                path: '/protection-of-data',
            },
            {
                id: 14,
                name: 'KVKK',
            },
            {
                id: 15,
                name: 'User Agreement',
                path: '/user-agreement',
            },
        ],
    },
    {
        id: 4,
        title: 'SUPPORT',
        datas: [
            {
                id: 16,
                name: 'Community Center',
            },
            {
                id: 17,
                name: 'Resource Center',
            },
            {
                id: 18,
                name: 'Press',
            },
        ],
    },
];

const FooterNavItem = ({ itemId, title, datas }) => {
    const history = useHistory();

    return (
        <FooterNavItemStyles span={6}>
            <Row>
                <Text color="white" weight="bold">
                    {title}
                </Text>
            </Row>
            {datas.map(({ id, name, path }) => (
                <Row key={id}>
                    <Text color="white" onClick={() => history.push(path)} style={{ cursor: 'pointer' }}>
                        {name}
                    </Text>
                </Row>
            ))}
        </FooterNavItemStyles>
    );
};

const Footer = () => {
    const { xs, sm, md, lg } = useResponsive();
    const history = useHistory();
    const onClickLogo = () => {
        history.push('/');
    };

    return (
        <StyledFooter>
            <Col className="height-full">
                <FooterTopWrapper>
                    <Col className={(xs || sm || md || lg) && 'dispose'} span={8}>
                        <FooterBadgeWrapper>{/* <Col span={24} className="spacebetween" /> */}</FooterBadgeWrapper>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}>
                        <Row gutter={[{ xs: 44, sm: 44, md: 44, lg: 44, xl: 44 }, 0]}>
                            {dummyData.map(({ id, title, datas }) => (
                                <FooterNavItem itemId={id} title={title} datas={datas} key={id} />
                            ))}
                        </Row>
                    </Col>
                </FooterTopWrapper>
                <FooterBottomWrapper align="middle" justify="space-between">
                    <Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={10}>
                        <Text color="white" weight="medium">
                            © 2021 VidiEats.com All rights reserved · Privacy · Terms · Sitemap
                        </Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={4} xxl={4} className={(xs || sm || md || lg) && 'margin-top'}>
                        <Row align="middle" justify="space-between">
                            <Text color="white" weight="medium">
                                {/* <Icon src={localizationIconEN} alt="" /> */}
                                English (US)
                            </Text>

                            <Text color="white" weight="medium">
                                {/* <Icon src={Try} alt="" /> */}
                                TRY
                            </Text>
                        </Row>
                    </Col>
                </FooterBottomWrapper>
            </Col>
        </StyledFooter>
    );
};

export default Footer;
