import { mongo } from '~/server/utils/mongo'
import type { Channel } from '~~/types/Channel'

export default defineEventHandler(async (event) => {
  const db = await mongo(event.context.mongouuid)
  const userId = event.context.userId

  const channels = await db
      .collection<Channel>('channels')
      .find({ members: userId }) // 添加 userId 过滤器
      .sort({ name: 1 })
      .toArray()

  return channels
})
