FROM node:16.5.0-buster-slim
COPY . /personal
WORKDIR /personal

RUN yarn install
RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start" ]
