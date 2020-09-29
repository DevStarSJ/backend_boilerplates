require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
Dotenv::Railtie.load

module Server
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.time_zone = 'Asia/Seoul'
    config.filter_parameters += [:password, :password_confirmation, :current_password]

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options]
      end
    end

    config.middleware.use OliveBranch::Middleware

    console do
      require 'pp'
      require 'open-uri'
      require 'net/http'
    end

    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
      g.template_engine false
      g.decorator false
      g.orm :active_record
    end

    config.active_job.queue_adapter = :sidekiq

    # config.autoload_paths += %W(#{config.root}/app/exceptions)

  end
end
