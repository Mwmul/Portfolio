import * as React from 'react';
import styled from 'styled-components';
import { Alignment } from '../../global.types';
import AnimatedPage from '../misc/AnimatedPage';
import BackButton from '../misc/BackButton';
import Title from '../misc/Title';

const Contact = styled.section`
    width: 100%;
    max-width: 350px;
    p {
        font-size: 16px;
        opacity: 0.6;
    }
`;

export default (() => {
    return (
        <AnimatedPage>
            <Contact>
            <BackButton />
            <Title alignment={Alignment.LEFT}>Contact Me</Title>
            <p>Email: Mwmul14@gmail.com</p>
            <p>Phone: +44 07534862406</p>
        </Contact>
        </AnimatedPage>
    )
}) as ContactComponent;

interface props {}
type ContactComponent = React.FC<props>;