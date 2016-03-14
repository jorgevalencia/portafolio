//ERROR HANDLER
var beep = require('beepbeep');
var colors = require('colors');

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

// VARIABLES
var path = {
    src     : 'src',
    dist    : 'dist'
};

var gulp = require ('gulp');
var sass = require ('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

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


// WATCH 
gulp.task('default', ['css'], function(){
	browserSync.init({
        server: {
            baseDir: "./"
        },
        files:[
        	'./dist/css/main.css'
        ]
    });
	gulp.watch(path.src + '/scss/**/*.scss', ['css']);

});

// WATCH ================================================
gulp.task('watch', ['browsersync'], function() {
    //gulp.watch( path.src + '/**/*.html',            ['html', 'files'] );
    //gulp.watch( path.src + '/scss/**/*.scss',       ['css'] );
    //gulp.watch( path.example + '/**/*.scss',        ['css-example'] );
    //gulp.watch( path.src + '/js/**/*.js',           ['js'] );
    //gulp.watch( path.src + '/img/**/*.+(png|jpg)',  ['images'] );
    //gulp.watch( path.src + '/img/**/*.svg',         ['svg'] );
});

,