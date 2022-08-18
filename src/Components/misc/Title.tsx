import * as React from 'react';
import styled from 'styled-components';
import { Alignment } from '../../global.types';

const Title = styled.h1<{alignment: Alignment}>`
    font-size: 32px;
    line-height: 31px;
    font-weight: 400;
    text-align: ${({alignment}) => alignment};
    &:after {
        display: block;
        content: '';
        height: 1px;
        width: 100%;
        background: #2e2e2e;
        margin-bottom: 15px;
        margin-top: 15px;
    }
`;

export default (({children, alignment}) => {
    return (
        <Title alignment={alignment}>
            {children}
        </Title>
    )
}) as TitleComponent;

interface props {
    children: string,
    alignment: Alignment
}
type TitleComponent = React.FC<props>;