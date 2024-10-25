import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

export interface IdName {
    id: number,
    name?: string,
    tg_tag?: string
}

interface DefaultAntOptions {
    label: string,
    value: number
}

export interface OrderCourier {
    id: number,
    name: string,
    satisfies: number,
    description: string
      
}


export function onlyID(data: IdName[]) {
    return data.map(item => (item.id))
}

export function change_options(data: IdName[]) {
    return data.map(item => ({
        label: item.name,
        value: item.id
    }))
}

export function label_in_id(data: DefaultAntOptions[]) {
    return data.map(item => ({
        name: item.label,
        id: item.value
    }))
}

export function status_change(params: number) {
    if (params == 1) {
        return "Заблокирован"
    }
    else {
        return "Работает"
    }
}

export function dist_to_name(data: IdName[]) {
    return data.map(item => (item.name))
}

export function dateToUnix(date: string): number {
    const parsedDate = new Date(date);
    return Math.floor(parsedDate.getTime() / 1000);
  }
  
  // Функция для конвертации Unix timestamp в дату
export  function unixToDate(timestamp: number): Dayjs {
    return dayjs.unix(timestamp);
  }

