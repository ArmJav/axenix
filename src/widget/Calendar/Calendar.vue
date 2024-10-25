<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU';
import { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import "dayjs/locale/ru";
import ruRu from "ant-design-vue/es/locale/ru_RU";

dayjs.locale("ru");
const model = defineModel<Dayjs>({required: true})

</script>

<template>
    <a-config-provider :locale="ruRu">
        <a-date-picker v-model:value="model" :locale="locale"/>
    </a-config-provider>

</template>
