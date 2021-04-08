import React from 'react';
import { Col, Row } from 'antd';
import FeaturesSectionStyles from './styles';
import LaptopIMG from '../../../../../assets/landing/illustration-laptop-desktop.svg';
import LaptopIMGMobile from '../../../../../assets/landing/illustration-laptop-mobile.svg';
import { Text } from '../../../../components/Typography/styles';
import useMediaQuery from '../../../../../utils/Hooks/useMediaQuery';

const FeaturesSection = () => {
    const { xs, sm } = useMediaQuery();
    return (
        <FeaturesSectionStyles sm={sm} xs={xs} backgroundImage={!sm && !xs && LaptopIMG} span={24}>
            {sm || xs ? (
                <Row align="middle" justify="center">
                    <Col span={24}>
                        <Row align="middle" justify="center">
                            <img className="mobile-image" src={LaptopIMGMobile} alt="" srcSet="" />
                        </Row>
                        <Row style={{ paddingTop: '4vh' }} align="middle" justify="center">
                            <Text className="mobile-text" size="mobile-big-title" color="dark-blue" weight="medium">
                                Free, open,simple
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '2vh' }} align="middle" justify="center">
                            <Text className="mobile-text" color="grayish-blue">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure doloremque culpa, dignissimos, asperiores
                                est, eos quae corporis accusantium exercitationem non totam officiis consequatur qui facere optio maxime possimus!
                                Quo! Nostrum ex eos, earum consectetur commodi rem veritatis aliquam dignissimos aperiam, itaque vero nobis nihil,
                                fugit libero dolorem voluptatum dolores fuga! Excepturi, aspernatur perspiciatis voluptas voluptate accusantium
                                assumenda! Molestiae, corporis.
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '4vh' }} align="middle" justify="center">
                            <Text className="mobile-text" size="28px" color="dark-blue" weight="medium">
                                Powerful tooling
                            </Text>
                        </Row>
                        <Row className="mobile-text" style={{ paddingTop: '2vh' }} align="middle" justify="center">
                            <Text color="grayish-blue">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure doloremque culpa, dignissimos, asperiores
                                est, eos quae corporis accusantium exercitationem non totam officiis consequatur qui facere optio maxime possimus!
                                Quo!
                            </Text>
                        </Row>
                    </Col>
                </Row>
            ) : (
                <Row align="middle" justify="end">
                    <Col span={12}>
                        <Row>
                            <Text size="28px" color="dark-blue" weight="medium">
                                Free, open,simple
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '1vh' }}>
                            <Text color="grayish-blue">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure doloremque culpa, dignissimos, asperiores
                                est, eos quae corporis accusantium exercitationem non totam officiis consequatur qui facere optio maxime possimus!
                                Quo! Nostrum ex eos, earum consectetur commodi rem veritatis aliquam dignissimos aperiam, itaque vero nobis nihil,
                                fugit libero dolorem voluptatum dolores fuga! Excepturi, aspernatur perspiciatis voluptas voluptate accusantium
                                assumenda! Molestiae, corporis.
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '10vh' }}>
                            <Text size="28px" color="dark-blue" weight="medium">
                                Powerful tooling
                            </Text>
                        </Row>
                        <Row style={{ paddingTop: '1vh' }}>
                            <Text color="grayish-blue">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure doloremque culpa, dignissimos, asperiores
                                est, eos quae corporis accusantium exercitationem non totam officiis consequatur qui facere optio maxime possimus!
                                Quo!
                            </Text>
                        </Row>
                    </Col>
                </Row>
            )}
        </FeaturesSectionStyles>
    );
};

export default FeaturesSection;
