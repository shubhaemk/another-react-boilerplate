import React from "react";
import ReactDOM from "react-dom";

import Dummy from './components/dummy/dummy';
import img from './assets/img.jpg';

const App = () => {
    return (
        <div>
            Hello 
            <img src={img}></img>
            <Dummy></Dummy>
            React,Webpack 4 & Babel 7!
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));