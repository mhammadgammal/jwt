const express = require('express');
require(
    'dotenv'
).config();
const apiRouter = require('./routes/api')
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const { PORT } = require('./config/app.config')
const app = express();

app.use(express.json());

app.use('api/v1', apiRouter)
app.get(
    '/',
    (req, res) => res.send('This is JWT Authentication Server')
)

app.use(express.static('./public'))
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = PORT || 6000;
app.listen(
    port,
    () => console.log(`server is running: http://localhost:${port}`)
);