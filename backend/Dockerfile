# This dockerfile will be used when invoking
# docker-compose build or up
FROM clojure:lein-2.8.1-alpine
RUN mkdir -p /app
WORKDIR /app
RUN apk add --no-cache postgresql-client curl
COPY project.clj /app
RUN lein deps
CMD ["lein", "ring", "server-headless"]