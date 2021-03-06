use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :dirt_nap, DirtNap.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :dirt_nap, DirtNap.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "mandible",
  password: "",
  database: "dirt_nap_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
