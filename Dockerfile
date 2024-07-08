# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Production image
FROM node:18-alpine AS runner

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Install production dependencies
COPY package.json ./

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
