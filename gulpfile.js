var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

// SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('build:server', function () {
	var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


// CLIENT
/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js',
] 

gulp.task('build:index', function(){
    //Let's copy our head dependencies into a dist/libs
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
    var assets = gulp.src(['client/assets/**/*.*','!client/assets/**/*.scss'], {base:'client'})
        .pipe(gulp.dest('dist'));
    //Let's copy our index into dist   
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('dist'));
    return [copyJsNPMDependencies, copyIndex, assets];
});
gulp.task('build:css', function(){
    var assets = gulp.src(['client/assets/**/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/assets/css/'));
    return [assets];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src(['client/**/*.ts'])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback){
    runSequence('clean', 'build:server', 'build:index', 'build:app','build:css', callback);
});

gulp.task('default', ['build']);