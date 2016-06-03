const path = require('path')

module.exports = function(nwb) {
	return {
		type: 'web-app',
		babel: {
			jsxPragma: 'h',
			optional: ['runtime'],
			stage: 0
		},
		webpack: {
			extra: {
				resolve: {
					root: path.resolve('src')
				}
			}
		}
	}
}
