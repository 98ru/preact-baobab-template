import autoprefixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import {exec} from 'child_process'
import gulp from 'gulp'
import {PATHS} from './config'
import stylus from 'gulp-stylus'

export default gulp
	.task('build:css', () =>
		gulp.src(`${PATHS.ASSETS}/stylus/*.styl`)
			.pipe(stylus({
				'include css': true,
				include: ['node_modules']
			}))
			.pipe(autoprefixer())
			.pipe(csso())
			.pipe(gulp.dest(`${PATHS.BUILD}/css`)))

	.task('build:js', (done) =>
		exec('webpack -p', done))

	.task('watch:css', ['build:css'], () =>
		gulp.watch(`${PATHS.ASSETS}/stylus/**/*.styl`, ['build:css']))