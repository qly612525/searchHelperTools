const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const del = require('del');

gulp.task("default", ['clean', 'copyhtml'], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['./src/index.ts'],
        cache: {},
        packageCache: {}
    }).plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});

gulp.task("copyhtml", function () { 
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () { 
    return del('./dist/**/*');
});