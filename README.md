# MERN Shopping List

Simple MERN Stack application powered by Node JWT Auth and Redux. This app uses **_Functional Components_** with **_Hooks_** for Redux and React State Management

## Installing app on locally

```bash
# Install node_modules for both backend and client
npm install && npm run client-install

# Run both client and backend servers
npm run dev

# Run backend server
npm run server

# Run client server
npm run client
```

Create `.env` file at the root directory and add following fields in to the file

```bash
MONGO_REMOTE_URI=<YOUR_MONGO_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
```

## Deploying on Heroku

- You must have heroku CLI installed and should registered on heroku

```bash
# Login to heroku
heroku login

# Create app on heroku
heroku create

# Setup the config variables
heroku config:set MONGO_REMOTE_URI=<YOUR_MONGO_URI>
heroku config:set JWT_SECRET=<YOUR_JWT_SECRET>
```

- Follow manual on you app deploy page on heroku and

```bash
# Push to Heroku
git push heroku master
```

## Credits

- [Brad Traversy](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) - [MERN Stack YouTube Series](https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&ab_channel=TraversyMedia)
- [Dev Ed](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q) - [Redux with hooks](https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd)

## Author

- Brad Traversy - [MERN Shopping List (GitHub Repo)](https://www.youtube.com/redirect?v=Efwp65XF0bM&redir_token=QUFFLUhqbE9RVWVSblFMMnd1VFltVEloQkF4OEY2UjlDUXxBQ3Jtc0tuVUx6NFZRQ2YtZUZlNmp4Um55X2p1Z1BEZi1MbzA3STZUSWtGT2hqRFgzZFMxel9FQTZseVJXQUU2WUZRem81M1hDNGNTcEVOZ0o1WWc3LXVrTGRCUnl3M1g5amhvVk8yOW8tQkRkMk1vOExuNHNmRQ%3D%3D&event=video_description&q=https%3A%2F%2Fgithub.com%2Fbradtraversy%2Fmern_shopping_list)
