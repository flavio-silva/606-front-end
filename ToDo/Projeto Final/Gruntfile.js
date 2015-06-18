module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			'js/less.min.js': 'js/less.js'
		},
		less: {
			options: {
				cleancss: true
			},
			'css/style.css': 'less/style.less'
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task(s).
	grunt.registerTask('default', ['uglify','less']);
};