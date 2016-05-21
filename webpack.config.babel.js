import {dependencies} from './package.json'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {isDeveloment, isProduction, PATHS} from './config'
import path from 'path'
import webpack from 'webpack'

const plugins = [
	new HtmlWebpackPlugin({
		template: `${PATHS.ASSETS}/index.html`
	}),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}),
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom'
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'
	})
]

if (isProduction) {
	plugins.push(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	)
}

export default {
	devServer: {
		contentBase: PATHS.BUILD,
		historyApiFallback: true
	},
	entry: {
		client: path.resolve(PATHS.CLIENT),
		vendor: Object.keys(dependencies)
	},
	output: {
		filename: '/js/[name].js',
		path: PATHS.BUILD
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				cacheDirectory: true
			}
		}, {
			test: /\.css$/,
			loader: isDeveloment ? 'style!raw' : 'null'
		}, {
			test: /\.json$/,
			loader: 'json'
		}]
	},
	plugins,
	resolve: {
		root: [
			path.resolve(PATHS.CLIENT),
			path.resolve(PATHS.BUILD)
		]
	}
}