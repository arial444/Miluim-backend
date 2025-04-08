FROM node:16

# Create and change to the app directory
WORKDIR /idfService

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install Sails.js dependencies
RUN npm install -g sails

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port on which your app will run
EXPOSE 5000

# Command to run the application
CMD [ "sails", "lift" ]