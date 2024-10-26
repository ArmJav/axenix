<script setup lang="ts">
  import PersonalData from "@/components/CabinetComponent/PersonalData.vue";

  const user = [
    { title: 'Фамилия', body: 'Семёнов', },
    { title: 'Имя', body: 'Давид', },
    { title: 'Отчество', body: 'Александрович', },
    { title: 'Паспорт', body: '1234 123456', },
    { title: 'Дата рождения', body: '02.02.2024', },
    { title: 'Телефон', body: '+7952812', },
    { title: 'Почта', body: 'abc@mail.com', },
  ]
</script>

<template>
  <PersonalData v-bind:userInfo="user"/>
</template>

<style scoped>

</style>