/* --------- plugins --------- */

var
	gulp        = require('gulp'),
	jade        = require('gulp-jade'),
	scss        = require('gulp-sass'),
	plumber     = require('gulp-plumber');

/* --------- paths --------- */

var
	paths = {
		jade : {
			location: 'index.jade',
			compiled: 'index.jade',
			destination: '.'
		},

		scss : {
			location    : ['assets/css/**/*.sass', 'assets/css/**/*.scss'],
			entryPoint  : 'assets/css/main.sass',
			destination: 'assets/css'
		}
	};

/* --------- jade --------- */

gulp.task('jade', function() {
	gulp.src(paths.jade.compiled)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t',
		}))
		.pipe(gulp.dest(paths.jade.destination));
});

/* --------- scss --------- */

gulp.task('scss', function () {
	gulp.src(paths.scss.location)
    	.pipe(scss().on('error', scss.logError))
    	.pipe(gulp.dest(paths.scss.destination));
});

/* --------- watch --------- */

gulp.task('watch', function(){
	gulp.watch(paths.jade.location, ['jade']);
	gulp.watch(paths.scss.location, ['scss']);
});

/* --------- default --------- */

gulp.task('default', ['jade', 'scss', 'watch']);