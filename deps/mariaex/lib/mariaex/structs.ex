defmodule Mariaex.Result do
  @moduledoc """
  Result struct returned from any successful query. Its fields are:

    * `command` - An atom of the query command, for example: `:select` or
                  `:insert`;
    * `columns` - The column names;
    * `rows` - The result set. A list of tuples, each tuple corresponding to a
               row, each element in the tuple corresponds to a column;
    * `num_rows` - The number of fetched or affected rows;
  """

  @type t :: %__MODULE__{
    command:  atom,
    columns:  [String.t] | nil,
    rows:     [tuple] | nil,
    last_insert_id: integer,
    num_rows: integer,
    decoder: nil | [tuple] | :done}

  defstruct [:command, :columns, :rows, :last_insert_id, :num_rows, :decoder]
end

defmodule Mariaex.Error do
  defexception [:message, :mariadb]

  def message(e) do
    if kw = e.mariadb do
      msg = "(#{kw[:code]}): #{kw[:message]}"
    end

    msg || e.message
  end
end
