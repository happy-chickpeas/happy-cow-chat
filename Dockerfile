FROM node:current-alpine

EXPOSE 19000
EXPOSE 19001

RUN apk add python bash
RUN npm install -g expo-cli

WORKDIR /usr/app
