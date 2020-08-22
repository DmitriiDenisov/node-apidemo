FROM node:10.17.0-alpine

COPY ./ /

RUN npm install

ENV NODE_ENV development
ENV APP_PREFIX ''
ENV APP_PORT 4500
ENV APP_NAME dataapi

EXPOSE 4500

CMD [ "npm", "run", "dev" ]
