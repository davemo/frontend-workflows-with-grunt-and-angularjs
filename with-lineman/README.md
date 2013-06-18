# A frontend workflow using Lineman



This is the result of using [Lineman](http://www.linemanjs.com), a tool that utilizes Grunt, to craft our workflow to create a "First Class" client-side application. Lineman provides some quality-of-life improvements over the vanilla grunt configuration we created in the [Frontend Workflows with Grunt and Angular JS](http://www.youtube.com/watch?v=fSAgFxjFSqY) screencast, including:

* a way to proxy api requests to our [Laravel](https://github.com/davemo/frontend-workflows-with-grunt-and-angularjs/tree/master/laravel-backend) backend
* a set of sensible [default grunt tasks](https://github.com/testdouble/lineman/blob/master/config/application.coffee#L11)
* a way to extend those defaults [simply and easily](https://github.com/davemo/frontend-workflows-with-grunt-and-angularjs/blob/master/with-lineman/config/application.js)
* some convention about [where files go](https://github.com/davemo/frontend-workflows-with-grunt-and-angularjs/blob/master/with-lineman/config/files.js#L19) and [how tasks are executed](https://github.com/davemo/frontend-workflows-with-grunt-and-angularjs/blob/master/with-lineman/config/application.js#L27)
* preconfigured grunt plugins `ngmin` to minify and expand angular dependency declarations to their fully qualified format, and `grunt-angular-templates` to precompile our template files.
* predefined command-line-interface with `run`, `build`, and `spec` commands

# Configuring Laravel to accept API requests from the Lineman Proxy

In the screencast, I discussed the fact that Laravel 4 utilizes the built in web server that comes bundled with PHP 5.4. Unfortunately this web server has a bug that doesn't respect case-insensitivity on HTTP request header names, and node-http-proxy (which lineman uses) sends lowercase headers. This causes Laravel to issue a double `set-cookie` header, and create a new session on each request which is undesirable when working with separate client/server codebases. If you are interested in this bug, I filed a [bug report](https://github.com/laravel/framework/issues/1639) that details the problem.

To fix this, I recommend using plain old `apache` or `nginx` to serve your laravel app. I've included the [`nginx.conf`](https://github.com/davemo/frontend-workflows-with-grunt-and-angularjs/blob/master/with-lineman/nginx.config) file in this repository for reference. If you want to setup nginx on Mac OS you'll need to install it along with `php-fpm` which nginx uses to process .php files; you can find out more details on this here: http://mwholt.blogspot.ca/2013/03/install-nginxphpmysql-on-os-x-mountain.html

**Note:** this bug doesn't occur in other popular web servers, it seems to be exclusive to the built-in webserver in PHP 5.4.
