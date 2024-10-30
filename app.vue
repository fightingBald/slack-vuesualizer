<script lang="ts" setup>
import { provideUseId } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

provideUseId(() => useId())

const { t } = useI18n() //useI18n：从 vue-i18n 库中导入，用于处理国际化（i18n）。它帮助你在应用中管理多语言翻译。
//()：是 vue-i18n 提供的翻译函数，通过传入翻译 key，可以获取不同语言版本的文本。例如，t('description') 会查找当前语言环境下的 description 对应的翻译。

const config = useRuntimeConfig()
//useRuntimeConfig()：这个钩子用于获取运行时配置（例如在 nuxt.config.js 中定义的配置项）。在这里，它获取了 config 对象，里面包含了 public 字段，这通常用于获取公开的配置项，例如网站 URL。

useHead({//useHead()：这个函数来自 Nuxt 3，用于动态设置页面的 <head> 标签内容，包括标题、描述、图标、Open Graph 信息等。
  title: 'Slack Vuesualizer', 
  meta: [ //meta: [：定义了一系列的元标签（meta tags），这些标签提供了关于页面内容的信息，如描述、关键词、作者等。
    {
      name: 'description',
      content: t('description'),
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'og:title',
      content: 'Slack Vuesualizer',
    },
    {
      name: 'og:description',
      content: t('description'),
    },
    {
      property: 'og:image',
      content: '/vuesualizer.png',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: config.public.siteUrl,
    },
    {
      property: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: 'Slack Vuesualizer',
    },
    {
      name: 'twitter:description',
      content: t('description'),
    },
    {
      property: 'twitter:image',
      content: '/vuesualizer.png',
    },
    {
      property: 'twitter:url',
      content: config.public.siteUrl,
    },
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.png',
    },
    {
      rel: 'mask-icon',
      href: '/Slack_Mark_Monochrome_White.svg',
      color: '#000000',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.png',
    },
  ],
})
</script>

<template>
  <div class="antialiased">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
