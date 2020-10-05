module Mutations
  # class BaseMutation < GraphQL::Schema::RelayClassicMutation
  #   argument_class Base::BaseArgument
  #   field_class Base::BaseField
  #   input_object_class Base::BaseInputObject
  #   object_class Base::BaseObject
  # end
  class BaseMutation < GraphQL::Schema::Mutation
    null false
  end
end
