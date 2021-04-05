import React, { useState, useEffect } from 'react';
import { Col, Row, Menu } from 'antd';
import { useHistory } from 'react-router';
import StyledHeader, { NavItemStyles, CustomBtn } from './styles';
import { Text } from '../../Typography/styles';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import BlogrIcon from '../../../../assets/layout/logo.svg';
import Button from '../../Button';

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
    const { xs, sm, md, lg } = useResponsive();

    return (
        <StyledHeader>
            <Row align="middle" justify="start">
                <Col span={3} onClick={() => onClickLogo()}>
                    <img src={BlogrIcon} alt="bloggr-logo" />
                </Col>
                <Col span={16}>
                    <Row align="end" justify="start" gutter={([0], [32])}>
                        <Col className={(xs || sm || md) && 'dispose'} span={24}>
                            <Row align="start" justify="start" gutter={[30, 0]}>
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
                    </Row>
                </Col>
                <Col span={4}>
                    <Row align="middle" justify="space-between">
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
                </Col>
            </Row>
        </StyledHeader>
    );
};

export default Header;
