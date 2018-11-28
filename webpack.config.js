const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = () => {

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: "[name]-bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
            new webpack.LoaderOptionsPlugin({
                options:{
                    postcss: [
                        autoprefixer()
                    ]
                }
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 8080
        },
        devtool: devMode ? "cheap-module-eval-source-map" : "source-map"

    }
}