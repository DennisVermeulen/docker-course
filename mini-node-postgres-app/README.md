# Mini Node Postgres App (v3)

Demo API with Node.js + PostgreSQL. The app automatically creates the visits table on startup, **even if the init script hasn't been run.**

## Endpoints

| Method | Path       | Description                                                                 |
|--------|------------|-----------------------------------------------------------------------------|
| GET    | `/`        | Adds a single row and returns that row along with the total number of visits. |
| GET    | `/visits`  | Returns the last 100 visits (id, timestamp).                                 |

## Quickstart


```bash
cp .env.example .env
docker compose up --build -d

curl http://localhost:3000        # insert + response
curl http://localhost:3000/visits # list
```

Note: Do you already have a db-data volume? Then init.sql will not be executed again.
Want to start fresh? Run docker compose down -v and then up again.

## Optioneel: Poort openzetten voor psql/GUI

```yaml
services:
  db:
    ports:
      - "5432:5432"
```
