# Rails Backend using lineman-rails and rails-lineman

An alternative backend for use with rails. Take a look at the [lineman-plus-rails](https://github.com/searls/lineman-plus-rails) to see the differences in how the client is configured.

## Prerequisites

- Rails 4
- Ruby 2

- `bundle install`
- `bundle exec rake db:setup`
- `bundle exec rails s` -> starts rails up on `localhost:3000`
- `cd lineman-frontend && npm install && lineman run` -> starts up lineman on `localhost:8000`