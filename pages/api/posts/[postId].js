import db from '../../../db';
import { sleep } from '../../../utils';

const deleteFailureRate = 0;

async function GET(req, res) {
  const {
    query: { postId },
  } = req;

  const row = (await db.get()).posts.find((d) => d.id == postId);
console.log('here is the row', row);
  if (!row) {
    res.status(404);
    return res.send('Not found');
  }

  res.json(row);
}

async function PATCH(req, res) {
  const {
    query: { postId },
    body,
  } = req;

  if (body.body.includes('fail')) {
    res.status(500);
    res.json({ message: 'An unknown error occurred!' });
    return;
  }

  const row = (await db.get()).posts.find((d) => d.id == postId);

  if (!row) {
    res.status(404);
    Promise.resolve(res.send('Not found'));
  }

  delete body.id;

  const newRow = {
    ...row,
    ...body,
  };

  await db.set((old) => ({
    ...old,
    posts: old.posts.map((d) => (d.id == postId ? newRow : d)),
  }));

  res.json(newRow);
}

async function DELETE(req, res) {
  const {
    query: { postId },
  } = req;

  if (Math.random() < deleteFailureRate) {
    res.status(500);
    res.json({ message: 'An unknown error occurred!' });
    return;
  }

  const row = (await db.get()).posts.find((d) => d.id == postId);

  if (!row) {
    res.status(404);
    Promise.resolve(res.send('Not found'));
  }

  await db.set((old) => ({
    ...old,
    posts: old.posts.filter((d) => d.id != postId),
  }));

  res.status(200);
  res.send('Resource Deleted');
}

// eslint-disable-next-line consistent-return
export default async (req, res) => {
  await sleep(1000);

  try {
    if (req.method === 'GET') {
      return await GET(req, res);
    }
    if (req.method === 'PATCH') {
      return await PATCH(req, res);
    }
    if (req.method === 'DELETE') {
      return await DELETE(req, res);
    }
  } catch (err) {
    console.error(err);
    res.status(500);
    res.json({ message: 'An unknown error occurred!' });
  }
};
