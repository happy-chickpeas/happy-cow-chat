FROM node:current-alpine

EXPOSE 19000
EXPOSE 19001

RUN apk add python bash
RUN npm install -g expo-cli --unsafe-perm

ADD . /usr/app
WORKDIR /usr/app/app
RUN yarn install

WORKDIR /usr/app

