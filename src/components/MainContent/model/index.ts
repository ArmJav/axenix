export interface BagSkelet {
    items: Bag[] | null,
    number_of_objects: number,
}

export interface Bag {
    id: number,
    courier_name: string,
    name: string,
    sum_count:number,
    status:number,
}

export interface IdName {
    id: number,
    name: string
}

export interface GetBag {
    id: number
    courier: IdName 
    name: string, //название сумки
    products: IdName[],//приходит из сниппетов по продуктам
    count: number[],//соответствуеющее количество товаров, для id == 4 количество 2 и т.д.
    status: number
}

export function check_status(status: number) {
    if (status === 1) {
        return "Активный"
    }
    else {
        return "Неактивный"
    }
}