<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/en_US';
import { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import "dayjs/locale/en";
import ruRu from "ant-design-vue/es/locale/en_US";

dayjs.locale("ru");
const model = defineModel<Dayjs>({required: true})

</script>

<template>
    <a-config-provider :locale="ruRu">
        <a-date-picker v-model:value="model" :locale="locale"/>
    </a-config-provider>

</template>
