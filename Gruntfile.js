module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		babel: {
			options: {
				sourceMap: true
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'resources/js/grunt-src/',
						src: ['*.js'],
						dest: 'resources/js/babel-transpiled/'
					}
				]
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'resources/js/babel-transpiled/',
						src: ['*.js'],
						dest: 'resources/js/min/',
						ext: '.min.js'
					}
				]
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['resources/js/min/*.js'],
				dest: 'resources/js/min/concat/<%= pkg.name %>.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['babel', 'uglify', 'concat']);
	
};