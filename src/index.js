import React from "react";
import ReactDOM from "react-dom";


import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

import './index.css';
import './main.scss';

const App = () => {
    return (
        <div>
            Hello 
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
            React,Webpack 4 & Babel 7!
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));