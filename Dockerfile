FROM node:20-alpine3.19 AS base


FROM base AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run gcp-build

FROM base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
RUN npx prisma generate
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]

FROM base as dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npx prisma generate
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

