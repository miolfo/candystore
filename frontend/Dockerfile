FROM node:9.11.1

RUN mkdir -p /app
WORKDIR /app

# add node_modules/.bin to path
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@1.1.4 -g

CMD ["npm", "start"]