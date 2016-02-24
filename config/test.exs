use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :pande, Pande.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :pande, Pande.Repo,
  adapter: Ecto.Adapters.MySQL,
  username: "root",
  password: "123456",
  database: "crab",
  hostname: "localhost",
  pool_size: 10