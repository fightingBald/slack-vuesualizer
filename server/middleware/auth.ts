//server/middleware/auth.ts
export default defineEventHandler((event) => {
  const mongouuid = getCookie(event, 'mongouuid')
  event.context.mongouuid = mongouuid
})
