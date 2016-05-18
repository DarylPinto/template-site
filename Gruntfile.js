module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'resources/',
						src: ['sass/*.sass', 'scss/*.scss'],
						dest: 'resources/css/',
						flatten: true,
						ext: '.css'
					}
				]
			}
		},

		babel: {
			options: {
				sourceMap: true
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'resources/js/src/',
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
		},

		watch: {
			js: {
				files: 'resources/js/src/*.js',
				tasks: ['babel', 'uglify', 'concat']
			},
			css: {
				files: ['resources/sass/*.sass', 'resources/scss/*.scss'],
				tasks: ['sass']
			}
		}

	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['sass', 'babel', 'uglify', 'concat']);
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('js', ['babel', 'uglify', 'concat']);
	
};