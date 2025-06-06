# Mini Node Postgres App

docker buildx build --platform linux/amd64 -t mini-node:latest ./
# To push result image into registry use --push or to load image into docker use --load 
docker images
                              |
docker build --platform linux/amd64 -t mini-node:latest ./

docker images 

docker build --no-cache --platform linux/amd64 -t mini-node:latest ./
docker build --platform linux/amd64 -t mini-node:latest .
#check images docker-desktop
docker build --platform linux/amd64,linux/arm64 -t mini-node:latest --push .

docker run -d -p 3000:3000 mini-node:latest
docker rm -f b2874b438636

#Terminal
docker run -d -p 3000:3000 --name mini-running mini-node:latest
docker exec -it mini-running sh

docker stop mini-running
docker ps -a
docker ps -a -f status=exited
docker rm -f $(docker ps -a -f status=exited -q)

docker start mini-running
docker logs -f mini-running
docker logs mini-running
docker logs -f -t mini-running
docker logs -f -t -n 10 mini-running

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)






## Snelstart

```bash
cp .env.example .env
docker compose up --build -d

curl http://localhost:3000        # insert + response
curl http://localhost:3000/visits # lijst
```

> **Let op**: Heb je eerder al een volume `db-data`? Dan wordt `init.sql` niet opnieuw uitgevoerd.  
> Wil je schoon beginnen: `docker compose down -v` en dan weer `up`.

## Optioneel: Poort openzetten voor psql/GUI

```yaml
services:
  db:
    ports:
      - "5432:5432"
```
