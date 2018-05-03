var gulp = require('gulp');

gulp.task('copy',function(){
	
	
 gulp.src('src/index1.html')
 	.pipe(gulp.dest('dist/'));
	
	
});




gulp.task('disk',function(){

	glup.watch('src/index1.html',['copy']);

});
