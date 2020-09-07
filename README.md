# MERN Shopping List

Simple MERN Stack application powered by Node JWT Auth and Redux. This app uses **_Functional Components_** with **_Hooks_** for Redux and React State Management

## Installing app on locally

- `npm install && npm client-install`
- Create `.env` file at the root directory and add fields in to the file `MONGO_REMOTE_URI=<YOUR_MONGO_URI>` & `JWT_SECRET=<YOUR_JWT_SECRET>`

## Deploying to Heroku

- `heroku login`
- `heroku create`
- `heroku config:set MONGO_REMOTE_URI=<YOUR_MONGO_URI>`
- `heroku config:set JWT_SECRET=<YOUR_JWT_SECRET>`
- `git push heroku master`

## Credits

- [Brad Traversy](https://github.com/bradtraversy) - [MERN Stack YouTube Series](https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&ab_channel=TraversyMedia)
- [Dev Ed](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q) - [Redux with hooks](https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd)
