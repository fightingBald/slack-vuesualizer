<script lang="ts" setup>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
//引入 CSS 文件：这行代码引入了 vue-virtual-scroller 插件的样式。vue-virtual-scroller 是一个处理虚拟列表和大规模滚动数据的库，能够帮助你高效渲染大量的列表数据。这里的样式确保组件在渲染时能够正确显示。
const users = useUsers()
// useUsers：这是一个自定义的 composable，用来管理用户数据。它返回一个响应式变量 users，你可以用它来存储和管理从服务器获取到的用户信息。

const { data: fetchedUsers } = await useFetch('/api/users', { 
  headers: useRequestHeaders(['cookie']),
})
//useFetch：Nuxt.js 提供的一个钩子，用于在服务端或客户端环境中进行数据获取（fetch）。在这里，它用于从 /api/users 端点获取用户数据。
//解构赋值：通过 const { data: fetchedUsers }，将返回的数据 data 解构为 fetchedUsers。

whenever(fetchedUsers, u => (users.value = u), { immediate: true })
//whenever()：这个函数用于监听某个响应式数据（fetchedUsers）的变化。当 fetchedUsers 有值时，立即将它的值更新到 users 响应式变量中。



const { load } = useChannels()
// useChannels：这是一个自定义的 composable，用于管理频道数据。它返回一个对象，其中包含一个 load 方法，用于从服务器加载频道数据。

await load()
// 调用 load 方法，从服务器加载频道数据。
</script>些《

<template>
  <!-- 
<template> 部分：
布局定义了页面的基本结构，包括导航栏、侧边栏和主内容区域。通过 <slot /> 插槽，每个页面的具体内容会动态插入主内容区域。
使用了 Tailwind CSS 定义页面的自适应布局和样式，使得页面在移动端和桌面端的显示效果都很好。
-->
  <div>
    <NavHeader />
    <div class="container mx-auto bg-base-100 drawer lg:drawer-open">
      <input id="drawer" class="drawer-toggle" type="checkbox">
      <main
        class="h-[calc(100vh-4rem)] overflow-x-hidden drawer-content px-4 md:px-6 lg:px-8 mt-16 pb-2"
      >
        <slot />  <!-- 插槽：<slot /> 是 Vue 的插槽语法，用于在父组件中插入子组件的内容。这里，每个页面的具体内容会动态插入主内容区域。-->
      </main>
      <NavSideDrawer />
    </div>
  </div>
</template>
