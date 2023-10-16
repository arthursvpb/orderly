FROM node:18-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @nestjs/cli && npm install

COPY . .

RUN chmod +x ./scripts/start.sh

EXPOSE 8080
EXPOSE 9229

CMD ["./scripts/start.sh"]
