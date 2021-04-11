import styled from 'styled-components';
import { Col } from 'antd';
import { between } from 'polished';

export default styled(Col)`
    padding-top: 10vh;
    padding-bottom: 10vh;
    padding-left: ${between('16px', '120px')};
    padding-right: ${between('16px', '120px')};
    min-height: 100vh;
    background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
    background-repeat: no-repeat;
    background-position: center left 136%;

    .mobile-text {
        text-align: center;
    }
    .mobile-image {
        width: 100%;
        height: 100%;
    }
`;
