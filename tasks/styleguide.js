const path = require('path');
const { task } = require('gulp');
const kss = require('kss');
const kssConfig = require('../kss-config.json');

task('styleguide', () => {
	return kss({
		source: kssConfig.source,
		destination: kssConfig.destination,
		css: kssConfig.css,
		homepage: kssConfig.homepage
	});
});