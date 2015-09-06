module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify:{
			build:{
				src:'src/a.js',
				dest:'build/a.min.js'
			}
		},

		imagemin:{
			dynamic:{
				files:[{
					expand:true,
					cwd: 'images/src',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build'
				}]
			}
		},

		watch:{
			scripts:{
				files:['src/a.js'],
				asks:['uglify'],
				options:{spawn:false}
			},
			images:{
				files:['images/src/**/*.{png,jpg,gif}'],
				tasks:['imagemin'],
				options:{
					spawn:false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNmpTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify','imagemin','watch']);
};
