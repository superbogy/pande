defmodule Pande.PageController do
  use Pande.Web, :controller
  alias Pande.User
  alias Pande.Category
  alias Pande.Article

  def index(conn, params) do
    IO.inspect params
    IO.inspect "B=========D"

    page = Dict.get(params, "page", "1") |> String.to_integer;
    
    IO.inspect page
    pagesize = 10;
    offset = (page - 1) * pagesize
    art_list = (from a in Article,
     order_by: a.update_time,
     limit: ^pagesize,
     offset: ^offset) |> Repo.all
    cates = Repo.all(Category)
    for art <- art_list do
      if art.tags do
        String.split(art.tags, " ")
      end
    end
    times = Article.getTimeLine
    times = Repo.all(times)

    archive = []
    IO.inspect times
#    for time <- times do
#      IO.inspect time
#      date = elem time,  0
#      count = elem time, 1
#      if (is_tuple(time)) do
#        archive = List.insert_at(archive, -1, %{date: date, count:  count})
#      end
#      IO.inspect archive
#
#    end

    json conn, art_list
    json conn, %{art: art_list, cates: cates}
  end

  def detail(conn, %{"id" => id}) do
  	id = String.to_integer(id)
    detail = Repo.get(Article, id)
    cates = Repo.get(Category)
    timeLine = Article.getTimeLine
    
  end
  
  def category(conn, params) do
    IO.inspect params
    page = Dict.get(params, "page", "1") |> String.to_integer;
    pagesize = 10;
    offset = (page - 1) * pagesize
    art_list = Repo.all(from a in Article, order_by: a.update_time, limit: ^pagesize, offset: ^offset)
    cates = Repo.all(Category)
    for art <- art_list do
      if art.tags do
        String.split(art.tags, " ")
      end
    end
    times = Article.getTimeLine()
    IO.inspect Repo.all(times)

    json conn, %{art: art_list, cates: cates}
  end


end

