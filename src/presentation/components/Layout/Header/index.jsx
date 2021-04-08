import React, { useState, useEffect } from 'react';
import { Col, Row, Menu } from 'antd';
import { useHistory } from 'react-router';
import StyledHeader, { NavItemStyles, CustomBtn, HeaderItemsWrapper } from './styles';
import { Text } from '../../Typography/styles';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import BlogrIcon from '../../../../assets/layout/logo.svg';
import Button from '../../Button';
import HamburgerMenuIcon from '../../../../assets/layout/icon-hamburger.svg';

const userHeaderContent = [
    {
        id: 1,
        name: 'Profile',
        path: '/profile',
    },
    {
        id: 2,
        name: 'About US',
        path: '/about-us',
    },
    {
        id: 3,
        name: 'Home',
        path: '/',
    },
];

const guestHeaderContent = [
    {
        id: 1,
        name: 'About US',
        path: '/about-us',
    },
    {
        id: 2,
        name: 'Home',
        path: '/',
    },
];

const HeaderNavItems = (type) => (type === 'user' ? userHeaderContent : guestHeaderContent);

const Header = ({ userRole }) => {
    const history = useHistory();

    const onClickLogo = () => {
        history.push('/');
    };
    const { xs, sm, md, lg, xl } = useResponsive();

    return (
        <StyledHeader>
            <HeaderItemsWrapper align="middle" justify="start">
                <Col xs={4} sm={4} md={4} lg={3} xl={3} xxl={3} onClick={() => onClickLogo()}>
                    <img src={BlogrIcon} alt="bloggr-logo" />
                </Col>
                <Col className={(xs || sm) && 'dispose-element'} span={10}>
                    <Row align="middle" justify="start" gutter={[32, 0]}>
                        {HeaderNavItems(userRole).map(({ id, name, path }) => (
                            <NavItemStyles onClick={() => history.push(path)} key={id}>
                                <Button type="link">
                                    <Text color="white" weight="medium" family="secondary">
                                        {name}
                                    </Text>
                                </Button>
                            </NavItemStyles>
                        ))}
                    </Row>
                </Col>
                <Col xs={20} sm={20} md={10} lg={11} xl={11} xxl={11}>
                    {xs || sm ? (
                        <Row align="middle" justify="end">
                            <img src={HamburgerMenuIcon} alt="hamburger-menu" />
                        </Row>
                    ) : (
                        <Row align="middle" justify="end" gutter={[32, 0]}>
                            <Col>
                                <Button type="link">
                                    <Text color="white" weight="medium" family="secondary">
                                        Login
                                    </Text>
                                </Button>
                            </Col>
                            <Col>
                                <CustomBtn>Sign Up</CustomBtn>
                            </Col>
                        </Row>
                    )}
                </Col>
            </HeaderItemsWrapper>
        </StyledHeader>
    );
};

export default Header;
