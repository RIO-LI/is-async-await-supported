const gulp = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');


gulp.task('prod', function () {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            target: "es2015",
            module: "es2015"
        }))
        .pipe(uglify())
        .pipe(rename('is-async-await-supported.esm.min.js'))
        .pipe(sourcemaps.write('.', { includeContent: false }))
        .pipe(gulp.dest('lib'));
});

gulp.task('dev', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            target: "es2015",
            module: "es2015"
        }))
        .pipe(rename('is-async-await-supported.esm.js'))
        .pipe(gulp.dest('lib'));
});