import styled from 'styled-components';
import { Modal } from 'antd';
import Button from '../Button';

export default styled(Modal)`
    min-height: 30vh;

    .ant-modal-header {
        padding-top: 0px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: hsl(356, 100%, 66%) !important;
    }

    .ant-modal-content {
        border-radius: 10px;
        padding: 25px;
        padding-bottom: 0px;
    }

    .ant-modal-footer {
        display: none;
    }

    .ant-modal-body {
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 35px;
        padding-bottom: 0px;
        overflow-y: scroll;
        min-height: 400px;
    }
    .ant-modal-close {
        display: none;
    }
`;

export const StyledButton = styled(Button)`
    width: auto !important;
    height: auto !important;
    padding: 10px 50px;
`;
