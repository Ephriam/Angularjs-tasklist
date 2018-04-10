var gulp = require('gulp')
var browserSync = require('browser-sync')
var concat = require('gulp-concat')
var sass = require('gulp-sass')

var scripts = require('./scripts')
var styles = require('./styles')

var devMode = false

gulp.task('css', function(){
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('scss', function(){
    gulp.src(styles)
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('js', () => {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
    }))
})

gulp.task('html', () => {
    gulp.src('./src/templete/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('build', () => {
    gulp.start(['scss', 'js', 'html'])
})

gulp.task('browser-sync', () => {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        }
    })
})

gulp.task('start', () => {
    devMode = true
    gulp.start(['build', 'browser-sync'])
    gulp.watch(['./src/css/**/*.css','./src/css/**/*.scss'], ['scss'])
    gulp.watch(['./src/js/**/*.js'], ['js'])
    gulp.watch(['./src/templete/**/*.html'], ['html'])
})