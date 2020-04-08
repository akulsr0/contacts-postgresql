import express, { Application } from 'express';
import path from 'path';
const ejs = require('ejs');
const db = require('./db');

const app: Application = express();
const port = 1001 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));

app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server started running at port ${port}`);
});
