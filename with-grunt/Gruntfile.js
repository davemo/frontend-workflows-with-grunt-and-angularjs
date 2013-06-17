module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    meta: {
      banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
    },

    clean: {
      dev: {
        src: ['dev']
      },
      dist: {
        src: ['dist']
      }
    },

    concat: {
      js: {
        src: [
          'vendor/js/angular.js',
          'vendor/js/**/*.js',
          'src/js/**/*.js'
        ],
        dest: 'dev/app.js',
        separator: ";"
      },

      css: {
        src: ['vendor/css/**/*.css', 'src/css/**/*.css'],
        dest: 'dev/app.css'
      }
    },

    cssmin: {
      compress: {
        files: {
          "dist/app.min.css" : "<%= concat.css.dest %>"
        }
      }
    },

    uglify: {
      js: {
        src: '<%= concat.js.dest %>',
        dest: 'dist/app.min.js'
      }
    },

    watch: {
      js: {
        files: ["<%= concat.js.src %>"],
        tasks: ["concat:js"]
      },
      css: {
        files: ["<%= concat.css.src %>"],
        tasks: ["concat:css"]
      },
      homepage: {
        files: ["<%= homepage.template %>"],
        tasks: ["homepage:dev"]
      }
    },

    dev_server: {
      base: "dev",
      web: {
        port: 8000
      }
    },

    homepage: {
      template: "src/index.us",
      dev: {
        dest: "dev/index.html",
        context: {
          js: "app.js",
          css: "app.css"
        }
      },
      dist: {
        dest: 'dist/index.html',
        context: {
          js: 'app.min.js',
          css: 'app.min.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadTasks("tasks");

  grunt.registerTask('dev', ['dev_server', 'clean', 'concat', 'homepage:dev', 'watch']);
  grunt.registerTask('dist', ['clean', 'concat', 'uglify', 'cssmin', 'homepage:dist']);
  grunt.registerTask('default', 'dev');
};
