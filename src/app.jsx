import React from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

import './index.css';
import './main.scss';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            var : '2'
        }
    }

    componentDidMount = () => {
        this.setState({
            var: '3'
        },
        console.log(this.state.var))
    }

    render(){
        return (
            <div>
                Hello
            <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                React,Webpack 4 & Babel 7!
            {[1, 2, 3, 5].map((x) => {
                    return x + 1
                })}
            </div>
        );
    }
}

export default App;