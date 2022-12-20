FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD [ "npm", "start" ]

### CREAR LA IMAGEN LOCALMENTE
### docker build --tag ifigueroa065/backend-prueba .

### CORRER LA IMAGEN
### docker run -d --name=backend-mia -p 3000:3000 ifigueroa065/backend-prueba

### SUBIR LA IMAGEN A DOCKER HUB
### docker push ifigueroa065/backend-prueba