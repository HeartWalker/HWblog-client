
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';//抽离css样式 单独打包
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    devtool: 'source-map',
    entry:{
        vendors:['react-hot-loader/patch','react', 'react-dom','redux','react-redux','react-router-dom','react-markdown','history','axios'],
        'app':[
            'webpack/hot/only-dev-server',
            path.resolve(__dirname,'./index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'), // 输出文件根目录\
        publicPath: '',
        filename: '[name].js',
        //chunkFilename: '[id].bundle.js',
    },
    module: {
        rules: [ //webpack 1 版本的loaders 升级为rules
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                exclude: path.resolve(__dirname, 'node_modules/'),
                use: 'babel-loader', //不再支持缩写 加载模块 "babel"
            },
            {
                test: /\.css$/, // Only .css files
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader", options: {
                            sourceMap: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            /*getLocalIdent: (context, localIdentName, localName, options) => {
                                return 'whatever_random_class_name'
                            }*/
                        }
                        },
                        { loader: 'postcss-loader', options: {
                            sourceMap: true,
                            plugins: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie >= 8'] })]
                        } },
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader", options: {
                            sourceMap: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            /*getLocalIdent: (context, localIdentName, localName, options) => {
                             return 'whatever_random_class_name'
                             }*/
                        }
                        }, {
                            loader: "sass-loader", options: {
                                sourceMap: true
                            }
                        },
                        { loader: 'postcss-loader', options: {
                            sourceMap: true,
                            plugins: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie >= 8'] })]
                        } },
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?limit=25000&name=imgs/[name].[ext]' // 对25000b 的图片会被编译成字节码 name=后的是字节大于25000的输出路径 在output 配置的path之后
            }
        ]
    },
    resolve: {
        // 查找module的话从这里开始查找
        // root: './node_modules', //绝对路径
        // 自动扩展文件后缀名，意味着我们require|imoport模块可以省略不写后缀名
        // 注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.
        extensions: ['.js', '.json', '.scss', '.jsx'],
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
        /*alias: {
         // AppStore: 'js/stores/AppStores.js', //后续直接 require('AppStore') 即可
         // ActionType: 'js/actions/ActionType.js',
         // AppAction: 'js/actions/AppAction.js'
         }*/
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('develop')
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './index.html', //html模板路径
            hash: false,
            favicon: './src/favicon.ico'
        }),
        new webpack.optimize.CommonsChunkPlugin({ // 分离第三方应用插件 提取公共js
            name: 'vendors', // 这公共代码的chunk名为'vendors'
            filename: '[name].js', // 生成后的文件名，虽说用了[name]，但实际上就是'vendors.js'了
            minChunks: 4, // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
        }),
        new ExtractTextPlugin('[name].css'), // [name]对应的是chunk的name
        //new webpack.optimize.DedupePlugin(), // 去重 已被移除
        new webpack.HotModuleReplacementPlugin(),//热更新
    ],
    devServer: {
        //contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        open: true,
        inline: true,
        port: 9000,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
            }
        }
    }
}
