<script setup lang="ts">
import logo from "@/assets/img/logo-header.svg";
import { UserOutlined } from '@ant-design/icons-vue';
import { router } from '@/router'
</script>

<template>
    <div class="h-[100px] w-full flex justify-between bg-yellow px-8 py-5 items-center">
        <img :src="logo" alt="logo" class="h-full">
        <user-outlined class="text-[30px] text-white" @click="router.push('/')"/>
    </div>
</template>
