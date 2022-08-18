import * as React from 'react';
import styled from 'styled-components';
import { Alignment } from '../../global.types';
import AnimatedPage from '../misc/AnimatedPage';
import BackButton from '../misc/BackButton';
import Title from '../misc/Title';

const Work = styled.section`
    width: 100%;
    max-width: 500px;
`;


const Projects = styled.ul`
`;

const Project = styled.li`
    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
    h3 {
        font-size: 24px;
    }
    p {
        font-size: 14px;
        opacity: 0.6;
        span {
            color: ghostwhite;
            font-size: 16px;
        }
    }
    a {
        border: solid 1px;
        padding: 5px 15px;
        display: inline-block;
        margin-top: 5px;
        opacity: 0.6;
        transition: 300ms;
        &:hover {
            opacity: 1;
        }
    }
`;

export default (() => {
    return (
       <AnimatedPage>
            <Work>
                <BackButton />
                <Title alignment={Alignment.LEFT}>My Work</Title>
                <Projects>
                    <Project>
                        <h3>Shop On The Type</h3>
                        <img src={require('../../images/shopontyne.png')} alt="" />
                        <p>While furloughed in 2020 I was asked to take part in this full-stack project as sole developer. I worked closely with furloughed members of other departments to produce this website featuring local restaurants, cafes, etc. We contacted each business for details and also created a form for businesses to submit their details.</p>
                        <p><span>Tech Stack:</span> Node, NextJS, Firebase firestore, Heroku, Strapi CMS, AWS S3, Leaflet Maps</p>
                        <a href="https://www.shoponthetyne.co.uk/" target="_blank">Live Project</a>
                    </Project>
                </Projects>
            </Work>
       </AnimatedPage>
    )
}) as WorkComponent;

interface props {}
type WorkComponent = React.FC<props>;