var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var src = path.resolve(__dirname, 'src');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var eslintLoaderConf = {
    test: /(\.js$|\.jsx$)/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
};

function configPreloaders(config, options) {
    var preloaders = config.module.preLoaders;

    if(options.eslint) {
        config.eslint = {
            configFile: '.eslintrc'
        };
        preloaders.push(eslintLoaderConf);
    }
}

function configLoaders(config, options) {
    var loaders = config.module.loaders;

    loaders.push(
        {
            test: /\.jsx$/,
            include: /src/,
            loaders: options.hotComponents ? ['react-hot-loader', 'babel-loader?stage=0&optional=runtime'] : null,
            loader:  options.hotComponents ? null : 'babel-loader?stage=1&optional=runtime'
        },
        {
            test: /\.js$/,
            include: /src/,
            loader: 'babel-loader?stage=0&optional=runtime'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass?outputStyle=expanded'
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
    );
}

function configPlugins(config, options) {
    var plugins = config.plugins;

    if(options.hotComponents) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if(options.minify) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }));
    }

    plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = function(options) {
    var config = {
        entry: path.resolve(__dirname, 'src/js/index.jsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: options.minify ? 'bundle.min.js' : 'bundle.js'
        },
        devtool: options.devtool,
        debug: options.debug,
        module: {
            preLoaders: [],
            loaders: [],
            noParse: [pathToReact]
        },
        plugins: []
    };

    configPreloaders(config, options);
    configLoaders(config, options);
    configPlugins(config, options);

    return config;
};
