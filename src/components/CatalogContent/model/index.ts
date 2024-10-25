import type { IdName } from "@/api/model"

export interface ProductCatalog {
    id: number,
    type_product: string,
    type_snus_and_pod: number,
    brand: BrandBody | null,
    name: string,
    photo: string,
    nicotine: number,
    flavour: IdName[],
    special: number,
    rating: number,
    sale: number,
    sale_amount: number,
    price: number,
    amount: number,
    import: number,
    new: number
}

export interface BrandBody {
    id: number | null,
    name_eng: string,
    name_rus: string
}

export interface SearchProduct { 
    id: number,
    name: string,
    type_product: string,
    price: number,
    amount: number
}

export interface ProductsSkelet {
    number_of_objects: number,
    products: SearchProduct[] | null
}

export function typeProduct(type: string) {
    if ( type === "pod") {
        return "Электронная сигарета"
    }
    else if (type === "snus") {
        return "Снюс"
    }
    else if ( type === "liquid") {
        return "Жидкость"
    }
}