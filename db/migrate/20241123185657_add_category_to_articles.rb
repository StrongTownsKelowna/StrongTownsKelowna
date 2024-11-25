class AddCategoryToArticles < ActiveRecord::Migration[8.0]
  def change
    add_reference :articles, :category, null: false, foreign_key: true, null: true
  end
end