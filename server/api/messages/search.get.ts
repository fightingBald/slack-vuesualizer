//server/api/messages/search.get.ts
import type { Filter } from 'mongodb'
import { mongo } from '~/server/utils/mongo'
import type { Message } from '~/types/Message'

export default defineEventHandler(async (event) => {
  const { query, channel } = getQuery(event)

  if (!query)
    throw createError({ statusCode: 400, statusMessage: 'Missing query' })

  const db = await mongo(event.context.mongouuid)

  const filter: Filter<Message> = {
    $and: [{ $text: { $search: query.toString() } }],
  }

  if (channel)
    filter.$and!.push({ channel: decodeURIComponent(channel.toString()) })

  const messages = await db
    .collection<Message>('messages')
    .find(filter)
    .project({ score: { $meta: 'textScore' } })
    .limit(30)
    .sort({ score: { $meta: 'textScore' } })
    .toArray()

  return messages
})
