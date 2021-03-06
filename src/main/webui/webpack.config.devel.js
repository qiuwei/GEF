var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./src/index.jsx'],
    devtool: 'cheap-module-eval-source-map',
    output: { path: __dirname+"/../resources/assets",
              filename: 'gef-bundle.js',
            },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {   test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'react'] },
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    devServer: {
        contentBase: __dirname+"/../resources/assets",
        proxy: {
            '/gef/api/**': {
                target :'http://localhost:4042',
                changeOrigin: true,
                secure: false
            }
        }
    }
};
