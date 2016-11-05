var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname + "/app"),
    entry: {
        app: './app.ts'
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'css-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}