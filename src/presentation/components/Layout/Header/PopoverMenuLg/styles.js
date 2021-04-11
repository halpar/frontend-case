import styled from 'styled-components';
import { Col } from 'antd';
import Button from '../../../Button';

export const PopoverMenuStyles = styled(Col)`
    min-height: 46px;
    min-width: 200px;
    border-radius: 15px;
    background: #ffffff;
    padding: 10px 0px 15px 0px !important;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
export const LanguageMenuStyles = styled(Col)`
    min-height: 46px;
    min-width: 50px;
    border-radius: 10px;
    background: #ffffff;
    padding: 10px 0px 10px 0px !important;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    .active-btn-element {
        background-color: #f3f3f3 !important;
        cursor: pointer;
        border-radius: 0px !important;
    }
`;

export const MenuButtonLg = styled(Button)`
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: #f3f3f3 !important;
        cursor: pointer;
        border-radius: 0px !important;
    }
`;
export const MenuButton = styled(Button)`
    width: 100%;
    min-height: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 0px !important;
    padding-right: 0px !important;
    border-radius: 0px !important;

    :hover {
        background-color: #f3f3f3 !important;
        cursor: pointer;
        border-radius: 0px !important;
    }
`;
