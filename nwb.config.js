const path = require('path')

module.exports = function(nwb) {
	return {
		type: 'web-app',
		babel: {
			optional: ['runtime'],
			stage: 0
		},
		webpack: {
			extra: {
				plugins: [
					new nwb.webpack.ProvidePlugin({
						React: 'react',
						ReactDOM: 'react-dom'
					})
				],
				resolve: {
					alias: {
						react: 'preact-compat',
						'react-dom': 'preact-compat'
					},
					root: path.resolve('src')
				}
			}
		}
	}
}
