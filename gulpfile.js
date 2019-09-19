var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require('autoprefixer'),
    fileinclude = require("gulp-html-tag-include"),
    dir = "W:\\";

gulp.task("html",function() {
    return gulp.src(["list.html"])
        .pipe(fileinclude())
        .pipe(gulp.dest(dir));
})

gulp.task("js",function(){
    return gulp.src("js/**/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest(dir));
});
gulp.task('assets',function(){
    return gulp.src('assets/**/*')
      .pipe(gulp.dest(dir+'\\assets\\'));
});
gulp.task('css', function(){
	return gulp.src(['scss/main.scss'])
		.pipe(sass())
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest('W:\\'));

});
gulp.task('watch', function() {
    gulp.watch(['js/**/*.js'], gulp.series('js'));
    gulp.watch(['*.html'], gulp.series('html'));
      gulp.watch(['scss/**/*.scss'], gulp.series('css'));
    gulp.watch(['assets/**/*'], gulp.series('assets'));
});

gulp.task('build', gulp.series('js','css','html','assets'));