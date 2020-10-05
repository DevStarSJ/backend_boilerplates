class ServerSchema < GraphQL::Schema
  mutation MutationType
  query QueryType

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections

  use GraphQL::Batch
  use(GraphQL::Tracing::NewRelicTracing, set_transaction_name: true)

  enable_preloading
end

ServerSchema.graphql_definition
