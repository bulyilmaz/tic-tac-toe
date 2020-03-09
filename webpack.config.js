const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/js/index.es6",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(es6|js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["transform-class-properties", ["@babel/plugin-transform-runtime", {
                            "corejs": 2
                        }]]
                    }
                }
            }
        ]
    }
};