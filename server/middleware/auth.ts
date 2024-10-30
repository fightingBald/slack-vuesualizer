// server/middleware/auth.ts
import { defineEventHandler, getCookie, createError } from 'h3'

export default defineEventHandler((event) => {
  // 从 cookie 中获取 mongouuid 和 userId
  const mongouuid = getCookie(event, 'mongouuid')
  const userId = getCookie(event, 'userId')

  // 如果缺少 mongouuid 或 userId，则抛出未授权错误
  if (!mongouuid || !userId) {
    throw createError({ statusCode: 401, statusMessage: '未授权' })
  }

  // 将 mongouuid 和 userId 添加到 event.context 中
  event.context.mongouuid = mongouuid
  event.context.userId = userId
})
