source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'

# Use sqlite3 as the database for Active Record
group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'sprockets', '< 3'
gem 'angular-rails-templates'
gem 'responders', '~> 2.0'

# You may have noticed that we recieved a failed 422 Unprocessable Entity 
# response from Rails. This is because Rails has csrf protection enabled 
# by default, and Angular isn't sending the token to Rails when we're 
# trying to add a post. Thankfully $http supports sending csrf tokens out 
# of the box as a X-XSRF-TOKEN header, as long as it detects a XSRF-TOKEN 
# cookie with a token in it. There's also happens to be a gem called 
# angular_rails_csrf which we'll add to our project which will have 
# Rails automatically send the cookie to Angular and also validate the 
# header when Angular is submitting data, that way all we need to do is 
# 	drop in the gem and everything should just work
gem 'angular_rails_csrf'

gem 'devise', '~> 3.4.0'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

