var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    combineLoaders = require('webpack-combine-loaders');
module.exports = {
    entry: './components/Main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        }]

    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
}
