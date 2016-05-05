import Pattern from 'url-pattern'
import {request} from 'common/utils'

export class RestActions {
	constructor(uri, methods = ['get']) {
		this.pattern = new Pattern(uri)

		methods.forEach((method) => {
			this[method] = ({params, data, query = {}} = {}) => {
				Object.keys(query).forEach((key) => {
					if (Array.isArray(query[key])) {
						query[key] = query[key].join(',')
					}
				})

				const url = this.pattern.stringify(params)
				const req = request[method](url).query(query).send(data)
				const promise = req.endAsync()

				return promise.finally(() => {
					if (promise.isCancelled()) {
						req.abort()
					}
				})
			}
		})
	}
}