var gulp = require ('gulp');
var sass = require ('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

//ERROR HANDLER
var beep = require('beepbeep');
var colors = require('colors');

// VARIABLES
var path = {
    src     : 'src',
    dist    : 'dist'
};

var onError = function(err) {
  beep([200, 200]);
  console.log(
    '\n\n****************************************************\n'.bold.gray +
    '*****************'.bold.gray + ' \(╯°□°)╯'.bold.red + ' ︵ '.bold.gray +'ɹoɹɹǝ '.bold.blue + '*****************'.bold.gray +
    '\n****************************************************\n\n'.bold.gray +
    String(err) +
    '\n\n*******************************************************\n\n'.bold.gray );
  this.emit('end');
};

// CSS 
gulp.task( 'css', function(){
	return gulp.src('src/scss/main.scss')
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(sass())
	.pipe(autoprefixer({
		browsers:[
			'last 2 versions',
			'>1%',
			'ie 9'
		]
		}))
	.pipe(gulp.dest('dist/css'));
});

// HTML 
gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

// WATCH 
gulp.task('default', ['css','html'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        files: ['./dist/css/main.css']
    });
    gulp.watch('./src/scss/**/*.scss', ['css']);
});