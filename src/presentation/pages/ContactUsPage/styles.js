import styled from 'styled-components';
import { Col } from 'antd';
import { between } from 'polished';
import BGImage from '../../../assets/landing/bg-pattern-intro.svg';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default styled(Col)`
    border-bottom-left-radius: ${({ xs, sm }) => (sm || xs ? '100px' : `230px`)};
    padding-left: ${between('16px', '120px')};
    padding-right: ${between('16px', '120px')};
    height: 100vh;
    background-image: url(${BGImage}), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    background-position: 25% 55%;
    .react-tel-input {
        input {
            width: 100%;
        }
    }
`;

export const ContactUsCard = styled(Card)`
    border: 1px solid hsl(353, 100%, 62%);
    overflow-y: scroll;
    height: 80vh;
    overflow-y: scroll;
    .ant-card-body {
        padding: 15px;
    }
`;

export const StyledButton = styled(Button)`
    width: auto !important;
    height: auto !important;
    padding: 10px 50px;
`;
