<script lang="ts" setup>
import { HeaderAdmin } from '@/features/HeaderAdmin';
import { message, type MenuProps } from 'ant-design-vue';
import { onMounted, ref, watch } from 'vue';
import { useSearchStore } from '@/stores/useSearchStore';
import { FilterCatalog } from '@/features/Filter';
import { getSearchProduct } from '../api';
import Table from './Table.vue';
const searchStore = useSearchStore()

const items = ref<MenuProps['items']>();
const searchVal = ref<String>()
const current = ref<string[]>(['all']);
const table_data = ref()
const num_obj = ref<number>(0)


const onSearch = async (searchValue: string) => {
    searchStore.setSearchInput(searchValue)
    const url = searchStore.generateQuery()
    await getSearchFunc(url, 1)
};

async function nextPage(params: number) {
    const url = searchStore.generateQuery()
    await getSearchFunc(url ,params)
}

async function getSearchFunc(url: string, page: number) {
    const { data, code, message: messErr } = await getSearchProduct(page, url)

    if (code !== 200) {
        message.error(messErr)
    }
    else if (data) {
        table_data.value = data.products ?? []
        num_obj.value = data.number_of_objects
    }
}

items.value = [
    {
        key: 'all',
        label: `Полный`,
        title: `Полный`,
    },
    {
        key: 'snus',
        label: `Снюс`,
        title: `Снюс`,
    },
    {
        key: 'pod',

        label: `Электронные сигареты`,
        title: `Электронные сигареты`,
    },

    {
        key: 'liquid',
        label: `Жидкости`,
        title: `Жидкости`,
    },
]

watch(
    current,
    async (newValue) => {
        if (newValue[0] === "all") {
            searchStore.$clear()
            searchStore.setType("")
            const url = searchStore.generateQuery()
            await getSearchFunc(url, 1)

        }
        else {
            searchStore.$clear()
            searchStore.setType(newValue[0])
            const url = searchStore.generateQuery()
            await getSearchFunc(url, 1)
        }
        searchVal.value = ''
    },
);

onMounted(async () => {
    await getSearchFunc('', 1)
})

</script>


<template>
    <HeaderAdmin />

    <div class="mx-[20px] mt-[30px]">
        <div class="flex items-center gap-10">
                    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items"
                        class="w-fit bg-[#e5e5e5]" />
                  
                </div>

        <div class="flex ">
            <div>
                
                <div class="flex flex-col">
                    <a-input-search v-model:value="searchVal" placeholder="Поиск" style="width: 20vw" class="my-5"
                        @search="onSearch" />

                    <FilterCatalog :onPressFilter="onSearch" />
                </div>
            </div>

            <Table v-if="table_data" :data_list="table_data" :current_page="num_obj" @press-page="nextPage" @change-table="getSearchFunc('', 1)"/>
        </div>

    </div>
</template>