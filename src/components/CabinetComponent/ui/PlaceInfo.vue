<script setup lang="ts">
  const props = defineProps({
    title: String,
    body: String,
    disabled: Boolean,
  })
  console.log(props)
</script>

<template>
  <label class="flex flex-col gap-1 w-4/6 text-[20px]">
    <h2 class="text-[14px] text-light-grey-text">{{ title }}</h2>
    <textarea class="resize-none pl-4 outline-none bg-inherit" rows="1"
              :disabled="disabled" v-bind:body>{{ body }}
    </textarea>
    <div v-show="!disabled" class="border-b-2 border-main-orange -mt-1"/>
  </label>
</template>

<style scoped>

</style>