import styled, { createGlobalStyle } from 'styled-components';
import { between } from 'polished';
import { Row, Col } from 'antd';
import Button from '../../Button';

import Layout from '../index';

const { Header } = Layout;

export default styled(Header)`
    z-index: 1000;
    background: transparent;
    padding-left: ${between('16px', '120px')};
    padding-right: ${between('16px', '120px')};
    position: absolute;
    height: ${({ theme }) => theme.layoutStyles.headerHeight};
    width: 100%;

    .dispose-element {
        display: none;
    }
`;
export const HeaderItemsWrapper = styled(Row)`
    height: 100%;
`;

export const NavItemStyles = styled(Col)``;

export const CustomBtn = styled(Button)`
    padding: 12px 40px;
    height: 100%;

    span {
        font-weight: 700;
    }
`;

export const GlobalStyleForTooltip = createGlobalStyle`
  body {
    .ant-tooltip-inner {
      background-color: transparent;
      padding:0px;
      margin-top:-5px;
      border-radius:15px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .ant-tooltip-arrow{
        display:none
    }
  }
`;

export const UserImageWrapper = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainLogoWrapper = styled(Col)``;
export const RightSide = styled(Col)``;
