FROM node:22.16-alpine3.22
COPY . /personal
WORKDIR /personal

RUN pnpm install
RUN pnpm build

EXPOSE 5000

CMD [ "pnpm", "start", "--host" ]
