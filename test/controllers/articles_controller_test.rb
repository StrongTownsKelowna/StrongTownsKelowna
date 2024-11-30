require "test_helper"

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @article = articles(:one)
    sign_in users(:brian)
    @rich_text =  action_text_rich_texts(:one)
    @category = categories(:one)
  end

  test "should get index" do
    sign_out(:brian)
    get articles_url
    assert_response :success
  end

  test "should get new" do
    get new_article_url
    assert_response :success
  end

  test "should create article" do
    assert_difference("Article.count") do
      @new_article = {
        title: @article.title,
        body: @rich_text,
        author: @article.author,
        summary: @article.summary,
        category_id: @category.id
      }
      post articles_url, params: { article: @new_article }
    end

    assert_redirected_to article_url(Article.last)
  end

  test "should show article" do
    sign_out(:brian)
    get article_url(@article)
    assert_response :success
  end

  test "should get edit" do
    get edit_article_url(@article)
    assert_response :success
  end

  test "should update article" do
    patch article_url(@article), params: {
      article: {
        title: @article.title,
        body: @rich_text,
        author: @article.author,
        summary: @article.summary,
        category_id: @category.id
      }
    }
    assert_redirected_to article_url(@article)
  end

  test "should destroy article" do
    assert_difference("Article.count", -1) do
      delete article_url(@article)
    end

    assert_redirected_to articles_url
  end
end
