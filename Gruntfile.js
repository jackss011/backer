const buildDir = "build/app"

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            files: {
                cwd: 'app',
                src: ['**/*.js', '**/*.html'],
                dest: buildDir,
                expand: true
            }
        },

        babel: {
            options: {
                sourceMap: true
            },
            files: {
                cwd: 'app',
                src: ['**/*.jsx'],
                dest: buildDir,
                ext: '.js',
                expand: true
            }

        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy', 'babel']);
}
