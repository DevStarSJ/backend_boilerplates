Raven.configure do |config|
  config.dsn = ENV['SENTRY_DSN']
  # config.environments = %w[develop rc staging production]
  config.current_environment = ENV['BUILD_TARGET']
  config.excluded_exceptions = []

  config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)
  config
end
