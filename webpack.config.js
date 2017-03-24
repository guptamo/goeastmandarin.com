const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./webpack.parts')

const PATHS = {
    build: path.join(__dirname, 'build'),
    source: path.join(__dirname, 'source'),
}

const commonConfig = {
    entry: PATHS.source,
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: [["es2015", {"modules": false}], "react"],
                    },
                },
                include: PATHS.source,
                exclude: path.join(__dirname, 'node_modules'),
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Now Base",
            template: "source/template.ejs"
        }),
    ]
}

module.exports = function(env) {

    if (env === "production"){
        return merge(
            commonConfig,
            parts.extractCSS({
                include: PATHS.source,
                output: 'styles.css',
                loaders: parts.cssLoaders
            }),
            parts.minifyJS()
        )
    }

    return merge(
        commonConfig,
        parts.loadCSS({
            include: PATHS.source,
            loaders: parts.cssLoaders,
        }),
        parts.devServer,
        parts.sourceMap({type: "cheap-module-source-map"})
    )
}