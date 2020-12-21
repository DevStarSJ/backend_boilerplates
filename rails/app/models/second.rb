module Second
  def self.table_name_prefix
    db_name = 'second'
    db_name = "#{db_name}_development" if ENV.fetch("DEBUG_PRODUCTION", "0") != "1" && Rails.env.development?
    db_name = "#{db_name}_test" if Rails.env.test?
    "#{db_name}."
  end
end
