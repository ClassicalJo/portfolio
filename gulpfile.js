let gulp = require('gulp')
let autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function (done) {
    gulp.src('src/index.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css/'))
        done()
});

gulp.task('watch', function() {
    gulp.watch('src/index.css', ['css'])
})
