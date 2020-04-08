import { Router, Request, Response } from 'express';
import { client } from '../db';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  let result = await client.query('select * from contacts');
  let contacts = result.rows;
  res.render('index', { contacts });
});

router.get('/add', (req: Request, res: Response) => {
  res.render('add-contact');
});

router.post('/add', async (req: Request, res: Response) => {
  let { name, phone, email } = req.body;
  await client.query(`
        INSERT INTO contacts (name, phone, email) VALUES
        ('${name}', '${phone}', '${email}');
    `);
  res.render('message', { msg: 'Saved' });
});

router.post('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await client.query(`
    delete from contacts where id = '${id}';
  `);
  res.render('message', { msg: 'Deleted' });
});

module.exports = router;
