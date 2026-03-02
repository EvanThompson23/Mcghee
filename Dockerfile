# Use official Node 20 image
FROM node:20

# Install system dependencies
RUN apt-get update -y && \
    apt-get install -y git curl && \
    
# Set working directory
WORKDIR /app

# Install dependencies
RUN npm install --legacy-peer-deps

# Expose dev server port (change if your app uses another)
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev", "--", "-H", "192.100.1.12"]
