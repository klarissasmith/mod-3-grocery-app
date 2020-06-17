class CreateCartProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_products do |t|
      t.integer :quantity
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
