const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = (env) => {
    const devMode = env !== 'production';

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
                filename: devMode ? '[name].css' : '[name].[hash].css'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 8080,
            historyApiFallback: true
        },
        devtool: devMode ? "cheap-eval-source-map" : "source-map"

    }
}