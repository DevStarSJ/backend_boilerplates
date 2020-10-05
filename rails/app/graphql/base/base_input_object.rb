module Base
  class BaseInputObject < GraphQL::Schema::InputObject
    argument_class Base::BaseArgument
  end
end
