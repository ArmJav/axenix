<script setup lang="ts">
import { InCardBody, Railway } from '@/features/InCardBody';
</script>
<template>
    <div  class="flex w-full p-4 border border-yellow rounded-md justify-between">
        <InCardBody lable_one="Откуда" lable_two="Дата" content_one="Piter" content_two="21.08.2000" />
        <InCardBody lable_one="Куда" lable_two="Дата" content_one="Moscow" content_two="21.08.2000" />
        <Railway free_places="10" plac="5" cupe="5"/>
        <InCardBody lable_one="Стоимость" content_one="1000" />
        <div class="flex items-end">
        <button class="bg-pixso-grey h-fit py-1 px-5 rounded bottom-0 text-[15px]">Купить билет</button>

        </div>

    </div>
</template>
