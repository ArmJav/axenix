<script setup lang="ts">

interface Props {
    lable_one?: string,
    content_one?: string,
    lable_two?: string,
    content_two?: string,
}

defineProps<Props>()

</script>
<template>
    <div class="flex flex-col gap-2">
        <div v-if="lable_one" class="flex flex-col">
            <p class="text-[12px]">
                {{ lable_one }}
            </p>
            <p class="pl-5">
                {{ content_one }}
            </p>
        </div>
        <div v-if="lable_two" class="flex flex-col">
            <p class="text-[12px]">
                {{ lable_two }}
            </p>
            <p class="pl-5">
                {{ content_two }}
            </p>
        </div>
    </div>
</template>

