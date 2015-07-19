module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			js: {
				files: ['js/*.js'],
				tasks: ['jshint', 'uglify'],
			},
			css: {
				files: ['**/*.scss'],
				tasks: ['sass:build'],
			},
		},
		jshint: {
			beforeminify: {
				src: 'js/*.js',
			},
		},
		uglify: {
			options: {
				mangle: false,
				compress: true,
			},
			build: {
				src: 'js/*.js',
				dest: 'js/dist/scripts.min.js'
			}
		},
		sass: {
			debug: {
				options: {
					outputStyle: 'expanded',
					sourcemap: false,
				},
				files: {                         
					'style.css': 'sass/style.scss',
				},
			},
			build: {
				options: {
					outputStyle: 'compressed',
					sourcemap: true,
				},
				files: {                         
					'style.css': 'sass/style.scss',
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);

};