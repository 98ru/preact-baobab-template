import autoprefixer from 'autoprefixer'
import {dependencies} from './package.json'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const {NODE_ENV = 'development'} = process.env
const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'

const loaders = {
	css: 'css!postcss',
	get stylus() {
		return `${this.css}!stylus`
	}
}

const paths = {
	assets: path.resolve('src/assets'),
	build: path.resolve('build'),
	client: path.resolve('src/client')
}

const plugins = [
	new HtmlWebpackPlugin,
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
	}),
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom'
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'
	})
]

if (isProd) {
	plugins.push(
		new ExtractTextPlugin('/css/bundle.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	)
}

module.exports = [{
	devServer: {
		historyApiFallback: true
	},
	entry: {
		client: paths.client,
		vendor: Object.keys(dependencies)
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
			loader: isDev
				? `style!${loaders.css}`
				: ExtractTextPlugin.extract(loaders.css)
		}, {
			test: /\.styl$/,
			loader: isDev
				? `style!${loaders.stylus}`
				: ExtractTextPlugin.extract(loaders.stylus)
		}, {
			test: /\.(gif|jpe?g|png|svg)$/,
			loader: 'url',
			query: {
				limit: 4096,
				name: 'img/[name].[hash:9].[ext]'
			}
		}, {
			test: /\.(eot|ttf|woff2?)$/,
			loader: 'url',
			query: {
				limit: 4096,
				name: 'font/[name].[hash:9].[ext]'
			}
		}, {
			test: /\.json$/,
			loader: 'json'
		}]
	},
	output: {
		filename: '/js/[name].js',
		path: paths.build
	},
	plugins,
	postcss: [autoprefixer],
	resolve: {
		root: [
			paths.assets,
			paths.client
		]
	}
}]