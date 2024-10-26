<script setup lang="ts">
import { Filter } from '@/widget/Filter';
import { FlightCard } from '@/widget/FlightCard';
</script>

<template>
    <div class="flex m-10 justify-between gap-2 pb-6">
        <div class="flex flex-col gap-3 w-full ">
        <FlightCard />
        <FlightCard />
        <FlightCard />
        </div>
        <Filter/>
    </div>
</template>

