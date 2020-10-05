module ErrorHandling
  extend ActiveSupport::Concern

  included do
    rescue_from Exception do |error|
      log(error)
      raise error
    end

    rescue_from ActiveRecord::RecordNotFound do |error|
      render_error(error, :not_fount)
    end

    rescue_from UnauthorizedException do |error|
      render_error(error, :unauthorized)
    end

    rescue_from ActionController::BadRequest do |error|
      render_error(error, :bad_request)
    end

    rescue_from ActiveRecord::RecordInvalid do |error|
      validation_error(error.record.errors)
    end

    private

    def render_error(error, status)
      render json: {
        status: status,
        error_message: error.message
      }, status: status
    end

    def validation_error(errors)
      render json: {
        errors: errors
      }, status: :ok
    end

    def log(error)
      Rails.logger.error error.backtrace.join('\n')
    end
  end
end
