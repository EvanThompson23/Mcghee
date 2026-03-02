# Use official Node 20 image
FROM node:20

# Install system dependencies
RUN apt-get update -y && \
    apt-get upgrade
RUN rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN npm install --legacy-peer-deps

# Expose dev server port (change if your app uses another)
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
