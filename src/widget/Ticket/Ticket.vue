<script setup lang="ts">
import {InCardBody} from "@/features/InCardBody";

const props = defineProps({
  isActive: Boolean,
  isWaiting: Boolean,
  ticketInfo: Object
})
</script>

<template>
  <div class="flex w-full h-[17vh] text-[20px] border-2 border-main-orange rounded-xl px-5 py-3">
    <div class="flex gap-10">
      <div class="flex gap-20 mt-4">
        <InCardBody lable_one="Откуда" lable_two="Дата" content_one="Ростов-на-Дону" content_two="21.08.2000"/>
        <InCardBody lable_one="Куда" lable_two="Время отправления" content_one="Санкт-Петербург" content_two="00:00"/>
      </div>

      <div class="flex gap-6 items-end mb-3">
        <div class="flex flex-col items-center">
          <p class="text-light-grey-text text-[14px]">Вагон</p>
          <p>1</p>
        </div>

        <div class="flex flex-col items-center">
          <p class="text-light-grey-text text-[14px]">Место</p>
          <p>2</p>
        </div>

        <div class="flex flex-col items-center">
          <p class="text-light-grey-text text-[14px]">Класс</p>
          <p>К</p>
        </div>
      </div>
    </div>

    <div v-show="isActive || isWaiting" class="w-1/4 flex items-end justify-end mb-3">
      <button v-show="isActive" class="bg-light-grey-button h-[40px] py-1 px-5 rounded bottom-0 text-[15px]">Вернуть билет</button>

      <div v-show="isWaiting" class="flex flex-col h-full justify-between items-end">
        <div class="text-[20px]">Забронировано</div>
        <button class="bg-light-grey-button w-fit h-[40px] py-1 px-5 rounded bottom-0 text-[15px] right-0">Выкупить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>