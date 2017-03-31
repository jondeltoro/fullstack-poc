var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server',function(){
    console.log("Hi this is live-server task");
    //this will start the express server
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('serve',['live-server'],function () {
    console.log("Hi this is serve task");
    //this will start Browser Sync
    browserSync.init(null,{
        proxy:"http://localhost:7777",
        port:9001
    });
});