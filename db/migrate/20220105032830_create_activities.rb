class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :breakfast
      t.string :soup
      t.string :second
      t.string :snack
      t.string :sleep
      t.integer :pee
      t.integer :poo
      t.string :supplies
      t.string :comment
      t.references :child, null: false, foreign_key: true

      t.timestamps
    end
  end
end
