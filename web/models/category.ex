defmodule Pande.Category do

	use Pande.Web, :model
  
  @derive {Poison.Encoder, only: [:id, :name, :tags]}
	schema "category" do
		field :name, :string
		field :pid, :integer
	end



end
