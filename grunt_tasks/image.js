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
            }/*,
            dist: {
                files: {
                    'dist/img/publish.svg': 'src/img/publish.svg'
                }
            }*/
        },
        watch: {
            svgs: {
                files: [
                    'src/img/*.svg',
                    'grunt_tasks/image.js'
                ],
                tasks: [
                    'svgstore',
                    //'svgmin'
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
