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

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN npm install http-server -g

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["http-server", "./dist", "-d", "false"]
