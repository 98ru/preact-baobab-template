import Pattern from 'url-pattern'
import {request} from 'common/utils'

export class RestActions {
	constructor(uri, methods = ['get']) {
		this.pattern = new Pattern(uri)

		methods.forEach((method) => {
			this[method] = (dao, {params, data, query = {}} = {}) => {
				// FIX: transform arrays into
				// a comma-separated values format
				Object.keys(query).forEach((key) => {
					if (Array.isArray(query[key])) {
						query[key] = query[key].join(',')
					}
				})

				const url = this.pattern.stringify(params)
				const req = request[method](url).query(query).send(data)
				const promise = req.endAsync()

				return promise
					.then((res) => res.body)
					.catch((error) => dao.actions.page.setError(dao, {error}))
					.finally(() => {
						if (promise.isCancelled()) {
							req.abort()
						}
					})
			}
		})
	}
}