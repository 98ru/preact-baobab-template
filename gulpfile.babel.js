import gulp from 'gulp'
import {PATHS} from './config'

export default gulp
	.task('build:css', () =>
		gulp.src(`${PATHS.ASSETS}/stylus/*.styl`)
			.pipe(require('gulp-stylus')({
				include: ['node_modules'],
				'include css': true
			}))
			.pipe(require('gulp-autoprefixer')())
			.pipe(require('gulp-csso')())
			.pipe(gulp.dest(`${PATHS.BUILD}/css`)))

	.task('build:js', (done) =>
		require('child_process').exec('webpack -p', done))

	.task('watch:css', ['build:css'], () =>
		gulp.watch(`${PATHS.ASSETS}/stylus/**/*.styl`, ['build:css']))