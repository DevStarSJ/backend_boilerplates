class AddCatToItem < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :cat, :string, default: 'kit', index: true
  end
end
