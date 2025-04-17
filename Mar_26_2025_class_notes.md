# Backend basics

In this class we talked about 

1. Client Server architecture - i.e. client requests to server for resources (like our application on joke API requested server for resources) and server sends the resource.

There are mainly two kinds of request server can handle (we will talk about the others in a different class) - get and post

## Installing and using express

- Install node.js - https://nodejs.org/en
- Create a folder
- run `npm init` to initialize a repo
- `npm install express` will install express
- create a index.js file and create a server with the following code -
  ```js
  const express = require('express')
  const app = express()
  const port = 3000
 
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
 
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  ```
- go to `package.json` and add this line
  ```json
  {
    ...
    "scripts": {
        "dev": "node index.js"
    }
  }
  ```
- run `npm run dev` to see your server go