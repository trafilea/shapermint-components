const path = require('path');
const { task, src, dest } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const distribution_folder = path.join('.', 'dist', 'kss-assets');

task('sass', () => {
	const sass_options = { outputStyle: 'expanded' };
	const component_library_entry_point = path.join('.', 'scss', 'main.scss');

	return src([component_library_entry_point])
		.pipe(sass(sass_options).on('error', sass.logError))
		.pipe(rename('styles.css'))
		.pipe(dest(distribution_folder, { "mode": "0777" }));
});