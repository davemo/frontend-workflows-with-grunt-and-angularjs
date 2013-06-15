# A frontend workflow using Lineman

Todo: link the screencast

This is the result of using [Lineman](http://www.linemanjs.com), a tool that utilizes Grunt, to craft our workflow to create a "First Class" client-side application. Lineman provides some quality-of-life improvements over the vanilla grunt configuration we created in the "Frontend Workflows with Angular JS" screencast, including:

* a way to proxy api requests to our laravel backend
* a set of sensible default tasks
* a way to extend those defaults simply and easily
* some convention about where files go and how tasks are executed
* preconfigured grunt plugins ngmin, and grunt-angular-templates to minify and expand angular dependency declarations to their fully qualified format
* predefined command-line-interface with `run`, `build`, and `spec` commands
