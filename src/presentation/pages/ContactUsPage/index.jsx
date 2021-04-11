/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Row, Col, Input, Select, notification } from 'antd';
import PhoneInput from 'react-phone-input-2';
import tr from 'react-phone-input-2/lang/tr.json';
import { useTranslation } from 'react-i18next';
import ContactUsPageStyles, { ContactUsCard, StyledButton } from './styles';
import 'react-phone-input-2/lib/style.css';
import { Text } from '../../components/Typography/styles';
import useMediaQuery from '../../../utils/Hooks/useMediaQuery';

const Title = ({ text }) => (
    <Row align="middle" justify="center">
        <Text color="red" weight="bold" size="title">
            {text}
        </Text>
    </Row>
);

const ContactUsPage = () => {
    const userInfo = useSelector((state) => state.authStore.userInfo);
    const { t, i18n } = useTranslation('common');
    const { sm, xs } = useMediaQuery();
    const { Option } = Select;
    const [form] = Form.useForm();
    const [userInfoToRender, setUserInfoToRender] = useState();
    const [phoneInputLocalization, setPhoneInputLocalization] = useState();
    console.log(i18n.language, 'salanguage');

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
    };

    const onFinish = (values) => {
        const obj = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
            country: values.country,
        };
        try {
            console.log(obj, 'submitted-value');
            notification.success({
                message: t('formMessages.successfulFormSubmit'),
                autoClose: 3000,
            });
        } catch (err) {
            console.log(err, 'err');
            notification.error({
                message: t('formMessages.failedFormSubmit'),
                autoClose: 3000,
            });
        }
    };

    useEffect(() => {
        setUserInfoToRender(userInfo);
        if (userInfo) {
            form.setFieldsValue({ name: userInfo.name });
            form.setFieldsValue({ email: userInfo.email });
        } else {
            form.resetFields();
        }
        setPhoneInputLocalization(i18n.language);
    }, [userInfo, form, i18n.language]);

    return (
        <ContactUsPageStyles style={{ paddingTop: '120px', marginBottom: '20vh !important' }} span={24}>
            <Row style={{ width: '100%', height: '100%' }} align="start" justify="center">
                <Col span={24}>
                    <ContactUsCard title={<Title text="Contact Us" />}>
                        <Form
                            wrapperCol={sm || xs ? { span: 24 } : { span: 8, offset: 8 }}
                            labelCol={sm || xs ? { span: 24 } : { span: 8, offset: 8 }}
                            form={form}
                            onFinish={(values) => onFinish(values)}
                            validateMessages={validateMessages}
                            onFinishFailed={onFinishFailed}
                            name="login-form"
                            layout="vertical"
                            size="large">
                            <Form.Item label={t('formPlaceholders.name')} name="name" rules={[{ required: true }]}>
                                <Input size="large" placeholder={t('formPlaceholders.name')} />
                            </Form.Item>
                            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                                <Input size="large" placeholder={t('formPlaceholders.email')} />
                            </Form.Item>
                            <Form.Item label={t('formPlaceholders.phone')} name="phone" rules={[{ required: true }]}>
                                <PhoneInput
                                    localization={phoneInputLocalization === 'tr' && tr}
                                    onlyCountries={['gb', 'tr', 'fr', 'us', 'de', 'se', 'ke', 'br', 'zw']}
                                    country="tr"
                                />
                            </Form.Item>
                            <Form.Item name="country" label={t('formPlaceholders.country')} rules={[{ required: true }]}>
                                <Select placeholder={t('formPlaceholders.country')}>
                                    {t('countryList', { returnObjects: true }).map((item, i) => (
                                        <Option value={item.id} key={i}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item label={t('formPlaceholders.message')} name="message" rules={[{ required: true }]}>
                                <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} size="large" placeholder={t('formPlaceholders.message')} />
                            </Form.Item>
                            <Form.Item>
                                <Row align="middle" justify="center">
                                    <StyledButton type="secondary" htmlType="submit">
                                        Login
                                    </StyledButton>
                                </Row>
                            </Form.Item>
                        </Form>
                    </ContactUsCard>
                </Col>
            </Row>
        </ContactUsPageStyles>
    );
};

export default ContactUsPage;
