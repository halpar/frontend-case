import styled from 'styled-components';
import { Col } from 'antd';
import { between } from 'polished';

export default styled(Col)`
    padding-top: 10vh;
    padding-left: ${between('0px', '120px')};
    padding-right: ${between('0px', '120px')};
    min-height: 100vh;
    background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
    background-repeat: no-repeat;
    /* background-position: right; */
    background-position: center left 136%;
    /* background-size: auto; */
`;
