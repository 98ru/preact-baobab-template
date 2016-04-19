import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {dependencies} from './package.json'
const {NODE_ENV} = process.env

const paths = {
	build: path.resolve('build'),
	client: path.resolve('src/client')
}

const plugins = [
	new HtmlWebpackPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'
	}),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
	}),
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom',
		ReactRouter: 'react-router'
	})
]

module.exports = [{
	entry: {
		client: paths.client,
		vendor: Object.keys(dependencies)
	},
	output: {
		filename: '[name].js',
		path: paths.build
	},
	resolve: {
		root: paths.client
	},
	plugins,
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				cacheDirectory: true
			}
		}]
	}
}]