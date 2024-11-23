class Article < ApplicationRecord
  has_rich_text :body
  belongs_to(:category, optional: true)
  validates(:title, presence: true)
  validates(:body, presence: true)
  validates(:author, presence: true)
  validates(:summary, presence: true)
  validates(:category_id, presence: true)
end
