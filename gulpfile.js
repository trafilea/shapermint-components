const path = require('path');
const { task, parallel, series, watch } = require('gulp');
const connect = require('gulp-connect')

require('./tasks/sass');
require('./tasks/styleguide');

task('serve', () => {
	connect.server({
		root: 'docs',
		port: '8081'
	});
});

task('build', series(['sass', 'styleguide',]));

task('watch', () => {
	watch([
		path.join('.', 'scss', 'main.scss'),
		path.join('.', 'scss', '**', '*.scss'),
		path.join('.', 'static', '**', '*.*')
		],
		series('build')
	);
});

task('local',
	parallel([
		'build',
		'serve',
		'watch'
	])
);