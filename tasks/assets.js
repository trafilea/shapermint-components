const path = require('path');
const { task, src, dest } = require('gulp');
const rename = require('gulp-rename');
const distribution_folder = path.join('.', 'docs', 'kss-assets');
const assets_list = [
  path.join('.', 'static', 'fonts.css'),
  path.join('.', 'static', 'styleguide.css'),
  path.join('.', 'static', 'font-awesome/*')
];

task('assets', () => {
	return src(assets_list)
		.pipe(dest(distribution_folder, { "mode": "0777" }));
});
