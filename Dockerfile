# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package manifests and install
COPY package*.json ./
RUN npm ci

# TODO: Figure out why using a separate builder causes the build to break.
# Rebuild the source code only when needed
# FROM node:16-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules

# Copy build configuration
COPY tsconfig.json next.config.js \
     next-env.d.ts .babelrc \
     emotion.d.ts \
     ./

# Copy sources
COPY pages ./pages
COPY public ./public
COPY source ./source

# Build
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine
# Use tini to ensure `npm start' receives signals from Docker/Kubernetes.
RUN apk add --no-cache tini
ENTRYPOINT [ "tini", "-g", "--" ]
WORKDIR /app

ENV NODE_ENV production

# Copy build artifacts
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=deps /app/next.config.js ./

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

USER node

EXPOSE 3000

# Set entrypoint to start command
CMD [ "npm", "start" ]
