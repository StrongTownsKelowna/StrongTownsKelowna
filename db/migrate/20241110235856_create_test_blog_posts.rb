class CreateTestBlogPosts < ActiveRecord::Migration[8.0]
  def change
    create_table :test_blog_posts do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end