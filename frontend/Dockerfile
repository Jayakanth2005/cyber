# -------- Build Stage --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Set environment variable for production build
ENV NODE_ENV=production

# Run Next.js build with Turbopack
RUN npm run build

# -------- Production Stage --------
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
