ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Pande.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Pande.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Pande.Repo)

