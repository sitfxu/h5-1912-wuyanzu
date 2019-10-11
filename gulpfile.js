var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifiyCss = require('gulp-minify-css');
// var minifyHtml = require('gulp-minify-html');
// var sass = require('gulp-sass');
var load = require('gulp-load-plugins')();
var concat = require('gulp-concat');
// var babel = require('gulp-babel');

// gulp.task('init',function(){
//     console.log('init');
// })

gulp.task('ugliy',function(done){
    gulp.src('./src/js/*.js')
    .pipe(load.babel({
        presets:['@babel/env']
    }))
    .pipe(load.concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
    done();
})

gulp.task('minifiyCss',function(done){
    gulp.src('./src/css/*.css')
    .pipe(minifiyCss())
    .pipe(gulp.dest('./dist/css/'));
    done();
})

gulp.task('sass',function(done){
    gulp.src('./src/css/index_style.scss')
    .pipe(load.sass())
    .pipe(gulp.dest('./dist/css/'));
    done();
})




