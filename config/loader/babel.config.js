module.exports = function(api) {
    console.log(api.env());
    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": "> 0.25%, not dead"
                }
            ],
            [
                '@babel/preset-react',
                {
                    "development" : api.env("development") 
                }
            ]
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties",
            'transform-react-remove-prop-types'
        ]
    }
};

