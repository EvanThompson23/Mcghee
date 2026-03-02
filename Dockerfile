# -------- Build Stage --------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps (pnpm lock present)
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build

# -------- Production Stage --------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --prod

# Copy compiled output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
