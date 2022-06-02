const express = require('express');
const routes = require('./Routes/router.js');
const {getcreateTopic}=require('./controllers/topic.js');
const app = express();
const port = 3000;
getcreateTopic();
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})