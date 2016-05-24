export const {NODE_ENV = 'development'} = process.env
export const isDeveloment = NODE_ENV === 'development'
export const isProduction = NODE_ENV === 'production'
export const PATHS = {
	ASSETS: 'src/assets',
	BUILD: 'build',
	CLIENT: 'src/client'
}