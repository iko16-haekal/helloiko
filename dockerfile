# Build Stage
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Production Stage
FROM node:16-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]