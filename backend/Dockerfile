FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start:prod"]

# Near the end of your backend/Dockerfile...

# Copy the start script and make it executable
COPY --chown=node:node ./start.sh ./start.sh
RUN chmod +x ./start.sh

# Old command - comment out or delete
# CMD ["node", "dist/main.js"]

# New command to run the script
CMD ["./start.sh"]
