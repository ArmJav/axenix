<script setup lang="ts">
import { useSearchStore } from '@/stores/useSearchStore';
import { message } from 'ant-design-vue';
import { onMounted, ref } from 'vue';
import { getSearchBag } from '../api';
import { FilterBag } from '@/features/Filter';
import BagTable from './BagTable.vue';

const searchStore = useSearchStore()
const table_data = ref()
const num_obj = ref<number>(0)
const searchVal = ref<String>()

async function getSearchFunc(url: string, page: number) {
    const { data, code, message: messErr } = await getSearchBag(page, url)

    if (code !== 200) {
        message.error(messErr)
    }
    else if (data) {
        table_data.value = data.items ?? []
        num_obj.value = data.number_of_objects
    }
}

async function nextPage(params: number) {
    const url = searchStore.generateQuery()
    await getSearchFunc(url ,params)
}

const onSearch = async (searchValue: string) => {
    searchStore.setSearchInput(searchValue)
    const url = searchStore.generateQuery()
    await getSearchFunc(url, 1)
};

onMounted(async () => {
    await getSearchFunc('', 1)
})


</script>

<template>
    <div class="mx-[20px] mt-[30px]">
        <div class="flex content-center">
            <div>
                <div class="flex flex-col gap-2">
                    <a-input-search v-model:value="searchVal" placeholder="Поиск" style="width: 20vw"
                        @search="onSearch" />

                    <!-- Для компонента фильтров -->
                     <FilterBag :onPressFilter="onSearch" />
                </div>
            </div>
            <!-- Компонент таблицы -->
            <BagTable v-if="table_data" :data_list="table_data" :current_page="num_obj" @press-page="nextPage" @change-table="getSearchFunc('', 1)" />
        </div>
    </div> 

</template>