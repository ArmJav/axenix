<script setup lang="ts">
const props = defineProps({
  isActive: Boolean,
  isWaiting: Boolean,
  ticketInfo: Object
})

let isActive = false
let isWaiting = true
</script>

<template>
  <div class="flex w-full text-[20px] border-2 border-main-orange rounded-xl px-5 py-3">
    <div class="flex flex-col gap-5 justify-between w-5/6">
      <div class="flex gap-4 gap-x-8">
        <div>
          <p class="text-light-grey-text">Откуда</p>
          <p class="pl-4">Ростов-на-Дону</p>
        </div>

        <div>
          <p class="text-light-grey-text">Куда</p>
          <p class="pl-4">Санкт-Петербург</p>
        </div>
      </div>

      <div class="flex gap-4  w-full justify-between">
        <div><p class="text-light-grey-text">Дата</p>
          <p class="pl-4">27.10.2024</p></div>
        <div><p class="text-light-grey-text">Время отправления</p>
          <p class="pl-4">00:00</p></div>
        <div><p class="text-light-grey-text">Вагон</p>
          <p class="pl-4">1</p></div>
        <div><p class="text-light-grey-text">Место</p>
          <p class="pl-4">12</p></div>
        <div><p class="text-light-grey-text">Класс</p>
          <p class="pl-4">К</p></div>
      </div>
    </div>

    <div v-show="isActive || isWaiting">
      <div v-show="isActive">
        <button class="px-10 py-14 bg-light-grey-button rounded-[5px]">Вернуть билет</button>
      </div>

      <div v-show="isWaiting">
        <div class="text-[20px]">Забронировано</div>
        <button class="px-10 py-14 bg-light-grey-button rounded-[5px] w-0 h-0">Выкупить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>