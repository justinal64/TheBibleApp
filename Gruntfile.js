module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    jshint: {
      files: ['./javascript/**/*.js'],
      options: {
        predef: [ "document", "console", "$", "firebase", "FbAPI", "app", "angular"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
     sass: {
      dist: {
        files: {
          './styles/main.css': './sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./javascript/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd:"./",
            src: [
              "index.html",
              "javascript/**/*.js",
              "font/**/*.ttf",
              "img/gif/*.gif",
              "img/kidsbible/*.***",
              "styles/**/*.css",
              "partials/**/*.html",
              "node_modules/angular-material/angular-material.min.css",
              "node_modules/materialize-css/dist/css/materialize.min.css",
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/angular/angular.min.js",
              "node_modules/angular-animate/angular-animate.min.js",
              "node_modules/materialize-css/dist/js/materialize.min.js",
              "node_modules/angular-aria/angular-aria.min.js",
              "node_modules/angular-material/angular-material.min.js",
              "node_modules/angular-route/angular-route.min.js"
            ],
            dest: "./public/"
        }
        ]
      }
    }
  });

  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('deploy', ['copy']);
};