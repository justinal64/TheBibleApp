 module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./javascript/**/*.js'],
      options: {
        predef: [ "document", "console", "$", "firebase", "FbAPI", "angular", "app"],
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
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
};