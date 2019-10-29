const gulp = require('gulp');

const modules = require('./modules.json');

modules.forEach(el => {
  gulp.task(el.taskName, () => {
    return gulp.src(el.src)
      .pipe(gulp.dest(el.dest));
  });
});

const tasks = modules.map(el => el.taskName);

gulp.task('default', gulp.parallel(tasks));
