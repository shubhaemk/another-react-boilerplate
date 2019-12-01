import React from "react";
import ReactDOM from "react-dom";

import Dummy from './components/dummy/dummy';


const App = () => {
    console.log(process.cwd())
    return (<div>Hello <Dummy></Dummy>React,Webpack 4 & Babel 7!</div>);
};

ReactDOM.render(<App />, document.getElementById("root"));