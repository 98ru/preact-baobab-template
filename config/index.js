import minimist from 'minimist'

if (minimist(process.argv).p) {
	process.env.NODE_ENV = 'production'
} else if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development'
}

const {NODE_ENV} = process.env
export const isDeveloment = NODE_ENV === 'development'
export const isProduction = NODE_ENV === 'production'
export const PATHS = {
	ASSETS: 'src/assets',
	BUILD: 'build',
	CLIENT: 'src/client'
}