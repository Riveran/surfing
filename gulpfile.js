var gulp        = require('gulp');
var browserSync = require('browser-sync')
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync({
        server: { 
            baseDir: './app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch("app/js/*.js", browserSync.reload);
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html", browserSync.reload);
});

gulp.task('default', ['watch'])