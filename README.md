# DevConnector
A social network to connect developers, built with Node.js, Express, React+Redux and MongoDB.
This repo uses Bootstrap for styling, [there's anoter version with Material-UI](https://github.com/hrafaelveloso/devconnector-material-ui)

## How to run the project locally

* Clone this project:
```
git clone https://github.com/hrafaelveloso/devconnector.git
```

* Create a file called `keys_dev.js` inside the `config` folder and replace the values:
```
module.exports = {
  mongoURI:
    "mongodb://<user>:<password>@<database_path>",
  secretOrKey: "<secretKey>"
};
```

* Install all backend and frontend dependencies. In the root folder:
```
npm install (backend dependencies)
npm run client-install (frontend dependencies)
```

* Run both backend and frontend:
```
npm run dev
```

* Generate /build folder:
```
npm run build
```

## Note
Repository created after completion of **Brad Traversy** course available at [MERN Stack Front To Back: Full Stack React, Redux & Node.js](https://www.udemy.com/mern-stack-front-to-back/).