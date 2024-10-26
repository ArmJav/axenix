<script setup lang="ts">

import PlaceInfo from "@/components/CabinetComponent/ui/PlaceInfo.vue";
import {ref} from "vue"
import Ticket from "@/widget/Ticket/Ticket.vue";
import { Header } from '@/widget/Header';

const props = defineProps({
  userInfo: Object
})

const buttons = ['Активные', 'Лист ожидания', 'История поездок']
const editInfo = ref(false)
let activeButton = ref(0)

function toggleButton(index: number) {
  activeButton.value = index;
}
</script>

<template>
  <Header />
  <div class="flex gap-10 px-12 py-8">
    <div class="bg-white w-5/12 h-[85vh] p-10 rounded-xl flex flex-col gap-8 shadow-xl">
      <div class="flex flex-col mt-10">
        <h3 class="text-[30px]">Личные данные</h3>
        <div class="border-2 border-main-orange border-solid w-1/5 rounded-xl"/>
      </div>
      <div v-for="user in userInfo" :key="user.title">
        <PlaceInfo :title=user.title :body=user.body :disabled="!editInfo"/>
      </div>
      <div class="flex justify-end">
        <button class="w-[200px] h-[60px] text-white text-[20px] rounded-[10px] mt-4 transition-colors duration-600 ease-in-out"
                :class="{'bg-button-green  hover:text-black hover:bg-white hover:border-2 hover:border-button-green': editInfo, 'bg-main-orange hover:text-black hover:bg-white hover:border-2 hover:border-main-orange': !editInfo}"
                @click="editInfo = !editInfo">
          {{ !editInfo ? "Изменить" : "Сохранить" }}
        </button>
      </div>
    </div>

    <div class="bg-white w-7/12 h-8/10 p-10 flex flex-col gap-5 rounded-xl shadow-xl">
      <div class="flex flex-col gap-20 mt-10">
        <div class="flex justify-around">
          <button
              v-for="(btn, index) in buttons"
              :key="index"
              class="px-5 py-3 border-2 border-main-orange rounded-xl hover:text-white hover:bg-main-orange transition-colors duration-600 ease-in-out"
              :class="{ 'bg-main-orange text-white': index === activeButton,  }"
              @click="toggleButton(index)">{{ btn }}</button>
        </div>

        <div class="flex flex-col gap-10 scroll-y">
          <Ticket :isActive="activeButton === 0" :isWaiting="activeButton === 1"/>
          <Ticket :isActive="activeButton === 0" :isWaiting="activeButton === 1"/>
          <Ticket :isActive="activeButton === 0" :isWaiting="activeButton === 1"/>
        </div>
      </div>
    </div>

  </div>
</template>
