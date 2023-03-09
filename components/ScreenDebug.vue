
<script setup>
import { useWindowSize } from "@vueuse/core"
const { width, height } = useWindowSize()

// 🚨 Use <ClientOnly><ScreenDebug/></ClientOnly> if in SSR mode
</script>

<template>
  <div class="z-50 fixed top-0 left-0 text-xs">
    <span class="hidden xl:contents">XL </span>
    <span class="hidden lg:contents">LG </span>
    <span class="hidden md:contents">MD </span>
    <span class="hidden sm:contents">SM </span>
    <span>@ {{ width }} x {{ height }} </span>
    <span class="hidden portrait:contents">PORTAIT</span>
  </div>
</template>