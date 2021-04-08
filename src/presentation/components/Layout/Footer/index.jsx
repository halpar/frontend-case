import React from 'react';
import { useHistory } from 'react-router';
import { Col, Row } from 'antd';
import StyledFooter, { FooterNavItemStyles, FooterItemsWrapper, LogoContainer } from './styles';
import { Text } from '../../Typography/styles';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import BlogrIcon from '../../../../assets/layout/logo.svg';

const dummyData = [
    {
        id: 1,
        title: 'Product',
        datas: [
            {
                id: 1,
                name: 'Overview',
                path: '/overview',
            },
            {
                id: 2,
                name: 'Pricing',
                path: '/pricing',
            },
            {
                id: 3,
                name: 'Marketplace',
                path: '/marketplace',
            },
            {
                id: 4,
                name: 'Features',
                path: '/features',
            },
            {
                id: 5,
                name: 'Integrations',
                path: '/integrations',
            },
        ],
    },
    {
        id: 2,
        title: 'Company',
        datas: [
            {
                id: 6,
                name: 'About',
                path: '/about',
            },
            {
                id: 7,
                name: 'Team',
                path: '/team',
            },
            {
                id: 8,
                name: 'Blog',
                path: '/blog',
            },
            {
                id: 9,
                name: 'Careers',
                path: '/careers',
            },
        ],
    },
    {
        id: 3,
        title: 'Connect',
        datas: [
            {
                id: 10,
                name: 'Contact',
                path: '/contact',
            },
            {
                id: 11,
                name: 'Newsletter',
                path: '/newsletter',
            },
        ],
    },
];

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
    const { xs, sm, md, lg } = useResponsive();
    const onClickLogo = () => {
        history.push('/');
    };

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
                        {dummyData.map(({ id, title, datas }) => (
                            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
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
