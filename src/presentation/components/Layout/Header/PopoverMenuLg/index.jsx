/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Row } from 'antd';
import { Text } from '../../../Typography/styles';
import { PopoverMenuStyles, MenuButtonLg, MenuButton, LanguageMenuStyles } from './styles';
import { logout } from '../../../../../utils/Redux/auth/action';
import { setLanguage } from '../../../../../utils/Redux/language/action';

const languages = [
    {
        id: 1,
        name: 'tr',
    },
    {
        id: 2,
        name: 'en',
    },
];

const PopoverMenuLg = ({ userInfo, isLocalizationMenu }) => {
    const { t, i18n } = useTranslation('common');
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState();
    const { languageInfo } = useSelector((state) => state.languageStore);

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleLanguageChange = async (obj) => {
        if (obj.id !== isActive) {
            await dispatch(setLanguage(obj.name));
            setIsActive(obj.id);
            i18n.changeLanguage(obj.name);
        }
    };

    useEffect(() => {
        setIsActive(languages.filter((item) => item.name === languageInfo)[0].id);
    }, [languageInfo]);

    return !isLocalizationMenu ? (
        <PopoverMenuStyles span={24}>
            <Row align="middle" justify="center">
                <Text ellipsis color="red" size="description">
                    {t('welcomeMessage')} {userInfo.name}!
                </Text>
            </Row>
            <Row ellipsis align="middle" justify="center" style={{ borderBottom: '2px solid hsl(356, 100%, 66%)', paddingBottom: '10px' }}>
                <Text size="11px">{userInfo.email}</Text>
            </Row>
            <Row align="middle" justify="center">
                <MenuButtonLg onClick={() => handleLogout()} type="link">
                    <Text disableSelect>{t('logout')}</Text>
                </MenuButtonLg>
            </Row>
        </PopoverMenuStyles>
    ) : (
        <LanguageMenuStyles span={24}>
            {languages.map((item) => (
                <MenuButton
                    className={isActive === item.id && 'active-btn-element'}
                    onClick={() => handleLanguageChange(item)}
                    key={item.id}
                    type="link">
                    <Text disableSelect>{item.name.toUpperCase()}</Text>
                </MenuButton>
            ))}
        </LanguageMenuStyles>
    );
};

export default PopoverMenuLg;
