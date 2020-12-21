class AddOptionToItem < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :option, :string, default: 'none'
  end
end
