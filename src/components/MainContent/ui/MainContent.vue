<script setup lang="ts">
import { Search } from '@/widget/Search';
import { Header } from '@/widget/Header';
import { FlightItem } from '@/components/FlightItem';
</script>

<template>
    <div class="bg-yellow h-[220px] flex flex-col">
        <Header />
        <div class="mx-[20px] my-[30px]">   
            <Search/>
        </div>
        <FlightItem />
    </div> 

</template>