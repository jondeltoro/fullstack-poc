import gulp from 'gulp';
import LiveServer from 'gulp-live-server';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import source from 'vinyl-source-stream';


gulp.task('live-server',function(){
    console.log("Hi this is live-server task");
    //this will start the express server
    let server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle',['copy'],function () {
   return browserify({
       entries:'app/main.jsx',
       debug:true,
   })
       .transform("babelify") ///second parameter omitted because .babelrc {presets: ["es2015", "react"]}
       .bundle()
       .pipe(source('app.js'))
       .pipe(gulp.dest('./.tmp'));
});
gulp.task('copy',function () {
    gulp.src(['app/*.css']).
        pipe(gulp.dest('./.tmp'));
});
gulp.task('serve',['bundle','live-server'],function () {
    console.log("Hi this is serve task");
    //this will start Browser Sync
    browserSync.init(null,{
        proxy:"http://localhost:7777",
        port:9001
    });
});

