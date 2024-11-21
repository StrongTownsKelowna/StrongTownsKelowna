class AddAuthorToArticles < ActiveRecord::Migration[8.0]
  def change
    add_column :articles, :author, :text
    add_column :articles, :summary, :text
  end
end
