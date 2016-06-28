module.exports = function (grunt, config) {
    grunt.config.merge({
        processhtml: {
            dist: {
                files: {
                    'foo/processed.html': 'src/index.html'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'dist/index.html' : 'foo/processed.html',
                }
            }
        },
        validation: {
            options: {
                reset: grunt.option('reset') || false,
                stoponerror: false,
                relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.', "Section lacks heading. Consider using “h2”-“h6” elements to add identifying headings to all sections."], //ignores these errors
                generateReport: false,
                errorHTMLRootDir: "w3cErrorFolder",
                useTimeStamp: true
            },
            files: {
                src: ['src/index.html']
            }
        },
        watch: {
            html: {
                files: 'src/index.html',
                tasks: [
                    'validation',
                    'processhtml',
                    'htmlmin'
                ]
            }
        }
    });
};