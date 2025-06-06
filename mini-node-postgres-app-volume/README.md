# Mini Node Postgres App Volume

# We started with unamed
docker compose up --build -d

docker volume list

# browser
http://localhost:3000/

docker compose down
docker compose up 

http://localhost:3000/


docker volume list
docker volume prune
docker volume list

# ctrl+c

# We started with named
docker compose up --build -d

docker volume list

docker volume rm mini-node-postgres-app-volume_db-data

docker volume list

# browser
http://localhost:3000/

docker compose down
docker compose up 

http://localhost:3000/

# ctrl+c

# We started with local attach storage
docker compose up --build -d

docker volume list

docker volume rm mini-node-postgres-app-volume_db-data

docker volume list

# browser
http://localhost:3000/

docker compose down
docker compose up 

http://localhost:3000/

# ctrl+c