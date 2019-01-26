FROM node:10.15.0

RUN mkdir -p /app
WORKDIR /app

# add node_modules/.bin to path
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@2.1.3 -g

CMD ["npm", "start"]