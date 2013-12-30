# Rails Backend

An alternative backend for use with rails. Take a look at the [commit log]() to see the differences in how the client is configured; in a nutshell: csrf configuration is much simpler.

## Prerequisites

- Rails 4
- Ruby 2

- `bundle install`
- `bundle exec rake db:setup`
- `bundle exec rails s` -> starts rails up on `localhost:3000`
- `cd rails-frontend && lineman clean run` -> starts up lineman on `localhost:8000`