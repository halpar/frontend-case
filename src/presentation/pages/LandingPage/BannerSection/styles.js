import styled from 'styled-components';
import { Col } from 'antd';
import { between } from 'polished';
import Button from '../../../components/Button';
import BGImage from '../../../../assets/landing/bg-pattern-intro.svg';

export default styled(Col)`
    border-bottom-left-radius: ${({ xs, sm }) => (sm || xs ? '100px' : `230px`)};
    padding-left: ${between('16px', '120px')};
    padding-right: ${between('16px', '120px')};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BGImage}), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    background-position: 25% 55%;
    /* background-size: auto; */

    .mobile-banner-btn {
        width: 100% !important;
    }
`;
export const CustomBtn = styled(Button)`
    height: 100%;
    width: 100% !important;
    padding: 15px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
