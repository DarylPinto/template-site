module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				sourcemap: 'auto',
				style: 'nested'
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'src/css',
						src: ['*.sass', '*.scss'],
						dest: 'dist/css/',
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
						cwd: 'src/js/',
						src: ['*.js'],
						dest: 'dist/js/babel-transpiled/'
					}
				]
			}
		},

		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'src/images/',
						src: ['*.{png,jpg,gif}'],
						dest: 'dist/images/'
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
						cwd: 'dist/js/babel-transpiled/',
						src: ['*.js'],
						dest: 'dist/js/min/',
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
				src: ['dist/js/min/*.js'],
				dest: 'dist/js/min/concat/<%= pkg.name %>.js'
			}
		},

		watch: {
			css: {
				files: ['src/css/*.{sass,scss}'],
				tasks: ['newer:sass']
			},
			js: {
				files: 'src/js/*.js',
				tasks: ['newer:babel', 'newer:uglify', 'newer:concat']
			},
			images: {
				files: 'src/images/*.{png,jpg,gif}',
				tasks: ['imagemin:dynamic']
			}
		}

	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', ['sass', 'babel', 'uglify', 'concat', 'imagemin']);
	grunt.registerTask('js', ['babel', 'uglify', 'concat']);
	
};