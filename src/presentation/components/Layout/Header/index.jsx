import React, { useState, useEffect } from 'react';
import { Col, Row, Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { UserOutlined } from '@ant-design/icons';
import StyledHeader, {
    NavItemStyles,
    CustomBtn,
    HeaderItemsWrapper,
    GlobalStyleForTooltip,
    UserImageWrapper,
    MainLogoWrapper,
    RightSide,
} from './styles';
import { Text } from '../../Typography/styles';
import useResponsive from '../../../../utils/Hooks/useMediaQuery';
import BlogrIcon from '../../../../assets/layout/logo.svg';
import Button from '../../Button';
import HamburgerMenuIcon from '../../../../assets/layout/icon-hamburger.svg';
import PopoverMenu from './PopoverMenu';
import PopoverMenuLg from './PopoverMenuLg';
import LoginModal from '../../LoginModal';
import { setLanguage } from '../../../../utils/Redux/language/action';

const Header = ({ userInfo }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { xs, sm } = useResponsive();
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const { t, i18n } = useTranslation('common');

    const onClickLogo = () => {
        history.push('/');
    };

    const handleCancel = () => {
        setIsLoginModalVisible(false);
    };

    useEffect(() => {
        dispatch(setLanguage(i18n.language));
    }, [dispatch, i18n.language]);

    const { languageInfo } = useSelector((state) => state.languageStore);

    const HeaderNavItems = (payload) =>
        payload ? t('userHeaderContent', { returnObjects: true }) : t('guestHeaderContent', { returnObjects: true });

    return (
        <StyledHeader>
            <HeaderItemsWrapper align="middle" justify="start">
                <MainLogoWrapper xs={8} sm={8} md={4} lg={4} xl={4} xxl={4} onClick={() => onClickLogo()}>
                    <img src={BlogrIcon} alt="bloggr-logo" />
                </MainLogoWrapper>
                <RightSide xs={16} sm={16} md={20} lg={20} xl={20} xxl={20}>
                    <Row align="middle" justify="space-between">
                        <Col className={(xs || sm) && 'dispose-element'} span={17}>
                            <Row align="middle" justify="start" gutter={[32, 0]}>
                                {HeaderNavItems(userInfo).map(({ id, name, path }) => (
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
                        <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                            {xs || sm ? (
                                <Row align="middle" justify="end">
                                    <GlobalStyleForTooltip />
                                    <Tooltip
                                        title={<PopoverMenu xs={xs} sm={sm} userInfo={userInfo} setIsLoginModalVisible={setIsLoginModalVisible} />}
                                        trigger={['click', 'hover']}>
                                        <Button type="link">
                                            <img src={HamburgerMenuIcon} alt="hamburger-menu" />
                                        </Button>
                                    </Tooltip>
                                </Row>
                            ) : (
                                <Row align="middle" justify="end" gutter={[32, 32]}>
                                    <Col>
                                        <Row align="middle" justify="center">
                                            <GlobalStyleForTooltip />
                                            <Tooltip title={<PopoverMenuLg isLocalizationMenu />} trigger={['click', 'hover']}>
                                                <Text weight="bold" color="#ffffff" disableSelect style={{ cursor: 'pointer', lineHeight: '28px' }}>
                                                    {languageInfo.toUpperCase()}
                                                </Text>
                                            </Tooltip>
                                        </Row>
                                    </Col>
                                    {userInfo ? (
                                        <Col>
                                            <GlobalStyleForTooltip />
                                            <Tooltip title={<PopoverMenuLg userInfo={userInfo} />} trigger={['click', 'hover']}>
                                                <UserImageWrapper style={{ padding: '5px', border: '1px solid #ffffff', borderRadius: '90%' }}>
                                                    <UserOutlined style={{ color: '#ffffff', fontSize: '21px' }} />
                                                </UserImageWrapper>
                                            </Tooltip>
                                        </Col>
                                    ) : (
                                        <Col>
                                            <CustomBtn onClick={() => setIsLoginModalVisible(true)}>{t('login')}</CustomBtn>
                                        </Col>
                                    )}
                                </Row>
                            )}
                        </Col>
                    </Row>
                </RightSide>
            </HeaderItemsWrapper>
            <LoginModal visible={isLoginModalVisible} setIsLoginModalVisible={setIsLoginModalVisible} onCancel={handleCancel} />
        </StyledHeader>
    );
};

export default Header;
