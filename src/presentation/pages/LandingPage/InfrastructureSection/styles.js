import styled from 'styled-components';
import { Col, Row } from 'antd';
import { between } from 'polished';

export default styled(Col)`
    padding-left: ${between('16px', '120px')};
    padding-right: ${between('16px', '120px')};
    padding-top: ${({ xs, sm }) => (sm || xs) && `-5vh`};
    padding-bottom: ${({ xs, sm }) => (sm || xs) && `15vh`};
    min-height: 43vh;
    background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
    /* background-position: bottom right 136%; */
    background-position: ${({ xs, sm }) => (sm || xs ? 'top -45vh left 40%' : 'bottom right 136%')};
    background-repeat: no-repeat;
    border-bottom-left-radius: ${({ xs, sm }) => (sm || xs ? '100px' : `160px`)};
    border-top-right-radius: ${({ xs, sm }) => (sm || xs ? '100px' : `160px`)};
    background-color: hsl(237, 17%, 21%);

    .mobile-text {
        text-align: center;
    }
`;

export const Container = styled(Row)`
    height: 100%;
`;

export const LeftSide = styled(Col)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    top: 20px;
`;
export const RightSide = styled(Col)``;
export const ImageWrapper = styled(Row)``;
export const ImageWrapperMobile = styled(Row)`
    position: relative;
    top: -10vh;
    img {
        width: 100%;
        height: 100%;
    }
`;
