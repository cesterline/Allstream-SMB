var gulp = require('gulp');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var ngAnnotate = require('browserify-ngannotate');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var historyApiFallback = require('connect-history-api-fallback');

// Where our files are located
var jsFiles = "src/app/**/*.js";
var viewFiles = "src/app/**/*.html";
var sassFiles = "src/sass/**/*.scss";
var cssFiles = "css/*.css";
var jsCompFiles = "js/main.min.js";

var interceptErrors = function (error) {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
};

gulp.task('browserify', ['views'], function () {
    return browserify('./src/app/app.js')
        .transform(babelify, {presets: ["es2015"]})
        .transform(ngAnnotate)
        .bundle()
        .on('error', interceptErrors)
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./js/'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer('> 1%', 'last 2 versions', 'ie 9', 'Opera 12.1'))
        .pipe(gulp.dest('./css'));
});

//gulp.task('compressCss', function () {
//    return gulp.src('./public/css/style.css')
//        .pipe(csso())
//        .pipe(rename("style.min.css"))
//        .pipe(gulp.dest('./public/css'));
//});

gulp.task('compressJs', function () {
    return gulp.src('./js/main.js')
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('./js/'));
});

gulp.task('html', function () {
    return gulp.src("src/index.html")
        .on('error', interceptErrors)
        .pipe(gulp.dest('./'));
});

gulp.task('views', function () {
    return gulp.src(viewFiles)
        .pipe(templateCache({
            standalone: true
        }))
        .on('error', interceptErrors)
        .pipe(rename("app.templates.js"))
        .pipe(gulp.dest('./src/app/config/'));
});

gulp.task('img', function() {
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('/img/'));
});

// This task is used for publicing production ready
// minified JS/CSS files into the dist/ folder
gulp.task('public', ['html', 'browserify'], function () {
    var html = gulp.src("index.html")
        .pipe(gulp.dest('./dist/'));

    var js = gulp.src("main.js")
        .pipe(uglify())
        .pipe(gulp.dest('./'));

    return merge(html, js);
});

gulp.task('default', ['html', 'sass','img', 'compressJs', 'browserify'], function () {

    browserSync.init(['./public/**/**.**'], {
        server: "./",
        port: 4000,
        notify: false,
        middleware: [ historyApiFallback() ],
        ui: {
            port: 4001
        }
    });

    gulp.watch("src/index.html", ['html']);
    gulp.watch("src/img/**/*", ['img']);
    gulp.watch(viewFiles, ['views']);
    gulp.watch(jsFiles, ['browserify']);
    gulp.watch(sassFiles, ['sass']);
//    gulp.watch(cssFiles, ['compressCss']);
    gulp.watch(jsCompFiles, ['compressJs']);
});
