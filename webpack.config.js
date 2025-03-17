const path = require('path');

module.exports = {
	entry: {
		app: './src/app.ts',
		background: './src/background.ts'
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
	},
	output: {
		path: path.resolve(__dirname, 'proxyclient/assets/js'),
		filename: '[name].js'
	},
	mode: 'development',
	devtool: 'inline-source-map',
};