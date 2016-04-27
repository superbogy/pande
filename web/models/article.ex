defmodule Pande.Article do
	use Pande.Web, :model

  @derive {Poison.Encoder, only: [:title, :tags,:cate_id, :tags, :from_url, :type, :click_num, :create_time]}
	schema "article" do
		field :title, :string
		field :cate_id, :integer
		field :author, :string
		field :content, :string
		field :tags, :string
		field :from_url, :string
		field :is_show, :integer
		field :type, :string
		field :click_num, :integer
		field :praise, :integer
		field :create_time, :integer
		field :update_time, Ecto.DateTime
		# timestamp
	end

  def getTimeLine(query \\ __MODULE__) do
    from a in query,
      where: a.id < 10,
#      group_by: date_add(a.update_time, -1 , "week"),
      group_by: fragment("monthname", a.update_time),
      select: {count(a.id)}
   end
end
