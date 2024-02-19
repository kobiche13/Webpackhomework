const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    module: {        
		rules: [
            {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
        ]        
    },
    plugins: [			
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}