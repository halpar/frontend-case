/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default styled(Content)`
    background: #ffffff;
    min-height: 100vh;
    &::-webkit-scrollbar {
        overflow: hidden;
    }
`;
