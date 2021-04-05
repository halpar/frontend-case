import styled from 'styled-components';
import { between } from 'polished';
import { Col, Row } from 'antd';
import Layout from '../index';

const { Footer } = Layout;

export default styled(Footer)`
    min-height: ${({ theme }) => theme.layoutStyles.footerHeight};
    width: 100%;
    padding: 0px;

    .height-full {
        height: 100% !important;
    }

    .dispose {
        display: none;
    }
`;

// TODO ({ theme }) => theme.layoutStyles.paddingHorizontal)

export const FooterTopWrapper = styled(Row)`
    padding: 0px ${between('0px', '120px')};
    padding-top: 60px;
    padding-bottom: 50px;
    background: ${({ theme }) => theme.layoutStyles.footerColor};
    min-height: 338px;

    .footer-logo {
        cursor: pointer;
        user-select: none;
        width: 241px;
        height: 62px;
    }
    .appstore-logo {
        cursor: pointer;
        user-select: none;
        width: 117px;
        height: 37px;
    }
    .googleplay-logo {
        cursor: pointer;
        user-select: none;
        width: 117px;
        height: 37px;
    }
`;

// TODO ({ theme }) => theme.layoutStyles.paddingHorizontal)

export const FooterBottomWrapper = styled(Row)`
    padding: 20px ${between('0px', '120px')};
    background: ${({ theme }) => theme.layoutStyles.footerColorDark};
    min-height: 73px;

    .margin-top {
        margin-top: 16px;
    }
`;

export const FooterBadgeWrapper = styled.div`
    width: 251px;
    height: 230px;

    .spacebetween {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`;

export const IconWrapperCircle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 13px;
    border-radius: 90%;
    width: 46px;
    height: 46px;
    background: #2f6049;
    .icon-group {
        font-size: 24px;
        color: #ffffff;
    }
`;

export const FooterNavItemStyles = styled(Col)`
    min-height: 210px;
    border-left: 1px solid #2f5543;
    padding-left: 13.5px !important;
`;

export const Icon = styled.img`
    padding-right: 8px;
`;
