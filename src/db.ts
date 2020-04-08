const { Client } = require('pg');
const client = new Client({
  user: 'akulsr0',
  password: '12345',
  host: 'localhost',
  port: '5432',
  database: 'contacts-webapp',
});

interface Contact {
  rows: [];
}

client
  .connect()
  .then(() => console.log('Connected Successfully'))
  .catch((err: { msg: string }) => console.log(err));

export { client };
