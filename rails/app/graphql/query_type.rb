class QueryType < Base::BaseObject
  field :users, resolver: Resolvers::UserResolver
end
