import * as React from 'react';
import styled from 'styled-components';
import AnimatedPage from '../misc/AnimatedPage';
import Title from '../misc/Title';
import Nav from '../Nav';

import { Alignment } from '../../global.types';


const Home = styled.main`
    width: 100%;
    max-width: 310px;
`;

export default (({}) => {
    return (
        <AnimatedPage>
            <Home>
                <Title alignment={Alignment.CENTER}>Martin Mulholland</Title>
                <Nav />
            </Home>
        </AnimatedPage>
    )
}) as HomeComponent;

interface props {}
type HomeComponent = React.FC<props>;