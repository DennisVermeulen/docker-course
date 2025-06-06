# Tutorial: Docker + PostgreSQL + Node.js Networking

docker compose up --build -d


# Check on laptop telnet port
telnet localhost 5432
telnet localhost 3000

# Execute sh in container 

docker inspect mini-node-postgres-app-network-app-1 
docker inspect mini-node-postgres-app-network-app-1 | grep Hostname

docker exec -ti mini-node-postgres-app-network-db-1 sh
apk add curl 
# Execute in container container van app
curl http://docker-desktop:3000
psql -U demo
select * from visits; 

docker compose up 
docker compose up -d 
docker compose down

# With ports enabled
# Change docker-compose.yml
docker compose up -d 

# Check on laptop telnet port
telnet localhost 5432
telnet localhost 3000