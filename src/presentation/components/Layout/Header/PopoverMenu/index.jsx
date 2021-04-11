import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Row } from 'antd';
import { Text } from '../../../Typography/styles';
import { PopoverMenuStyles, MenuButton } from './styles';
import { logout } from '../../../../../utils/Redux/auth/action';

const PopoverMenu = ({ setIsLoginModalVisible, userInfo }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { t } = useTranslation('common');

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <PopoverMenuStyles span={24}>
            {userInfo ? (
                <>
                    <Row align="middle" justify="center">
                        <Text ellipsis color="red" size="description">
                            Hello {userInfo.name}!
                        </Text>
                    </Row>
                    <Row ellipsis align="middle" justify="center" style={{ borderBottom: '2px solid hsl(356, 100%, 66%)', paddingBottom: '10px' }}>
                        <Text size="11px">{userInfo.email}</Text>
                    </Row>
                    {t('userHeaderContent', { returnObjects: true }).map((i) => (
                        <MenuButton
                            key={i.id}
                            type="link"
                            onClick={() => {
                                history.push(i.path);
                            }}>
                            <Text disableSelect>{i.name}</Text>
                        </MenuButton>
                    ))}
                    <MenuButton type="link">
                        <Text disableSelect onClick={() => handleLogout()}>
                            Logout
                        </Text>
                    </MenuButton>
                </>
            ) : (
                <>
                    {t('guestHeaderContent', { returnObjects: true }).map((j) => (
                        <MenuButton
                            key={j.id}
                            type="link"
                            onClick={() => {
                                history.push(j.path);
                            }}>
                            <Text disableSelect>{j.name}</Text>
                        </MenuButton>
                    ))}
                    <MenuButton type="link" onClick={() => setIsLoginModalVisible(true)}>
                        <Text disableSelect>Login</Text>
                    </MenuButton>
                </>
            )}
        </PopoverMenuStyles>
    );
};

export default PopoverMenu;
