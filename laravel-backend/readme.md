## Laravel Backend

This is the backend from [End-to-End with Angular JS](https://github.com/davemo/end-to-end-with-angularjs), but stripped of any of the client-side assets which have been moved into both `with-grunt` and `with-lineman` directories and effectively separated client and server codebases. (I've located them within a single repository so you can just download a single package).

If you need instructions on how to get up and running with Laravel 4 on a Mac, you can find them in the "End-to-End with Angular JS" [README](https://github.com/davemo/end-to-end-with-angularjs) file.

## Running without NGINX

Since the built in webserver case-insensitive headers issue was fixed in PHP core we can skip using nginx and simply run the laravel-backend with the following command: `php artisan serve --port=3000 --host=127.0.0.1`, this allows our proxied request from the lineman or grunt front-end to flow through correctly.
