module.exports = function (grunt, config) {
    grunt.config.merge({
        jshint: {
            ignore_warning: {
                options: {
                    '-W030': true, // Ignores error: "Expected an assignment or
                                   // function call and instead saw an
                                   // expression"
                },
                src: ['src/js/app.js']
            }
        }/*,
        concat: {
            options: {
                separator: ';\n',
            },
            basic: {
                src: [
                    'src/js/plugins/*.js',
                    'src/js/main.js'
                ],
                dest: 'foo/js/main.js',
            },
            extras: {
                src: [
                    'src/js/libs/jquery.js',
                    'src/js/libs/bootstrap.js',
                    'src/js/libs/jquery-ui.js',
                    'src/js/libs/knockout.js'],
                dest: 'foo/js/libs.js',
            }
        }*/,
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '*.js',
                    dest: config.jsDir,
                    ext: '.min.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            js: {
                files: [
                    'src/js/**/*.js',
                    'grunt_tasks/javascript.js',
                    'gruntfile.js'
                ],
                tasks: [
                    //'concat',
                    'uglify',
                    'jshint'
                ]
            }
        }
    });
};