const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

gulp.task('dev', () => {
  const stream = nodemon({
    script: 'app.js',
    ext: 'js',
    ignore: ['node_modules/', 'public/', 'views'],
  });
  stream.on('restart', () => {
    console.log('>>>>>> Restarted.');
  })
  .on('crash', () => {
    console.error('>>>>>> Application has crashed.');
    stream.emit('restart', 5);
  });
  setTimeout(() => {
    browserSync.init({
      proxy: 'localhost:3000',
      port: 3001,
    });
    gulp.watch('views/**/*.pug').on('change', browserSync.reload);
    gulp.watch('public/**').on('change', browserSync.reload);
  }, 1000);
})