import 'core-js/es/object';
import 'intersection-observer';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Containers/AppContainer';
import GlobalStyle from './global.style';



declare global {
    interface Window { iframeResize: () => void; }
}

window.iframeResize = (): void => {
    const height: number = document.querySelector('body')!.getBoundingClientRect().height;
    parent.postMessage("resize::"+height,"*");
}

window.onresize = (): void => {
    window.iframeResize()
}

window.onload = (): void => {
    window.iframeResize()
}

window.onclick = (): void => {
    window.iframeResize();
}



const ROOT: HTMLElement | null = document.getElementById('ROOT') as HTMLDivElement;





ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    ROOT
);