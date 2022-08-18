import * as React from 'react';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { Route, Routes, useLocation } from "react-router-dom";



import styled from 'styled-components';
import About from '../Components/pages/About';
import Contact from '../Components/pages/Contact';
import Home from '../Components/pages/Home';
import Work from '../Components/pages/Work';
import AnimatedPage from '../Components/misc/AnimatedPage';


const AppContainer = styled.div`
    min-height: 100vh;
    background: url(${require('../images/background.jpeg')});
    background-size: cover;
    background-position: center;
    display: flex;
    padding: 20px;
    width: 100%;
    > .inner {
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export default (() => {
    const location = useLocation();



    return (
        <AppContainer>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Home key="home" />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </AppContainer>
    )
}) as AppContainerComponent;

interface props {}
type AppContainerComponent = React.FC<props>;


function Test() {
    return (
        <div>test</div>
    )
}