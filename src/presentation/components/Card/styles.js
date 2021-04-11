import styled from 'styled-components';
import { Card } from 'antd';

const shadowColor = '#E2E4EE';
const shadow = `0 0px 20px ${shadowColor}`;

export const CardStyles = styled(Card)`
    border-radius: 15px !important;
    box-shadow: ${shadow};
    padding: '10px' !important;
    background-color: #ffffff;

    .ant-card-body {
        padding: 0px;
    }
`;
