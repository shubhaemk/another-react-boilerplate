/*
    ToDo
    1. Return a function instead
    2. Configure env to support browsers
    3. Check for react configuration
*/ 

module.exports = {
    presets:[
        "@babel/preset-env",
        '@babel/preset-react'
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-class-properties", 
            {
                    "loose": true 
            }
        ],
        'transform-react-remove-prop-types'
    ]
};
