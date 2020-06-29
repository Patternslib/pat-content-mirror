const path = require('path');
var webpack = require('webpack');


module.exports = {
    mode: "development",
    devServer: {
        inline: true,
        contentBase: './',
        port: '3001',
        host: '0.0.0.0'
    },
    entry: {
        "bundle": "./bundle-config.js",
    },
    externals: [{
        "window": "window"
    }],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '..')
    },
    // Like shims in require.js
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        query: '$'
                    },
                    {
                        loader: 'expose-loader',
                        query: 'jQuery'
                    }
                ]
            },
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            "jquery":               "jquery/dist/jquery",
            "jquery.browser":       "jquery.browser/dist/jquery.browser",
            "logging":              "logging/src/logging",
            "pat-compat":           "patternslib/src/core/compat",
            "pat-jquery-ext":       "patternslib/src/core/jquery-ext",
            "pat-logger":           "patternslib/src/core/logger",
            "pat-parser":           "patternslib/src/core/parser",
            "pat-registry":         "patternslib/src/core/registry",
            "pat-utils":            "patternslib/src/core/utils",
            "underscore":           "underscore/underscore",
        }
    },
    devtool: "source-map",
    node: {
        // https://github.com/webpack-contrib/css-loader/issues/447
        fs: 'empty'
    },
    devServer: {
        contentBase: './'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
        })
    ]
};
