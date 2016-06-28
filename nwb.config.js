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
						React: 'preact-compat',
						ReactDOM: 'preact-compat'
					})
				],
				resolve: {
					root: path.resolve('src')
				}
			}
		}
	}
}
