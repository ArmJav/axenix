<script setup lang="ts">

interface Props {
    free_places: string,
    plac: string,
    cupe: string,
}

defineProps<Props>()

</script>
<template>
    <div class="flex flex-col gap-2 items-centers">
        <div class="flex flex-col items-center">
            <p class="text-[12px]">
                Свободные места
            </p>
            <p>
                {{ free_places }}
            </p>
        </div>

        <div class="flex gap-3">
            <div class="flex flex-col items-center">
            <p class="text-[12px]">
                Плацкарт
            </p>
            <p>
                {{ plac }}
            </p>
        </div>
        <div class="flex flex-col items-center">
            <p class="text-[12px]">
                Купе
            </p>
            <p>
                {{ cupe }}
            </p>
        </div>
        </div>
    </div>
</template>

