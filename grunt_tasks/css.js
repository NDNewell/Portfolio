module.exports = function (grunt, config) {
    grunt.config.merge({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css'
                }],
            }
        },
        watch: {
            cssfiles: {
                files: [
                    'src/css/**/**/*.css',
                    //'foo/css/*.css',
                    'grunt_tasks/css.js'
                ],
                tasks: [
                    'cssmin'
                ]
            }
        }
    })
};