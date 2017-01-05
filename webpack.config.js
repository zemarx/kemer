var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'app-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
