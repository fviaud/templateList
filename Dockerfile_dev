FROM node:latest

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .

EXPOSE 3000

ENV PATH=$PATH:/app/node_modules/.bin
CMD ["yarn", "dev"]



