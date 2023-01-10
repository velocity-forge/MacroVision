ARG NODE_VERSION="16"

FROM node:${NODE_VERSION}-alpine AS artifact
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package manifests and install
COPY . .
RUN if test -e package-lock.json; then npm ci; else npm i; fi

# Build nextJS
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS artifact-storybook
WORKDIR /app

COPY --from=artifact ["/app", "./"]

# Build Storybook
RUN npm run build-storybook

RUN mv /app/storybook-static /app/public/storybook

# Adding artifact tobe the default step to run
FROM artifact