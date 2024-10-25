<script setup lang="ts">
import { Calendar } from '@/widget/Calendar';
import { ref } from 'vue';

const date_flight = ref()
</script>

<template>
    <div class="flex w-full mx-[300px] gap-3 h-[50px]">
        <input type="search" class="rounded h-full p-2" placeholder="Откуда">
        <input type="search" class="rounded h-full p-2" placeholder="Куда">
        <Calendar v-model="date_flight"/>
        <button class="rounded bg-yellow w-[100px] hover:opacity-50 active:opacity-75">Найти</button>
    </div>
</template>

<style scoped>

</style>