import styled from 'styled-components';
import { Col } from 'antd';
import Button from '../../../Button';

export const PopoverMenuStyles = styled(Col)`
    min-height: 46px;
    min-width: 140px;
    border-radius: 15px;
    background: #ffffff;
    padding-bottom: 15px;
    padding-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const MenuButton = styled(Button)`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 24px !important;
    border-radius: 0px !important;

    :hover {
        background-color: #f3f3f3 !important;
        cursor: pointer;
        border-radius: 0px !important;
    }
`;
