module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      debug: {
        src: 'assets/css/style.less',
        dest: 'assets/css/style.css'
      }
    },
    watch: {
      files: ['<%= less.debug.src %>'],
      tasks: ['less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-devtools');
  //css compilation from less and minification
  grunt.registerTask('css', ['less']);

};
