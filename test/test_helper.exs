ExUnit.start
System.cmd "npm", ["test"], into: IO.stream(:stdio, :line)
Mix.Task.run "ecto.create", ["--quiet"]
Mix.Task.run "ecto.migrate", ["--quiet"]
Ecto.Adapters.SQL.begin_test_transaction(DirtNap.Repo)

