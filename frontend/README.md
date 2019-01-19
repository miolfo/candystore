# Frontend

"Simple" frontend for the candystore, started with Create React App.

# Running

`npm start` will run the application in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test` launches the test runner in the interactive watch mode.

`npm run build` builds the app for production to the `build` folder.

# Production

When you want to create an optimized production version of your application
and run it in a docker container, you can use Dockerfile-prod for that purpose.

Build the image with `docker build -f Dockerfile-prod -t <tag-for-production-image> . `
and to test your image, run `docker run -it -p 80:80 --rm <tag-for-production-image>`

# Additional information

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

