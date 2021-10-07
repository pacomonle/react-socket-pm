# npm init -> create package.json

# npm i socket.io

# npm i express

# npm install -g nodemon

# npm install --save-dev nodemon

# npm i dotenv (trabajar variables de entrono)

#########################
In conjunction with Express
Starting with 3.0, express applications have become request handler functions that you pass to http or http Server instances. You need to pass the Server to socket.io, and not the express application function. Also make sure to call .listen on the server, not the app.
#########################

# git init (para inicializar el repositorio)
