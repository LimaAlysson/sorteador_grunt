const { option } = require("grunt");

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        }
    })

    grunt.registerTask('olaMundo', function() {
        const done = this.async();
        setTimeout(function() {
            grunt.log.write('Olá mundo');
            done();
        }, 10000);
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['less', 'sass']);

};

