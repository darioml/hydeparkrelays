module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                compress: true
            },
            development: {
                files: {
                    'assets/css/hpr.min.css': 'assets/css/hpr.less'
                }
            },
        },
        concat: {
            dist: {
                src: ['assets/css/pure-min.css', 'assets/css/swipebox.css', 'assets/css/hpr.min.css'],
                dest: 'assets/css/styles.min.css',
            },
        },
        uglify: {
            development: {
                options: {
                    preserveComments: false
                },
                files: {
                    'assets/js/scripts.min.js': ['assets/js/jquery-2.0.3.min.js', 'assets/js/jquery.swipebox.min.js', 'assets/js/index.js']
                }
            }
        },
        watch: {
            scripts: {
                files: '**/*.less',
                tasks: ['less', 'concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'concat', 'uglify']);

};
