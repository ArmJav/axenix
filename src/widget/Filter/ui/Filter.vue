<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useSearchStore } from '@/store/useSearchStore';
import { DownOutlined, UpOutlined, } from '@ant-design/icons-vue';
import { FilterItem } from '@/features/FilterItem';
const searchStore = useSearchStore()
const shelf = ref(0)
const shelf_open = ref(false)

const class_of_service = ref<number>(0)
const class_open = ref(false)

const seats = ref<number>(0)
const seats_open = ref<boolean>(false)
const class_seats = ref(false)

const cost_from = ref<number>(0)
const cost_to = ref<number>(0)
const cost_open = ref(false)

const departure_from = ref<number>(0)
const departure_to = ref<number>(0)
const departure_open = ref(false)

const arrival_from = ref<number>(0)
const arrival_to = ref<number>(0)
const arrival_open = ref(false)


const handlechange = (e: any) => {
    searchStore.setShelf(e.target.value)
}
const radioStyle = reactive({
    display: 'flex',
    height: '20px',
    lineHeight: '20px',
    colorPrimary: '#F37022'
});

</script>

<template>
    <div class="flex max-h-[500px]">
        <a-divider type="vertical" class="bg-yellow h-full w-[3px] rounded"></a-divider>
        <div class="flex flex-col content-center gap-3 w-[300px]">
            <div class="flex justify-between items-center">
                <p class="border-b-4 border-yellow rounded">Фильтры</p>
                <a-button type="link" class="text-figma-grey">Очистить</a-button>
            </div>
            <div class="flex flex-col gap-3">
                <a-config-provider :theme="{
                    components: {
                        Radio: {
                            colorPrimary: '#F37022',
                        },
                    },
                }">
                    <FilterItem v-model="shelf_open">
                        <template #title>
                            <p>Полка</p>
                        </template>
                        <template #body v-if="shelf_open">
                            <a-radio-group v-model:value="shelf" name="radioGroup" @change="handlechange" class="ml-4">
                                <a-radio :style="radioStyle" :value="0">Все</a-radio>
                                <a-radio :style="radioStyle" :value="1">Верхняя</a-radio>
                                <a-radio :style="radioStyle" :value="2">Нижняя</a-radio>
                            </a-radio-group>
                        </template>
                    </FilterItem>

                    <FilterItem v-model="class_open">
                        <template #title>
                            <p>Класс обслуживания</p>
                        </template>
                        <template #body v-if="class_open">
                            <a-radio-group v-model:value="class_of_service" name="radioGroup" @change="handlechange"
                                class="ml-4">
                                <a-radio :style="radioStyle" :value="0">Все</a-radio>
                                <a-radio :style="radioStyle" :value="1">Купе</a-radio>
                                <a-radio :style="radioStyle" :value="2">Платцкарт</a-radio>
                            </a-radio-group>
                        </template>
                    </FilterItem>

                    <FilterItem v-model="seats_open">
                        <template #title>
                            <p>Наличие мест</p>
                        </template>
                        <template #body v-if="seats_open">
                            <a-radio-group v-model:value="seats" name="radioGroup" @change="handlechange" class="ml-4">
                                <a-radio :style="radioStyle" :value="0">Все</a-radio>
                                <a-radio :style="radioStyle" :value="1">Активные</a-radio>
                                <a-radio :style="radioStyle" :value="2">Лист ожидания</a-radio>
                            </a-radio-group>
                        </template>
                    </FilterItem>

                    <FilterItem v-model="cost_open">
                        <template #title>
                            <p>Стоимость, ₽</p>
                        </template>
                        <template #body v-if="cost_open">
                            <div class="flex flex-col gap-2 ml-4 transition">
                                <label>
                                    От:
                                    <input type="number" class='rounded p-1' :value="cost_from" />
                                </label>

                                <label for="cost_to">До:
                                    <input type="number" class='rounded p-1' :value="cost_to" />

                                </label>
                            </div>
                        </template>
                    </FilterItem>

                    <FilterItem v-model="departure_open">
                        <template #title>
                            <p>Отправление</p>
                        </template>
                        <template #body v-if="departure_open">
                            <div class="flex flex-col gap-2 ml-4 transition">
                                <label>
                                    С:
                                    <input type="number" class='rounded p-1' :value="cost_from" />
                                </label>

                                <label for="cost_to">
                                    По:
                                    <input type="number" class='rounded p-1' :value="cost_to" />
                                </label>
                            </div>
                        </template>
                    </FilterItem>



                </a-config-provider>

            </div>
        </div>
    </div>
</template>
