//导入 Channel 和 Dm 类型，用于为后续的状态声明和数据获取提供类型支持。
import type { Channel } from '~/types/Channel'
import type { Dm } from '~/types/Dm'

export function useChannels() {
  //useState 是 Nuxt 中管理全局状态的组合式 API，它可以在组件之间共享状态。这里它被用来存储四类不同的频道数据：
  //properChannels 用于存储频道数据
  const properChannels = useState<Channel[]>('channels', () => []) 
  //dms 用于存储直接消息数据
  const dms = useState<Dm[]>('dms', () => [])
  //groups 用于存储群组数据
  const groups = useState<Channel[]>('groups', () => [])
  //mpims 用于存储多对多消息数据
  const mpims = useState<Channel[]>('mpims', () => [])


  //channels 是一个计算属性，它将 properChannels、dms、groups 和 mpims 的值合并成一个数组。
  const channels = computed(() => [
    ...properChannels.value,
    ...dms.value,
    ...groups.value,
    ...mpims.value,
  ])


//callOnce：这个函数的作用是确保 load 只会被调用一次，不管有多少次尝试调用 load，只会执行一次数据请求。它是一个防止重复调用的机制
//如果你在普通函数声明中不使用 callOnce，那么每次调用 load 都会触发新的数据请求。
  const load = () => callOnce(async () => { 
    const [_channels, _dms, _groups, _mpims] = await Promise.all([
      $fetch<Channel[]>('/api/channels', {
        headers: useRequestHeaders(['cookie']),
      }),
      $fetch<Dm[]>('/api/dms', {
        headers: useRequestHeaders(['cookie']),
      }),
      $fetch<Channel[]>('/api/groups', {
        headers: useRequestHeaders(['cookie']),
      }),
      $fetch<Channel[]>('/api/mpims', {
        headers: useRequestHeaders(['cookie'])
      }),
    ])

    properChannels.value = _channels
    dms.value = _dms
    groups.value = _groups
    mpims.value = _mpims
  })

  const typeById = (id: string) => {
    if (dms.value.some((dm) => dm.id === id)) return 'dms'
    if (groups.value.some((group) => group.name === id)) return 'groups'
    if (mpims.value.some((mpim) => mpim.name === id)) return 'mpims'
    return 'channels'
  }


  return { properChannels, dms, groups, mpims, channels, load, typeById }
}
