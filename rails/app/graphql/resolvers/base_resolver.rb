module Resolvers
  class BaseResolver < GraphQL::Schema::Resolver
    argument :id, ID, required: false

    @scope = nil

    def resolve(params = {})
      scope(params)

      id(params)

      options(params)

      results
    end

    def options(params); end

    def id(params)
      @scope = @scope.where(id: params[:id]) if params[:id].present?
    end

    def results
      @scope
    end
  end
end
