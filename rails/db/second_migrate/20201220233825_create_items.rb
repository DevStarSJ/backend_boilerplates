class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.references :user, null: true, index: false

      t.timestamps
    end
  end
end
