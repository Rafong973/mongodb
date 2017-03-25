const gulp = require('gulp');
const minifycss = require('gulp-minify-css');//压缩

// CSS3编译
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssgrace = require('cssgrace');
const cssnext =require('cssnext');
const sass = require('gulp-sass');

const uglify = require('gulp-uglify');//混淆js

const processors = [
	autoprefixer(
		{
		browsers: 
			[
				'ie >= 6',
				'ie_mob >= 7',
				'last 2 versions'
			],
		cascade: true,
		remove: true
	}),
	cssnext(),
	cssgrace
];

gulp.task('indexCss', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['./css/*.css'])    //- 需要处理的css文件，放到一个字符串数组里                          //- 合并后的文件名
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(minifycss())                                      //- 压缩处理成一行
        .pipe(gulp.dest('./views/index/'))                               //- 输出文件本地                                //- 生成一个rev-manifest.json
});

gulp.task('Js',()=>{
	gulp.src(['./views/index/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('getCss', () => {
	return gulp.watch('./css/*.css',['indexCss']);	
});

gulp.task('getJs',()=>{
	return gulp.watch('./views/index/*.js',['Js']);
})