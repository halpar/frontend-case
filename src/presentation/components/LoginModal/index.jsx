/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Col, Form, Input, Row, notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LoginModalStyles, { StyledButton } from './styles';
import { Text } from '../Typography/styles';
import { setUserInfo } from '../../../utils/Redux/auth/action';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
};

const Title = ({ text }) => (
    <Text color="red" weight="bold" size="title">
        {text}
    </Text>
);

const LoginModal = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { setIsLoginModalVisible } = props;
    const { t } = useTranslation('common');

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values) => {
        const obj = {
            name: `${values.user.name}`,
            email: `${values.user.email}`,
            password: `${values.user.password}`,
        };
        try {
            dispatch(setUserInfo(obj));
            form.resetFields();
            notification.success({
                message: t('successfulLoginMsg'),
                autoClose: 3000,
            });
            setIsLoginModalVisible(false);
        } catch (err) {
            console.log(err, 'err');
            notification.error({
                message: t('failedLoginMsg'),
                autoClose: 3000,
            });
        }
    };

    return (
        <LoginModalStyles title={<Title text="Login" />} {...props}>
            <Col span={24}>
                <Form
                    form={form}
                    onFinish={(values) => onFinish(values)}
                    validateMessages={validateMessages}
                    onFinishFailed={onFinishFailed}
                    name="login-form"
                    layout="vertical"
                    size="large">
                    <Form.Item label={t('formPlaceholders.name')} name={['user', 'name']} rules={[{ required: true }]}>
                        <Input size="large" placeholder={t('formPlaceholders.name')} />
                    </Form.Item>
                    <Form.Item label={t('formPlaceholders.email')} name={['user', 'email']} rules={[{ required: true, type: 'email' }]}>
                        <Input size="large" placeholder={t('formPlaceholders.email')} />
                    </Form.Item>
                    <Form.Item label={t('formPlaceholders.password')} name={['user', 'password']} rules={[{ required: true }]}>
                        <Input.Password
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            size="large"
                            placeholder={t('formPlaceholders.password')}
                        />
                    </Form.Item>
                    <Row align="middle" justify="center">
                        <Form.Item>
                            <StyledButton type="secondary" htmlType="submit">
                                {t('login')}
                            </StyledButton>
                        </Form.Item>
                    </Row>
                </Form>
            </Col>
        </LoginModalStyles>
    );
};

export default LoginModal;
