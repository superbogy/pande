use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :pande, Pande.Endpoint,
  secret_key_base: "JDUfUwILhMF2afD+OcpwLTKKXHBYkSRqgqoJOOWDLiw+HQnH+hGLmJdKtlK1NzF7"

# Configure your database
config :pande, Pande.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "pande_prod",
  pool_size: 20
