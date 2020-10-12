import shortid from 'shortid'
import db from '../../../db'
import { sleep } from '../../../utils'

//
const failureRate = 0

export default async (req, res) => {
  await sleep(1000)

  try {
    if (req.method === 'GET') {
      return await GET(req, res)
    } else if (req.method === 'POST') {
      return await POST(req, res)
    }
  } catch (err) {
    console.error(err)
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
  }
}

async function GET(req, res) {
  const {
    query: { pageOffset, pageSize },
  } = req

  const posts = (await db.get()).posts.map((d) => ({
    ...d,
    body: d.body.substring(0, 50) + (d.body.length > 50 ? '...' : ''), // Don't return full body in list calls
  }))

  if (Number(pageSize)) {
    const start = Number(pageSize) * Number(pageOffset)
    const end = start + Number(pageSize)
    const page = posts.slice(start, end)

    return res.json({
      items: page,
      nextPageOffset: posts.length > end ? Number(pageOffset) + 1 : undefined,
    })
  }

  res.json(posts)
}

async function POST(req, res) {
  if (Math.random() < failureRate) {
    res.status(500)
    res.json({ message: 'An unknown error occurred!' })
    return
  }

  const row = {
    id: shortid.generate(),
    ...req.body,
  }

  await db.set((old) => {
    return {
      ...old,
      posts: [...old.posts, row],
    }
  })

  res.json(row)
}
