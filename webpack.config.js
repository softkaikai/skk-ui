const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin')
const camel2Dash = require('camel-2-dash');

function getStyle(stylePath) {
    const basename = stylePath.replace('element-plus/lib/', '');
    const result = path.join('element-plus', 'lib', 'theme-chalk', `${
        camel2Dash(basename)}.css`);
    console.log(`${stylePath} - `, result);
    return result;
}

module.exports = {
    mode: 'development',
    entry: './example/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'skk-ui',
        libraryTarget: 'umd',
        filename: 'skk-ui.js',
        auxiliaryComment: 'Test Comment'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules | lib/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    // transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory({
                            libraryName: 'element-plus',
                            libraryDirectory: 'lib',
                            camel2DashComponentName: true,
                            style: getStyle
                        }) ]
                    }),
                }
            },
            /*{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },*/
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: 'fonts/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: 'images/[name]-[hash].[ext]'
                }
            },
        ]
    },
    devServer: {
        hot: true,
        port: 9000,
        open: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.vue'],
        alias: {
            "@src":path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}
