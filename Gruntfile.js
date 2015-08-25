module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: ['movies/module.js', 'movies/popular/controller_popular.js', 'movies/popular/service_popular.js', 'movies/upcoming/service_upcoming.js', 'movies/upcoming/controller_upcoming.js', 'movies/route.js'],
        dest: 'js/app.js'
      }
    },
    watch: {
      concat: {
        files: ['movies/module.js', 'movies/popular/controller_popular.js', 'movies/popular/service_popular.js', 'movies/upcoming/service_upcoming.js', 'movies/upcoming/controller_upcoming.js', 'movies/route.js'],
        tasks: ['concat']
      }
    },
    serve: {
        options: {
            port: 9000
        },
        path: '/home/snikolic/StefanEdukacija/FETuts/Movies'
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  // Default task(s).
  grunt.registerTask('default', ['watch']);

};