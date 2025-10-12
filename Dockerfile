# Use the official Node.js 20 image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Add this line to fix execute permissions
RUN chmod +x -R ./node_modules/.bin

# Copy the rest of your application code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# The command to run the development server
CMD ["npm", "run", "dev"]