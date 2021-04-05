import styled from 'styled-components';
import { Col } from 'antd';
import Button from '../../../../components/Button';
import BGImage from '../../../../../assets/landing/bg-pattern-intro.svg';

export default styled(Col)`
    border-bottom-left-radius: 230px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BGImage}), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    background-position: 25% 55%;
    /* background-size: auto; */
`;
export const CustomBtn = styled(Button)`
    height: 100%;
    padding: 15px 40px;
`;
