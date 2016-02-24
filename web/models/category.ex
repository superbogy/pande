defmodule Pande.Category do
	use Pande.Web, :model

	schema "crab_category" do
		field :name, :string
		field :pid, :integer
	end



end