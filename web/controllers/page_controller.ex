defmodule Pande.PageController do
  use Pande.Web, :controller
  alias Pande.User
  alias Pande.Category
  alias Pande.Article

  def index(conn, _params) do
	art_list = Article.article_list(Repo, 1, 10)
	IO.inspect art_list
	cates = Repo.all(Category)
	IO.inspect cates
	for art <- art_list do
		if art.tags do
			IO.inspect art.tags
			# 
			tags = String.split(art.tags, " ")
			IO.inspect tags
	
			IO.inspect Dict.size(tags)
		end

	end

    render conn, "home.html",  art_list: art_list, category: cates
  end

  def detail(conn, %{"id" => id}) do
  	id = String.to_integer(id)
  
  	render conn, "index.html"
  end
end

