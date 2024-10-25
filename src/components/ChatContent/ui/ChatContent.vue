<script setup lang="ts">
import { ChatList } from '@/features/ChatsList';
import { MessageWindow } from '@/features/MessageWindow';
</script>

<template>
    <div class="mx-[20px] py-[30px] flex gap-4">
        <ChatList />
        <MessageWindow />
    </div>
</template>

