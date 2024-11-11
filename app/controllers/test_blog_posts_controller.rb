class TestBlogPostsController < ApplicationController
  before_action :authenticate_user!, except: [ :show, :index ]
  before_action :set_test_blog_post, only: [ :show, :edit, :update, :destroy ]
  def index
    @test_blog_posts = TestBlogPost.all
  end

  def show
  end
  def new
    @test_blog_post = TestBlogPost.new
  end
  def create
    @test_blog_post = TestBlogPost.new(post_params)
    if @test_blog_post.save()
      redirect_to @test_blog_post
    else
      render :new, status: :unprocessable_entity
    end
  end
  def edit
  end
  def update
    if @test_blog_post.update(post_params)
      redirect_to @test_blog_post
    else
      render :new, status: :unprocessable_entity
    end
  end
  def destroy
    @test_blog_post.destroy()
    redirect_to test_blog_posts_path
  end

  private

  def post_params
    params.require(:test_blog_post).permit(:title, :body)
  end
  def set_test_blog_post
    @test_blog_post = TestBlogPost.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to test_blog_posts_path
  end
end
