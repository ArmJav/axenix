<script setup lang="ts">

import PlaceInfo from "@/components/CabinetComponent/ui/PlaceInfo.vue";
import {ref} from "vue"
import Ticket from "@/widgets/Ticket.vue";

const props = defineProps({
  userInfo: Object
})
const editInfo = ref(false)
</script>

<template>
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
        <button class="w-[200px] h-[60px] text-white text-[20px] rounded-[10px] mt-4"
                :class="{'bg-button-green': editInfo, 'bg-main-orange': !editInfo}"
                @click="editInfo = !editInfo">
          {{ !editInfo ? "Изменить" : "Сохранить" }}
        </button>
      </div>
    </div>

    <div class="bg-white w-7/12 h-8/10 p-10 flex flex-col gap-5 rounded-xl shadow-xl">
      <div class="flex flex-col gap-20 mt-10">
        <div class="flex justify-around">
          <button class="px-5 py-3 border-2 border-main-orange rounded-xl">Активные</button>
          <button class="px-5 py-3 border-2 border-main-orange rounded-xl">Лист ожидания</button>
          <button class="px-5 py-3 border-2 border-main-orange rounded-xl">История поездок</button>
        </div>

        <div class="flex flex-col gap-10">
          <Ticket/>
          <Ticket/>
          <Ticket/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>