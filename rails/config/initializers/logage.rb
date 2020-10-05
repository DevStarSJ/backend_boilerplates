Rails.application.configure do
  config.lograge.enabled = true
  config.lograge.keep_original_rails_log = true
  config.lograge.formatter = -> (data) {
    # binding.pry
    # filters = Rails.application.config.filter_parameters
    # pf = Rails.application.config.filter_parameters
    # msg = "params : #{pf.filter(data[:params]).to_json}"
    # data[:query] = data[:params].to_s
    # UjetLogger.build_log_data("", "info", application: "api", channel: "http", data: data)
    # data[:params].to_h

    log_data = {}
    log_data[:query] = data[:params]['query'].to_json.gsub('"', '').gsub("\\n", "\n") if data[:params]['query'].present? rescue nil
    log_data[:variables] = data[:params]['variables'].to_json.to_json.gsub('"', '').gsub("\\n", "\n") if data[:params]['variables'].present? rescue nil
    log_data[:status] = data[:status]
    log_data[:controller] = data[:controller]
    log_data[:duration] = data[:duration]
    log_data[:db] = data[:db]
    log_data[:view] = data[:view]
    log_data
  }
  config.lograge.custom_options = lambda do |event|
    {
        params: event.payload[:params].to_h
    }
  end
end

