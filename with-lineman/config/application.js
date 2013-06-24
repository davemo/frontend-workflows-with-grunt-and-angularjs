/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {
  //Override application configuration here. Common examples follow in the comments.

  // API Proxying
  //
  // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
  // port as your lineman development server. By enabling the API proxy and setting the port, all
  // requests for paths that don't match a static asset in ./generated will be forwarded to
  // whatever service might be running on the specified port.
  //
  server: {
    apiProxy: {
      enabled: false,
      host: 'localhost',
      port: 3000
    }
  },

  // configure lineman to load additional angular related npm tasks
  loadNpmTasks: [
    "grunt-angular-templates",
    "grunt-ngmin",
    "grunt-concat-sourcemap",
    "grunt-contrib-copy"
  ],

  // configuration for grunt-angular-templates
  ngtemplates: {
    app: { // "app" matches the name of the angular module defined in app.js
      options: {
        base: "app/templates"
      },
      src: "app/templates/**/*.html",
      // puts angular templates in a different spot than lineman looks for other templates in order not to conflict with the watch process
      dest: "generated/angular/template-cache.js"
    }
  },

  // configuration for grunt-ngmin, this happens _after_ concat once, which is the ngmin ideal :)
  ngmin: {
    js: {
      src: "<%= files.js.concatenated %>",
      dest: "<%= files.js.concatenated %>"
    }
  },

  removeTasks: {
    common: ["concat", "handlebars"]
  },

  // task override configuration
  prependTasks: {
    dist: ["ngmin"],         // ngmin should run in dist only
    common: ["ngtemplates", "concat_sourcemap", "copy"] // ngtemplates runs in dist and dev
  },

  // grunt-angular-templates expects that a module already be defined to inject into
  // this configuration orders the template inclusion _after_ the app level module
  // concat: {
  //   js: {
  //     src: ["<banner:meta.banner>", "<%= files.js.vendor %>", "<%= files.coffee.generated %>", "<%= files.js.app %>", "<%= files.ngtemplates.dest %>"],
  //     separator: ";"
  //   }
  // },

  copy: {
    js: {
      files: [{
        expand: true,
        src: ['app/js/**', 'vendor/js/**'],
        dest: 'generated/js'
      }]
    }
  },

  concat_sourcemap: {
    js: {
      src: ["<banner:meta.banner>", "<%= files.js.vendor %>", "<%= files.template.generated %>", "<%= files.coffee.generated %>", "<%= files.js.app %>", "<%= files.ngtemplates.dest %>"],
      dest: "<%= files.js.concatenated %>"
    },
    spec: {
      src: ["<%= files.js.specHelpers %>", "<%= files.coffee.generatedSpecHelpers %>", "<%= files.js.spec %>", "<%= files.coffee.generatedSpec %>"],
      dest: "<%= files.js.concatenatedSpec %>"
    },
    css: {
      src: ["<%= files.less.generatedVendor %>", "<%= files.sass.generatedVendor %>", "<%= files.css.vendor %>", "<%= files.less.generatedApp %>", "<%= files.sass.generatedApp %>", "<%= files.css.app %>"],
      dest: "<%= files.css.concatenated %>"
    }
  },

  // configures grunt-watch-nospawn to listen for changes to, and recompile angular templates
  watch: {
    ngtemplates: {
      files: "app/templates/**/*.html",
      tasks: ["ngtemplates", "concat_sourcemap"]
    }
  }

});
