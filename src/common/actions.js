import Pattern from 'url-pattern'
import {request} from 'common/utils'

export class RestActions {
	constructor(uri, methods = ['get']) {
		this.pattern = new Pattern(uri)

		methods.forEach((method) => {
			this[method] = (dao, {data, params, query = {}, timeout} = {}) => {
				const url = this.pattern.stringify(params)
				const req = request[method](url)
					.query(query).send(data).timeout(timeout)

				const promise = req.endAsync()
				return promise
					.then((res) => res.body)
					.catch((e) => {
						dao.actions.common.handleError(dao, e)
						throw e
					})
					.finally(() => {
						if (promise.isCancelled()) req.abort()
					})
			}
		})
	}
}