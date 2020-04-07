const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/**
* CleanWebPackPlugin : It cleans the dist folder
* svg-sprite-loader : make svg to use in our JS code, and convert all the svg into svg sprite
*/


module.exports = {

    entry: './src/index.tsx',
    output: {
        filename: '[name]bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            { 
                test: /\.ts(x?)$/,
                exclude: /(node_modules|bower_components)/, 
                loader: "ts-loader" 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
        
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },

            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }

        ],
   },


    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'React Setup with Typescript',
            template : 'public/index.html'
            
        }),
        new MiniCssExtractPlugin(),
   ],


    optimization: {
        splitChunks: {
            cacheGroups: {
                
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    chunks: 'initial',
                    name: 'reactVendor',
                    enforce: true
                },
                
                gsapVendor: {
                    test: /gsap/,
                    chunks: 'initial',
                    name: 'gsapVendor',
                    enforce: true
                },
                
              
                
            }
        },
    
        usedExports: true
    },
    
    





};
