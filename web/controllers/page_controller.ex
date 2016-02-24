defmodule Pande.PageController do
  use Pande.Web, :controller
  alias Pande.User
  # alias Pande.Category
  alias Pande.Article

  def index(conn, _params) do
	users = Repo.all(User)
	IO.inspect users
	art_list = Article.article_list(Repo, 1, 10)
	IO.inspect art_list
    render conn, "index.html", users: users
  end

  def detail(conn, %{"id" => id}) do
  	id = String.to_integer(id)
  
  	render conn, "index.html"
  end
end
