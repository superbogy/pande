defmodule Pande.PageView do
  use Pande.Web, :view

  def render("index.json", %{post: post}) do
      post
   end



end
