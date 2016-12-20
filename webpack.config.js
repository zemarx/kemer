var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // query: {
                //     presets: ['es2015', 'react']
                // },
                exclude: [/node_modules/]
            }
        ]
    }
};
