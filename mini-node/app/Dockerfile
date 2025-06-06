FROM node:20-alpine

# Werkmap binnen de container
WORKDIR /app

# Installeer dependencies
COPY package.json ./
RUN npm install

# Kopieer de rest van de code
COPY . .

# Expose poort 3000
EXPOSE 3000

# Start de app
CMD ["npm", "start"]
