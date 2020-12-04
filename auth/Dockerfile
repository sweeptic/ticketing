FROM node:14.14.0-alpine
ENV CI=true
 
WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
 
CMD ["npm", "start"]






# WORKDIR /app
# # Expose the port 3000
# # EXPOSE 3000
# # Set the default command to run when a container starts
# CMD ["npm", "start"]
# # Install app dependencies
# COPY package.json .
# RUN npm install --prefer-offline --no-audit --only=prod
# # Copy your code in the docker image
# COPY . .