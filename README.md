# Candystore

Purpose of this application is to enable small organizations to keep
their own kiosk and help them keep track of users and transactions that
have happened in their system.

## Design

We try to create a modern microservice architecture that would be easy
to maintain and update in the future. This will be accomplished with 
docker compose and scripts so that everything needed is included in the
repository to get development up and running. 

Functionality is divided in three services. Database (postgresql) is one
service, backend that handles the database connections and transactions and
frontend that can easily be run on simple devices (like raspberry pi).
Frontend service is possible to run on multiple devices with single backend
and database service.

Database contains information on the products and user information as well as
history data and payment options.

## Usage 

Default operation of the application works so that user inputs their ID and
the amount of money that their account will be charged. The ID can be specified
in the database payment options table. The transaction cost can also be fetched
from the product database with barcode scanner.

## Development

Before starting development, create a .env file (from .env-template), and fill 
in the required info. Db-service will initialize postgres with the specified 
settings. After .env file exists, you can run the environment with `docker-compose up`.

You might want to run `docker-compose up -d --build` to force docker-compose to
rebuild images and run them in background. This makes it sure that all changes in
Dockerfiles are taken into images.

### TODO

Next steps to improve and continue working:
- read API-key from the secrets file
- Escaping user inputs in SQL queries
