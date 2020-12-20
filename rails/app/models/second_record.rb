class SecondRecord < ApplicationRecord
  self.abstract_class = true
  connects_to database: { writing: :second }
end
