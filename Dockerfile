FROM node:18 AS deps

WORKDIR /opt/app

COPY package.json ./
RUN yarn install 

FROM node:lts-alpine AS builder
ENV NODE_ENV=production
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN yarn build

FROM node:lts-alpine AS runner
ARG X_TAG
WORKDIR /opt/app
ENV NODE_ENV=production

COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]