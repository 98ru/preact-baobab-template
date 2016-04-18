import path from 'path'
import webpack from 'webpack'
import {dependencies} from './package.json'

const paths = {
	build: path.resolve('build'),
	client: path.resolve('src/client')
}

const plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'
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