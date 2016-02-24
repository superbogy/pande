defmodule Pande.User do
	use Pande.Web, :model


	@doc """
	Creates a changeset based on the `model` and `params`.

	If no params are provided, an invalid changeset is returned
	with no validation performed.
	  """
	schema "crab_user" do
		field :password, :string
		field :username, :string
		field :email, :string
		field :phone, :integer
		# field :last_login, :integer
	end

	@option_fields ~w(phone)

	def changeSet(model, params \\ nil) do
		model
		|>cast(params, ~w(username, password, email), @option_fields)
		|>validate_length(:username, min: 6)
		|>validate_length(:password, min: 6)
	end
end