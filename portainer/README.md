docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
https://localhost:9443/


docker run -d \
  -p 5001:5000 \
  --restart=always \
  --name registry \
  registry:2

docker tag mini-node-postgres-app-volume-app:latest localhost:5001/app
docker push localhost:5001/app

