# A frontend workflow using Grunt

http://www.youtube.com/watch?v=fSAgFxjFSqY

In the screencast we walked through some of the basic things needed to setup a simple workflow with Grunt. This result is complete enough to work for the most basic of projects, but lacks a few of the features we need to really make the most of a workflow that takes advantage of all of the features in an AngularJS application.

This simple workflow includes:

* a `dev` grunt task for development
* a `dist` grunt task for bundling things up for production
* a `dev_server` custom task that utilizes [expressjs](http://expressjs.com/)
* a `homepage` custom task that generates HTML and injects static assets in a simple way
* configuration for grunt default tasks `concat`, `cssmin`, `uglify`, and `watch`

