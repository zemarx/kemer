var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'app-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot','babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
