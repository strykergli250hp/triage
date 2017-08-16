##
## Production Deploy Image - 
##   Contains all tools and libraries needed to run the application.
##
# Base dockerfile repo: https://github.disney.com/WDPR-RA-UI/wdpr-docker-node 
FROM docker-reg.cloud.corp.dig.com:5000/wdpr/node:0.10-prod
MAINTAINER WDPR Reference Architecture 

# Expose PORT
EXPOSE 8626

# Set Current Working Directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Execute the command when container starts
CMD ["npm","run","dist-start"];

## Copy dist folder to application 
COPY dist/package.json /app/
RUN npm config set registry http://npm.cloud.corp.dig.com/ --global && \
npm install
COPY dist /app
