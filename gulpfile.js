var gulp = require('gulp');
var jshint = require('gulp-jshint');

var lintDirs = ['./app/**/*.js', '!./app/node_modules/**', '!./app/static/lib/**' ];

gulp.task('lint', function(){
	return gulp.src(lintDirs)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('watch', function(){
	gulp.watch(lintDirs, ['lint']);
});

gulp.task('default', ['lint', 'watch']);
