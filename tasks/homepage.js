module.exports = function(grunt) {
  var _ = grunt.util._;
  grunt.registerTask("homepage", "generates a home page html file for the project dev/dist directory", function(target) {
    var context, source, targetConfig, template;
    target = target || "dist";
    this.requiresConfig("homepage.template");
    this.requiresConfig("homepage." + target);
    template = grunt.config.get("homepage.template");
    targetConfig = grunt.config.get("homepage." + target);
    source = grunt.file.read(template);
    context = _(grunt.config.get()).extend(targetConfig.context);
    grunt.file.write(targetConfig.dest, _(source).template(context));
    grunt.log.writeln("Homepage HTML written to '" + targetConfig.dest + "'");
  });
};
