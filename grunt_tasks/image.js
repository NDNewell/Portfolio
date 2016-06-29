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
        },
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
                    'foo/img/svg/svg_sprites.svg': 'src/img/svg/*.svg'
                }
            }
        },*/
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
                    'dist/img/jQuery.svg': 'src/img/jQuery.svg'
                }
            }
        },
        watch: {
            svgs: {
                files: 'src/img/*.svg',
                tasks: [
                    //'svgstore',
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