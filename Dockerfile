FROM node:12-stretch as builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile && yarn prod

FROM nginx:1.17 

COPY --from=builder /app/dist /usr/share/nginx/html
