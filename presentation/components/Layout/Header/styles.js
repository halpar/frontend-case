import styled, { createGlobalStyle } from 'styled-components';
import { between } from 'polished';
import { Row, Col } from 'antd';
import Button from '../../Button';

import Layout from '../index';

const { Header } = Layout;

// TODO ({ theme }) => theme.layoutStyles.paddingHorizontal)

export default styled(Header)`
    z-index: 1000;
    overflow: hidden;
    padding-top: 50px !important;
    background: transparent;
    padding: ${({ theme }) => theme.layoutStyles.headerPaddingVertical} ${between('0px', '120px')};
    position: absolute;
    width: 100%;
    height: ${({ theme }) => theme.layoutStyles.headerHeight};
`;

export const NavItemStyles = styled(Col)``;

export const CustomBtn = styled(Button)`
    padding: 12px 40px;
    height: 100%;

    span {
        font-weight: 700;
    }
`;

// export const GlobalStyleForTooltip = createGlobalStyle`
//   body {
//     .ant-tooltip-inner {
//       background-color: transparent;
//       padding:0px;
//       margin-top:-5px;
//       border-radius:15px;
//       box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
//     }
//     .ant-tooltip-arrow{
//         display:none
//     }
//   }
// `;
