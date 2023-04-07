FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install pnpm@8 -g
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginx:1.23.4 AS runner

COPY nginx.conf nginx.conf
ARG PORT=80
RUN envsubst '${PORT}' < nginx.conf > /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
