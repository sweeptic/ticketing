# original version
# FROM node:14.14.0-alpine
# # ENV CI=true
# WORKDIR /app
# COPY package.json .
# RUN npm install --only=prod
# COPY . .
# CMD ["npm", "run", "dev"]



# enhanced version
FROM node:14.14.0-alpine

WORKDIR /src
# Expose the port 3000
# EXPOSE 3000
# Set the default command to run when a container starts
CMD ["npm", "run", "dev"]
# Install app dependencies
COPY package.json /src
RUN npm install --prefer-offline --no-audit
# Copy your code in the docker image
COPY . /src