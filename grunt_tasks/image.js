module.exports = function (grunt, config) {
    grunt.config.merge({
        /*sprity: {
          options: {
            'cssPath': '../img/png/',
            'processor': 'css',
            'orientation': 'vertical',
            'margin': 4,
            'format': 'png'
          },
          sprite: {
            options: {
              'style': '../../../foo/css/sprite.css'
            },
            src: 'src/img/png/*',
            dest: 'dist/img/png/png_sprites',
          }
        },
        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        //width: 320,
                    //},{
                        name: "w640",
                        width: 640,
                    //},{
                        //width: 1024,
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/img/jpg/',
                    src: ['*.jpg'],
                    dest: 'dist/img/jpg/'
                }]
            }
        },
        imageoptim: {
            options: {
                quitAfter: true
            },
            allPngs: {
                options: {
                    imageAlpha: true,
                    jpegMini: false
                },
                src: ['dist/img/png/']
            },
            allJpgs: {
                options: {
                    imageAlpha: false,
                    jpegMini: true
                },
                src: ['dist/img/jpg/']
            }
        },*/
        svgstore: {
            options: {
                cleanup: false,
                includedemo: false,
                includeTitleElement: false,
                formatting : {
                    indent_size : 2
                }
            },
            default : {
                files: {
                    'dist/img/svg_sprites.svg': 'src/img/*.svg'
                }
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            dist: {
                files: {
                    'dist/img/JavaScript.svg': 'src/img/JavaScript.svg',
                    'dist/img/Bootstrap.svg': 'src/img/Bootstrap.svg',
                    'dist/img/CSS3.svg': 'src/img/CSS3.svg',
                    'dist/img/HTML5.svg': 'src/img/HTML5.svg',
                    'dist/img/jQuery.svg': 'src/img/jQuery.svg',
                    'dist/img/knockout.svg': 'src/img/knockout.svg',
                    'dist/img/github.svg': 'src/img/github.svg',
                    'dist/img/grunt.svg': 'src/img/grunt.svg',
                    'dist/img/firebase.svg': 'src/img/firebase.svg',
                    'dist/img/code.svg': 'src/img/code.svg',
                    'dist/img/flow-tree.svg': 'src/img/flow-tree.svg',
                    'dist/img/colours.svg': 'src/img/colours.svg',
                    'dist/img/surflist_banner.svg': 'src/img/surflist_banner.svg',
                    'dist/img/udacifeeds.svg': 'src/img/udacifeeds.svg',
                    'dist/img/twitter-with-circle.svg': 'src/img/twitter-with-circle.svg',
                    'dist/img/linkedin-with-circle.svg': 'src/img/linkedin-with-circle.svg',
                    'dist/img/github-with-circle.svg': 'src/img/github-with-circle.svg',
                    'dist/img/mail-with-circle.svg': 'src/img/mail-with-circle.svg',
                    'dist/img/publish.svg': 'src/img/publish.svg'
                }
            }
        },
        watch: {
            svgs: {
                files: [
                    'src/img/*.svg',
                    'grunt_tasks/image.js'
                ],
                tasks: [
                    'svgstore',
                    'svgmin'
                ]
            }/*,
            raster: {
                files: ['src/img/jpg/*.jpg', 'src/img/png/*.png'],
                tasks: [
                    'responsive_images',
                    'imageoptim'
                ]
            }*/
        }
    });
};