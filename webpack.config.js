
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map', //DON'T use for production // used to find where errors occur
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        htmlPlugin
    ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    }
                }
            ]
        },
        // {
            //     test: /\.(csv|tsv)$/,
            //     use: [
            //        'csv-loader',
            //     ],
            // },
            // {
            //     test: /\.xml$/,
            //     use: [
            //        'xml-loader',
            //     ],
        // },
    ]
  }
};