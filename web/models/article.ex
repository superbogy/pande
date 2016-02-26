defmodule Pande.Article do
	use Pande.Web, :model

	schema "crab_article" do
		field :title, :string
		field :cate_id, :integer
		field :author, :string
		field :content, :string
		field :tags, :string
		field :from_url, :string
		field :is_show, :integer
		field :type, :string
		field :visit, :integer
		field :praise, :integer
		field :create_time, :integer
		field :update_time, Ecto.DateTime
		# timestamp
	end

	@pagesize 10
	def article_list(repo, page \\ 1, pagesize \\ @pagesize) do
		offset = (page - 1) * pagesize
		query = from a in __MODULE__, order_by: [{:desc, a.create_time}], offset: ^offset, limit: ^pagesize
		repo.all(query)
	end

end