# In the bad example, any change in your code triggers a full rebuild, including reinstalling dependencies.
docker build -f Dockerfile-bad --platform linux/arm64 -t mini-node:lab1bad .
docker build -f Dockerfile-good --platform linux/arm64 -t mini-node:lab1good .


Add # Test in app.py

docker images 
docker rmi mini-node:lab1bad
docker rmi mini-node:lab1good



Build again 
Build result will only remain in the build cache.

docker buildx build -f Dockerfile-bad --platform linux/arm64 -t mini-node:lab1bad .
docker buildx build -f Dockerfile-good --platform linux/arm64 -t mini-node:lab1good .
                            
docker images 