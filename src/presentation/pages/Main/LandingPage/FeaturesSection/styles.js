import styled from 'styled-components';
import { Col, Row } from 'antd';
import { between } from 'polished';

export default styled(Col)`
    padding-top: ${({ xs, sm }) => (sm || xs ? `0vh` : '28vh')};
    padding-bottom: 10vh;
    padding-left: ${between('16px', '120px')};
    padding-right: ${between('16px', '120px')};
    min-height: 100vh;
    background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
    background-position: center right 139%;
    background-repeat: no-repeat;

    .mobile-text {
        text-align: center;
    }
    .mobile-image {
        width: 100%;
        height: 100%;
    }
`;
