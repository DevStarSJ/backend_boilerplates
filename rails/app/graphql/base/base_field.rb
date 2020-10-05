module Base
  class BaseField < GraphQL::Schema::Field
    argument_class Base::BaseArgument
  end
end
