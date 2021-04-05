import React from 'react';
import { Row, Col } from 'antd';
import OverviewSectionStyles from './styles';
import { Text } from '../../../../components/Typography/styles';
import EditorDesktopIMG from '../../../../../assets/landing/illustration-editor-desktop.svg';

const OverviewSection = () => {
    console.log('overview-section');
    return (
        <OverviewSectionStyles backgroundImage={EditorDesktopIMG} span={24}>
            <Row align="middle" justify="center">
                <Text size="big-title" color="dark-blue" weight="bold">
                    Designed for the future
                </Text>
            </Row>
            <Row style={{ paddingTop: '10vh' }}>
                <Col span={10}>
                    <Row>
                        <Text size="28px" color="dark-blue" weight="medium">
                            Introducing an extensible editor
                        </Text>
                    </Row>
                    <Row style={{ paddingTop: '2vh' }}>
                        <Text color="grayish-blue">
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor supports
                            management of multiple blogs and allow easy manipulation of embeds such as images, videos and Markdown.Extensibility with
                            plugins and themes provide easy ways to add functionality or change the looks of a blog.
                        </Text>
                    </Row>
                    <Row style={{ paddingTop: '5vh' }}>
                        <Text size="28px" color="dark-blue" weight="medium">
                            Robust content management
                        </Text>
                    </Row>
                    <Row style={{ paddingTop: '2vh' }}>
                        <Text color="grayish-blue">
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.The editor supports
                            management of multiple blogs and allow easy manipulation of embeds such as images, videos and Markdown.Extensibility with
                            plugins and themes provide easy ways to add functionality or change the looks of a blog.
                        </Text>
                    </Row>
                    <Text>Designed for the future</Text>
                </Col>
            </Row>
        </OverviewSectionStyles>
    );
};

export default OverviewSection;
