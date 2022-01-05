class RemoveColumnsFromChildren < ActiveRecord::Migration[6.0]
  def change
    remove_column :children, :breakfast
    remove_column :children, :souptime
    remove_column :children, :sleep
    remove_column :children, :secondcourse
    remove_column :children, :snack
    remove_column :children, :supplies
    remove_column :children, :comment
    remove_column :children, :dates
  end
end
