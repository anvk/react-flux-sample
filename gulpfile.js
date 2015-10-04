"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'), // Run a local dev server
    open = require('gulp-open'),  // Open a URL in a web browser
    browserify = require('browserify'), // Bundles JS
    reactify = require('reactify'), // Transforms React JSX to JS
    source = require('vinyl-source-stream'); // Use conventional text streams with Gulp

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    mainJs: './src/main.js',
    dist: './dist'
  }
};

// Start a local development server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({
      uri: config.devBaseUrl + ':' + config.port + '/'
    }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs) // browserify all JS files
    .transform(reactify)  // use reactify on every JS (compiling JSX)
    .bundle() // bundle. put all into 1 file
    .on('error', console.error.bind(console))  // error handling
    .pipe(source('bundle.js'))  // name bundle
    .pipe(gulp.dest(config.paths.dist + '/scripts')) // move bundle into scripts folder
    .pipe(connect.reload());  // reload browser
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'open', 'watch']);