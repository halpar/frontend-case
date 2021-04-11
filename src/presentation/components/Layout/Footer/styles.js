import styled from 'styled-components';
import { between } from 'polished';
import { Row } from 'antd';
import Layout from '../index';

const { Footer } = Layout;

export default styled(Footer)`
    padding: 0px;
    background-color: #ffffff;
`;

export const FooterItemsWrapper = styled(Row)`
    padding: 0px ${between('0px', '120px')};
    padding-top: 10vh;
    padding-bottom: 50px;
    min-height: 40vh;
    background: ${({ theme }) => theme.layoutStyles.footerColor};
    border-top-right-radius: ${({ xs, sm }) => (sm || xs ? '100px' : `160px`)};
`;

export const FooterNavItemStyles = styled(Row)`
    margin-bottom: 20px;
`;

export const LogoContainer = styled(Row)`
    cursor: pointer;
`;
