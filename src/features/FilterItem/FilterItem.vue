<script setup lang="ts">
import { DownOutlined, UpOutlined, } from '@ant-design/icons-vue';

const model = defineModel<boolean>({required: true})

</script>

<template>
    <div>
        <div class="flex justify-between cursor-pointer" @click="model = !model">
            <slot name="title"></slot>
            <UpOutlined v-if="!model" />
            <DownOutlined v-if="model"/>
        </div>
        <slot name="body"></slot>
    </div>
</template>
