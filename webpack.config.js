const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    context: __dirname,

    entry: {
        index: './js/index.js',
    },

    output: {
        path: `${__dirname}/dist`,
        filename: 'js/[chunkhash].js',
    },

    devtool: NODE_ENV === 'production' ? false : 'eval-source-map',

    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: `css-loader?${NODE_ENV === 'production' ? 'minimize' : ''}!less-loader`,
                }),
            }, {
                test: /\.(ttf|eot|woff2?)(\?.*)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]',
            }, {
                test: /\.(jpe?g|png|gif|svg)(\?.*)?$/,
                loader: 'file-loader?name=img/[hash].[ext]',
            }, {
                // этот кусок нужен только при использовании modernizr
                test: /modernizr/,
                loader: 'imports-loader?this=>window!exports-loader?window.Modernizr',
            }, {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [
                            'img:src',
                            'video:poster',
                        ],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/html/index.html`,
            filename: `index.html`,
        }),

        new ExtractTextPlugin('css/[chunkhash].css'),
    ],

    devServer: {
        host: '0.0.0.0',
        port: 8080,
    }
};

if (NODE_ENV === 'production') {
    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
        },
    });

    module.exports.plugins.push(uglifyJsPlugin);
}
