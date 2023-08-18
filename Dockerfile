# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the server files to the working directory
COPY . .

# Expose the port that the app runs on
EXPOSE 3001

# Define the command to run the server
CMD ["node", "app.js"]
