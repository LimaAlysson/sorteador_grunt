module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    grunt.registerTask('olaMundo', function() {
        const done = this.async();
        setTimeout(function() {
            grunt.log.write('Olá mundo');
            done();
        }, 10000);
    });

    grunt.registerTask('default', ['olaMundo']);

};

