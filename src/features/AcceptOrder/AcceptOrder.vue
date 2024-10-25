<script setup lang="ts">
import type { AcceptOrder } from '@/components/OrderContent/model';
import { unixToDate, type IdName } from '@/api/model';
import { getCheckOrder } from '@/api/global/getCheckOrder';
import { message } from 'ant-design-vue';
import { onMounted, ref, watch } from 'vue';
import { Calendar } from '../Calendar';
import { getSnippet } from '@/api/global/getSnippet';
import { LikeTwoTone, InfoCircleOutlined } from '@ant-design/icons-vue';

const model = defineModel<AcceptOrder>({ required: true })


const options = ref()
const optionsProduct = ref()
const deliver_d = ref()
const productList = ref()



async function getCouriersFun(search: string) {
    if (!search) {
        return
    }
    const { data, code, message: messErr } = await getSnippet('courier', search)

    if (code !== 200) {
        message.error(messErr)

    }
    else if (data) {
        options.value = data.map(item => ({
            label: item.name,
            value: item.id
        }))
    }
    else {
        options.value = []
    }
}

async function getCourierOrder() {

    const { data, code, message: messErr } = await getCheckOrder(model.value.id)

    if (code !== 200) {
        message.error(messErr)

    }
    else if (data) {
        options.value = data.map(item => ({
            label: item.name,
            value: item.id,
            title: item.description,
            satisfies: item.satisfies

        }))
    }
    else {
        options.value = []
    }
}

async function getProductFun(search: string) {
    if (!search) {
        return
    }
    const { data, code, message: messErr } = await getSnippet('product', search)
    if (code !== 200) {
        message.error(messErr)
    }
    else if (data) {
        optionsProduct.value = data.map(item => ({
            label: item.name,
            value: item.id
        }))
    }
}

// Скрпит для таблицы

function updateTable(data_product: any[], count: number[]) {
    // const product = data_product.map(item => ({
    //     key: item.id,
    //     name: item.name
    // }))
    let list = []

    if (!data_product) {
        return
    }

    for (let index = 0; index < data_product.length; index++) {
        const element = {
            key: data_product[index].id,
            name: data_product[index].name,
            count: count[index]
        }
        list.push(element)
    }
    return list

}

const handlDelete = (index: number) => {

    if (index >= 0 && index < model.value.product_ids.length) {
        model.value.product_ids.splice(index, 1);
        model.value.count.splice(index, 1)
    }
}

const new_item = ref()
const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
        width: '30%',
    },
    {
        title: 'Количество',
        dataIndex: 'count',
    },
    {
        title: 'Операции',
        dataIndex: 'operation',
    },
]

// 



// const updateItem = (newName: number, oldValue: any) => {
//     model.value.product_ids = oldValue.value
// }

watch(deliver_d, () => {
    console.log(deliver_d)
    model.value.delivery_date = deliver_d.value.unix()
})


const updateItemProduct = (newValue: any, oldValue: any) => {
    new_item.value = {
        name: oldValue.label,
        id: oldValue.value
    }

}

const addItemProduct = () => {
    console.log(model.value);

    if (new_item.value) {
        model.value.product_ids.push(new_item.value)
        model.value.count = [...model.value.count, 0]
    }
}




</script>
<template>
    <div class="flex flex-col gap-3">
        <div class="flex items-center gap-5">
            <label class="w-fit">Комментарий для курьера:</label>
            <a-input class="w-full" v-model:value="model.description" placeholder="..." />
        </div>
        <div class="flex items-center gap-5">
            <label class="w-fit">Курьер:</label>
            <a-select v-model:value="model.courier_id" style="width: 100%" placeholder="Выберите из списка"
                @click="getCourierOrder()" :options="options" :filter-option="false" :not-found-content="null"
                :show-arrow="false">
                <template #option="{ value: val, label, satisfies }">
                    <div class="flex justify-between items-center">
                        <span v-if='(satisfies === 1)' role="img" :aria-label="val"><like-two-tone
                                two-tone-color="#52c41a" /></span>
                        &nbsp;&nbsp;{{ label }}

                        <span role="img2" :aria-label="val">
                            <InfoCircleOutlined />
                        </span>
                    </div>
                </template>
            </a-select>
        </div>
        <!-- <div class="flex items-center gap-5">
            <label class="w-fit">Курьер:</label>
            <a-select v-model:value="model.courier_id" show-search style="width: 100%" placeholder="Введите имя"
                :options="options" :filter-option="false" :not-found-content="null" :show-arrow="false"
                @search="getCouriersFun"></a-select>
        </div> -->
        <div class='flex gap-3 w-full items-center my-2'>
            <p>Дата доставки:</p>
            <Calendar v-model="deliver_d" />
        </div>

        <!-- <div class="flex items-center gap-5">
            <label class="w-fit">Продукты:</label>
            <a-select v-model:value="productList" show-search style="width: 100%" placeholder="Введите название" mode="multiple"
                :options="optionsProduct" :filter-option="false" :not-found-content="null" :show-arrow="false"  @search="getProductFun" @change="updateItemProduct" ></a-select>
        </div> -->

        <div class="flex flex-col gap-5">
            <label class="w-fit">Продукты</label>
            <div class="flex items-center gap-5">
                <a-select v-model:value="productList" show-search style="width: 100%"
                    placeholder="Введите название товара" :options="optionsProduct" :filter-option="false"
                    :not-found-content="null" :show-arrow="false" @search="getProductFun"
                    @change="updateItemProduct"></a-select>

                <a-button @click="addItemProduct">Добавить</a-button>
            </div>

            <a-table bordered :data-source="updateTable(model.product_ids, model?.count)" :columns="columns">
                <template #bodyCell="{ column, text, index }">
                    <template v-if="column.dataIndex === 'operation'">
                        <a-button type="link" @click="handlDelete(index)">Удалить</a-button>
                    </template>

                    <template v-if="column.dataIndex === 'count'">
                        <a-input-number v-model:value="model.count[index]" />
                    </template>
                </template>
            </a-table>
        </div>

        <div class="flex items-center gap-2">
            <label class="w-fit">Итоговая сумма:</label>
            <p>{{ model.sum }} ₽</p>
            <!-- <a-input-number class="w-fit" v-model:value="model.sum" /> -->
        </div>
    </div>

</template>