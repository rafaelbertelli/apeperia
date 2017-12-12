module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/estilos.css": "css/estilos.less", // Caminho dos arquivos
          // "css/layout/media-queries.css": "css/layout/media-queries.less", // Caminho dos arquivos
          // "css/base/normalize.css": "css/base/normalize.less" // Caminho dos arquivos
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'], // Quais arquivos o grunt ficará de olho
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};