# MBI Frontend

This project is my submission for the **Full Stack Engineering Take Home Coding Challenge**.
This project uses [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4, NPM version 8.1.0, and NodeJS version 16.13.0.

I created separate components for the "generate" and "verify" sections.

For testing locally, first run `ng install` to install the dependencies, then `ng serve` to run the frontend. Note that Heroku will run server.js which uses expressjs to serve the angular project (because of the "start" script defined in the package.json).

Please see the readme in the Python Flask project for instruction on getting the server backend running. Once that is working, the Angular project should communicate with the backend endpoints.

You can view the Angular app deployment on Heroku [here](https://mbi-frontend.herokuapp.com/).
