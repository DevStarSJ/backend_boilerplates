module Resolvers
  class UserResolver < BaseResolver
    type [Types::UserType], null: true

    def scope(params = {})
      @scope = object&.respond_to?(:users) ? object.users : User.all
    end
  end
end
