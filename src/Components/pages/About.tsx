import * as React from 'react';
import styled from 'styled-components';
import { Alignment } from '../../global.types';
import AnimatedPage from '../misc/AnimatedPage';
import BackButton from '../misc/BackButton';
import Title from '../misc/Title';

const About = styled.section`
    width: 100%;
    max-width: 400px;
    p {
        opacity: 0.6;
        font-size: 16px;
        span {
            font-size: 18px;
        }
    }
    ul {
        list-style-type: none;
        padding-left: 15px;
        li {
            opacity: 0.3;
        }
    }
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div``;

const Avatar = styled.div`
    max-width: 145px;
    min-width: 145px;
    height: 130px;
    margin-top: 10px;
    margin-right: 20px;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export default (() => {
    return (
        <AnimatedPage>
            <About>
                <BackButton />
                <Title alignment={Alignment.LEFT}>About Me</Title>
                <Row>
                    <Column>
                        <Avatar>
                            <img alt="Me" src={require(`../../images/me.jpg`)} />
                        </Avatar>
                    </Column>
                    <Column>
                        
                        <p>Name: Martin Mulholland</p>
                        <p>Age: 25</p>
                        <p>Occupation: Frontend Developer <br /> at Northumbria Healthcare NHS Foundation Trust</p>
                        <p><span>Notable Skills</span></p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS, Sass, CSS in JS</li>
                            <li>SVG</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>NodeJS</li>
                            <li>React</li>
                            <li>NextJS</li>
                            <li>Web Scraping</li>
                            <li>API Development</li>
                        </ul>
                    </Column>
                </Row>
                
            </About>
        </AnimatedPage>
    )
}) as AboutComponent;

interface props {}
type AboutComponent = React.FC<props>;