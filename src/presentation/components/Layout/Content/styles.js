/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import { Layout } from 'antd';
import { between } from 'polished';

const { Content } = Layout;

// TODO: Refactor LayoutContent

function getPageBackgroundColor({ theme, pageType }) {
    switch (pageType) {
        case 'admin':
        case 'shared':
            return theme.primaryFaded;

        case 'chefs':
            return theme.secondaryFaded;
        case 'customer':
            return theme.secondaryFaded;
        default:
            return theme.primaryFaded;
    }
}

function getTopContentPadding() {
    if (window.location.pathname === '/' || window.location.pathname.includes('login') || window.location.pathname.includes('signup')) return '0px';
    return ({ theme }) => theme.layoutStyles.paddingTop;
}

export default styled(Content)`
    /* margin-top: ${({ theme }) => theme.layoutStyles.headerHeight} !important; */
    min-height: ${({ theme }) => theme.layoutStyles.contentHeight};
    padding-left: ${() =>
        window.location.pathname === '/' ||
        window.location.pathname.includes('login') ||
        window.location.pathname.includes('signup') ||
        window.location.pathname.includes('mealdetail')
            ? 0
            : between('0px', '120px')};
    padding-right: ${() =>
        window.location.pathname === '/' ||
        window.location.pathname.includes('login') ||
        window.location.pathname.includes('signup') ||
        window.location.pathname.includes('mealdetail')
            ? 0
            : between('0px', '120px')};

    padding-top: ${() =>
        window.location.pathname.includes('mealdetail') || window.location.pathname.includes('near-places') ? 0 : getTopContentPadding};

    padding-bottom: ${() =>
        window.location.pathname === '/' ||
        window.location.pathname.includes('login') ||
        window.location.pathname.includes('signup') ||
        window.location.pathname.includes('mealdetail')
            ? 0
            : '50px'};

    background: ${getPageBackgroundColor};

    &::-webkit-scrollbar {
        overflow: scroll;
    }
`;
