/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { Row, Col } from 'antd';
import OverviewSectionStyles from './styles';
import { Text } from '../../../../components/Typography/styles';
import EditorDesktopIMG from '../../../../../assets/landing/illustration-editor-desktop.svg';
import EditorMobileIMG from '../../../../../assets/landing/illustration-editor-mobile.svg';
import useMediaQuery from '../../../../../utils/Hooks/useMediaQuery';

const OverviewSection = () => {
    const { xs, sm } = useMediaQuery();

    return (
        <OverviewSectionStyles backgroundImage={!xs && !sm && EditorDesktopIMG} span={24}>
            <Row align="middle" justify="center">
                <Text style={{ textAlign: 'center' }} size={xs || sm ? 'mobile-big-title' : 'big-title'} color="dark-blue" weight="medium">
                    Designed for the future
                </Text>
            </Row>
            {sm || xs ? (
                <Row style={{ paddingTop: '4vh' }}>
                    <Col span={24}>
                        <Row align="middle" justify="center">
                            <img className="mobile-image" src={EditorMobileIMG} alt="" srcSet="" />
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text className="mobile-text" size="mobile-big-title" color="dark-blue" weight="medium">
                                Introducing an extensible editor
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text className="mobile-text" color="grayish-blue">
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor
                                supports management of multiple blogs and allow easy manipulation of embeds such as images, videos and
                                Markdown.Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '5vh' }}>
                            <Text className="mobile-text" size="mobile-big-title" color="dark-blue" weight="medium">
                                Robust content management
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text className="mobile-text" color="grayish-blue">
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor
                                supports management of multiple blogs and allow easy manipulation of embeds such as images, videos and
                                Markdown.Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                            </Text>
                        </Row>
                    </Col>
                </Row>
            ) : (
                <Row style={{ paddingTop: '10vh' }}>
                    <Col span={10}>
                        <Row>
                            <Text size="28px" color="dark-blue" weight="medium">
                                Introducing an extensible editor
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text color="grayish-blue">
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor
                                supports management of multiple blogs and allow easy manipulation of embeds such as images, videos and
                                Markdown.Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '5vh' }}>
                            <Text size="28px" color="dark-blue" weight="medium">
                                Robust content management
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }}>
                            <Text color="grayish-blue">
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor
                                supports management of multiple blogs and allow easy manipulation of embeds such as images, videos and
                                Markdown.Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                            </Text>
                        </Row>
                    </Col>
                </Row>
            )}
        </OverviewSectionStyles>
    );
};

export default OverviewSection;
