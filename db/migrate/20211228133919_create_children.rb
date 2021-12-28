class CreateChildren < ActiveRecord::Migration[6.0]
  def change
    create_table :children do |t|
      t.string :name
      t.string :surname
      t.string :breakfast
      t.string :souptime
      t.string :sleep
      t.string :secondcourse
      t.string :snack
      t.string :supplies
      t.string :comment
      t.string :dates

      t.timestamps
    end
  end
end
