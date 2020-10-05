module Base
  module BaseInterface
    include GraphQL::Schema::Interface

    field_class Base::BaseField
  end
end
