import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    a {

        font-size: 24px;
        text-transform: uppercase;
        color: inherit;
        font-family: inherit;
        font-weight: 400;
        display: inline-block;
        opacity: 0.6;
        cursor: pointer;
        transition: 300ms;
        &:hover {
            opacity: 1;
        }
    }
`;

export default (() => {
    return (
        <BackButton>
            <Link to="/">Back</Link>
        </BackButton>
    )
}) as BackButtonComponent;

interface props {}
type BackButtonComponent = React.FC<props>;