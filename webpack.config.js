const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = (env)=>{
    const isProduction = env === "production"
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public" ),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            "css-loader",
                            "sass-loader"
                        ]
                    }),
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 8080
          },
          devtool: isProduction ? "source-map" : "cheap-module-eval-source-map"
        
    }
}