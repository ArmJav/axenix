<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { type MenuProps, message } from 'ant-design-vue';
import type { TableProps, TableColumnType } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import { type SearchProduct, type ProductCatalog, typeProduct } from '../model';
import { getProduct, postUpdateProduct, postCreateProduct } from '../api';
import { AddProduct } from '@/features/AddProduct';


const defultDict = {
        id: 0,
        type_product: 'snus',
        type_snus_and_pod: 0,
        brand: {id: null, name_eng: '', name_rus: ''},
        name: '',
        photo: '',
        nicotine: 0,
        flavour: [],
        special: 0,
        rating: 0,
        sale: 0,
        sale_amount: 0,
        price: 0,
        amount: 0,
        import: 0,
        new: 0
    }
const selected_id = ref<Key[]>([])
const open_modal = ref<boolean>(false)
const open_modal_add = ref<boolean>(false)
const moreProduct = ref<ProductCatalog>(defultDict)

interface Props {
    data_list: SearchProduct[],
    current_page: number
}

const { data_list, current_page } = defineProps<Props>()

const emit = defineEmits(['pressPage', 'changeTable'])

function updateTable(data: any[]) {
    return data.map(item => ({
        key: item.id,
        name: item.name,
        type_product: typeProduct(item.type_product),
        price: item.price,
        amount: item.amount

    }))

}

async function getSearchFunc(id: number) {
    const { data, code, message: messErr } = await getProduct(id)

    if (code !== 200) {
        message.error(messErr)
    }
    else if (data) {
        moreProduct.value = data
    }
}

async function updateProduct(body: any) {
    const {code, message: messErr } = await postUpdateProduct(body)

    if (code !== 200) {
        message.error(messErr)
    }
    else {
        message.success("Данные обновлены")
        open_modal.value = false
    }
}

async function createProduct(body: any) {
    const { code, message: messErr } = await postCreateProduct(body)

    if (code !== 200) {
        message.error(messErr)
    }
    else {
        message.success("Товар добавлен")
        open_modal_add.value = false
    }
}

const handlMore = async (id: number) => {
    console.log(id);
    await getSearchFunc(id)
    open_modal.value = true
    
} 


const handlAddModal = async (id: number) => {
    open_modal_add.value = true
    
} 


const columns: TableColumnType<SearchProduct>[] = [
    {
        title: 'Название',
        dataIndex: 'name',
    },
    {
        title: 'Тип',
        dataIndex: 'type_product',
    },
    {
        title: 'Цена',
        dataIndex: 'price',
    },
    {
        title: 'Количество',
        dataIndex: 'amount',
    },
    {
        title: 'Операции',
        dataIndex: 'operation',
    },
];

const rowSelection: TableProps['rowSelection'] = {
    onChange: (selectedRowKeys: Key[]) => {
        selected_id.value = selectedRowKeys
    },
};


const handlechange = (e: any) => {
    emit('pressPage', e.current)
}

const handleCancel = () => {
    moreProduct.value = defultDict
}

const handleOkUpdate = async () => {
    await updateProduct(moreProduct.value)
    emit('changeTable')
}

const handleCreate = async () => {
    await createProduct(moreProduct.value)
    emit('changeTable')
    }

</script>

<template>
    <a-modal v-model:open="open_modal" title="Редактор товара" @ok="handleOkUpdate" @cancel="handleCancel" ok-text="Сохранить" cancel-text="Отменить" width="30%">
        <AddProduct v-model="moreProduct"/>
    </a-modal>

    <a-modal v-model:open="open_modal_add" title="Добавить товар" @ok="handleCreate" @cancel="handleCancel" ok-text="Добавить" cancel-text="Отменить" width="30%">
        <AddProduct v-model="moreProduct"/>
    </a-modal>

    <div class="w-full ml-10">
        <div class="h-[40px] mt-[20px] mb-3 flex gap-3">     
            <a-button @click="handlAddModal" >Добавить</a-button>
            <a-button v-if="selected_id?.length > 0" type="primary" danger>Удалить</a-button>
        </div>
        <a-table :row-selection="rowSelection" :columns="columns" :data-source="updateTable(data_list)" class="m-[3px]" :pagination="{defaultPageSize: 20,total: current_page}" @change="handlechange">
            <template #bodyCell="{ column, text, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-button type="link" @click="handlMore(record.key)">Изменить</a-button>
                </template>
            </template>
        </a-table>
    </div>
</template>
