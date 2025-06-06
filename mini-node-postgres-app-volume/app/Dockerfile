FROM node:20-alpine AS base
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev --no-audit --progress=false

COPY index.js ./
EXPOSE 3000
CMD ["node", "index.js"]
