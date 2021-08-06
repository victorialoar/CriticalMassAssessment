const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
        form: './src/form.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '/index.html'),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, './'),
        setup(app) {
            app.post('*', (req, res) => {
                res.redirect(req.originalUrl);
            });
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        clean: true,
    },
};