import gulp from 'gulp';
import gulpStylus from 'gulp-stylus';
import gulpConcat from 'gulp-concat';
import gulpConcatCss from 'gulp-concat-css';
import gulpCleanCss from 'gulp-clean-css';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpUtil from 'gulp-util';
import gulpPug from 'gulp-pug';

import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

const DEST = 'dest';

gulp.task('html', () => {
	return gulp
		.src('src/index.pug')
		.pipe(gulpPug())
		.pipe(gulp.dest(DEST));
});

gulp.task('css:vendor', () => {
	return gulp
		.src([
			'node_modules/bootstrap/dist/css/bootstrap.min.css'
		])
		.pipe(gulpConcat('vendor.css'))
		.pipe(gulp.dest(DEST));
});

gulp.task('css:custom', () => {
	return gulp
		.src('src/**/*.styl')
		.pipe(gulpStylus())
		.pipe(gulpConcatCss('custom.css'))
		.pipe(gulpSourcemaps.init())
		.pipe(gulpCleanCss())
		.pipe(gulpSourcemaps.write('.'))
		.pipe(gulp.dest(DEST));
});

gulp.task('css', [ 'css:vendor', 'css:custom' ]);

gulp.task('js', (callback) => {
	webpack(webpackConfig, (err, stats) => {
		if (err) throw new gulpUtil.PluginError("webpack", err);
		gulpUtil.log("[webpack]", stats.toString({}));
		callback();
	});
});

gulp.task('copy', () => {
	return gulp
		.src([ 'src/**/*.jpg', 'src/**/*.png' ])
		.pipe(gulp.dest(DEST));
});

gulp.task('dest', [ 'html', 'css', 'js', 'copy' ]);

gulp.task('watch', () => {
	gulp.watch('src/**/*.pug', [ 'html' ]);
	gulp.watch('src/**/*.styl', [ 'css' ]);
	gulp.watch('src/**/*.js', [ 'js' ]);
});

gulp.task('dev', [ 'dest', 'watch' ]);
gulp.task('default', [ 'dev' ]);