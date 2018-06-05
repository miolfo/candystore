FROM clojure:lein-2.8.1
RUN mkdir -p /app
WORKDIR /app
COPY project.clj /app
RUN lein deps
CMD ["lein", "ring", "server-headless"]