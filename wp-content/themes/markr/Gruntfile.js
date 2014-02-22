module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Set project info
         */
        project: {
            css: ['css'],
            sass: ['css/sass'],
            images: ['img'],
            fonts: ['fonts'],
            js: ['js']
        },

        /**
         * Project banner
         * Dynamically appended to CSS/JS files
         * Inherits text from package.json
         */
        tag: {
            banner: '/*!\n' +
                ' * <%= pkg.title %>\n' +
                ' * <%= pkg.description %>\n' +
                ' * <%= pkg.url %>\n' +
                ' * @author <%= pkg.author %> <<%= pkg.email %>>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
                ' */\n'
        },

        /**
         * Build bower components
         * https://github.com/yatskevich/grunt-bower-task
         */
        bower: {
            install: {
                options: {
                    install: true,
                    copy: false
                }
            }
        },

        /**
         * Minify PNG and JPEG images.
         * https://github.com/gruntjs/grunt-contrib-imagemin
         */
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= project.images %>/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= project.images %>/'
                }]
            }
        },

        /**
         * Compass
         * Compile Sass to CSS using Compass
         * https://github.com/gruntjs/grunt-contrib-compass
         */
        compass: {
            dist: {
                options: {
                    basePath: '<%= project.app %>',
                    sassDir: '<%= project.sass %>',
                    cssDir: '<%= project.css %>',
                    imagesDir: '<%= project.images %>',
                    fontsDir: '<%= project.fonts %>',
                    httpGeneratedImagesPath: '../img',
                    outputStyle: 'expanded',
                    noLineComments: true,
                    require: "breakpoint",
                    raw: 'preferred_syntax = :scss\n'
                }
            }
        },

        /**
         * CSSMin
         * CSS minification
         * https://github.com/gruntjs/grunt-contrib-cssmin
         */
        cssmin: {
            add_banner: {
                options: {
                    banner: '<%= tag.banner %>',
                    keepSpecialComments: 0
                },
                files: {
                    '<%= project.css %>/lte-ie8.min.css': ['<%= project.css %>/lte-ie8.css'],
                    '<%= project.css %>/print.min.css': ['<%= project.css %>/print.css'],
                    '<%= project.css %>/style.min.css': ['<%= project.css %>/style.css']
                }
            }
        },

        /**
         * Uglify (minify) JavaScript files
         * https://github.com/gruntjs/grunt-contrib-uglify
         * Compresses and minifies all JavaScript files into one
         */
        uglify: {
            options: {
                banner: '<%= tag.banner %>'
            },
            dist: {
                files: {
                    '<%= project.js %>/scripts.min.js': ['<%= project.js %>/vendors/*', '<%= project.js %>/scripts.js']
                }
            }
        },

        /**
         * Autoprefixer
         * https://github.com/nDmitry/grunt-autoprefixer
         * Autoprefixer parses CSS and adds vendor-prefixed
         * CSS properties using the Can I Use database.
         */
        autoprefixer: {
            options: {
                browsers: 'last 2 versions'
            },
            single_file: {
                src: '<%= project.css %>/style.css'
            },
            single_file: {
                src: '<%= project.css %>/lte-ie8.css'
            },
            single_file: {
                src: '<%= project.css %>/print.css'
            },
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         * Watching development files and run concat/compile tasks
         * Livereload the browser once complete
         */
        watch: {
            js: {
                files: ['<%= project.js %>/vendors/*', '<%= project.js %>/scripts.js'],
                tasks: ['uglify']
            },
            css: {
                files: '<%= project.sass %>/*',
                tasks: ['compass', 'cssmin']
            },
            images: {
                files: ['<%= project.images %>/*'],
                tasks: ['smushit']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    '<%= project.css %>/style.min.css'
                ]
            }
        }
    });

    /**
     * Dynamically load npm tasks
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.registerTask('default', ['bower', 'uglify', 'compass', 'autoprefixer', 'cssmin']);

    /**
     * Image Optimization task
     * Run `grunt optim` on the command line
     */
    grunt.registerTask('optim', ['imagemin']);

};