/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import { Layout } from 'antd';
import { between } from 'polished';

const { Content } = Layout;

export default styled(Content)`
    min-height: ${({ theme }) => theme.layoutStyles.contentHeight};
    padding-top: 30px;
    padding-bottom: 50px;
    background-color: #ffffff;

    &::-webkit-scrollbar {
        overflow: scroll;
    }
`;
