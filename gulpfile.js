// for cloud deployment do not push gulpfile to repository
// only including for local deployment on this project

const gulp = require("gulp");
const browserSync = require("browser-sync");
const nodemon = require("gulp-nodemon");

gulp.task("nodemon", cb => {
  let started = false;

  return nodemon({
    script: "app.js",
    ignore: [
      '__misc/',
      'www/_json/'
    ],
    env: {
      // support auth
      'EXAMPLE_KEY': 'loremipsum'
    }
  }).on("start", () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task(
  "browser-sync",
  gulp.series("nodemon", (cb) => {
    browserSync.init(null, {
      proxy: {
        target: "http://localhost:3000",
        ws: true
      },
      files: ['**/*.*'],
      ignore: ['www/_json/*.*'],
      port: 9000
    });

    cb();
  })
);

gulp.task("default", gulp.series("browser-sync", (cb) => {
  cb();
}));

// script reference
// https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e
