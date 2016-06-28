module.exports = function (grunt, config) {
    grunt.config.merge({
        cssmin: {
            dist: {
                src: [
                    //'foo/css/*.css',
                    'src/css/**/**/*.css'
                ],
                dest: config.cssDir + 'style.min.css'
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