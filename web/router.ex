defmodule Pande.Router do
  use Pande.Web, :router

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Pande do
    pipe_through :api # Use the default browser stack
    
    resources "/", PageController
    get "/cate/:id", PageController, :category
    get "/detail/:id", PageController, :detail
  end

  # Other scopes may use custom stacks.
  # scope "/api", Pande do
  #   pipe_through :api
  # end
end
