<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/fr_FR';
import { Dayjs } from 'dayjs';
import dayjs from "dayjs";
import "dayjs/locale/fr";
import ruRu from "ant-design-vue/es/locale/fr_FR";

dayjs.locale("ru");
const model = defineModel<Dayjs>({required: true})

</script>

<template>
    <a-config-provider :locale="ruRu">
        <a-date-picker v-model:value="model" :locale="locale"/>
    </a-config-provider>

</template>
