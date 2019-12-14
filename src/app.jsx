import React from 'react';

import './app.scss';
class App extends React.Component {
    render(){
        return (
            <div className="welcome">
                <span className="welcome__title">
                    Another React Boilerplate
                </span>
                <span className="welcome__info">
                    <span className="welcome__info-top">
                        Made by <a target="__blank" href="https://shubhaemk.github.io/portfolio/">Shubham Kamath</a>
                    </span>
                    <span className="welcome__info-bottom">
                        Contribute to this project - <a target="__blank" href="https://github.com/shubhaemk/another-react-boilerplate">here</a>!
                    </span>
                </span>
                <div className="welcome__links">
                    <span className="welcome__links-title">
                        - Connect with me -  
                    </span>
                    <a target="__blank" href="https://www.instagram.com/shubham_kamath/">Instagram</a>
                    <a target="__blank" href="https://twitter.com/shubham_kamath">Twitter</a>
                    <a target="__blank" href="https://github.com/shubhaemk">GitHub</a>
                    <a target="__blank" href="https://www.linkedin.com/in/shubham-kamath/">Linkedin</a>
                </div>
            </div>
        );
    }
}

export default App;