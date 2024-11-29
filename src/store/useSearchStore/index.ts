import { ref } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  
  //Product param
  const shelf = ref<number>(0)
  const class_of_service = ref<number>(0)
  const seats = ref<number>(0)
  const cost_from = ref<number>(0)
  const cost_to = ref<number>(0)
  const departure_from = ref<number>(0)
  const departure_to = ref<number>(0)
  const arrival_from = ref<number>(0)
  const arrival_to = ref<number>(0)
  
  const setArrivalTo = (value: number) => {
    arrival_to.value = value;
  };

  const setArrivalFrom = (value: number) => {
    arrival_from.value = value;
  };

  const setDepartureto = (value: number) => {
    departure_to.value = value;
  };

  const setDepartureFrom = (value: number) => {
    departure_from.value = value;
  };
  const setSeats = (value: number) => {
    seats.value = value;
  };
  const setShelf = (value: number) => {
    shelf.value = value;
  };

  const setClassOfService = (value: number) => {
    class_of_service.value = value
  }

  const setCostFrom = (value: number) => {
    cost_from.value = value
  }

  const setCostTo = (value: number) => {
    cost_to.value = value
  }





  const generateQuery = () => {
    // const arrayToQueryString = (array: number[]) => array.join(",");
    let queryParams = ''

     // seats.value ? queryParams += '&seats='+arrayToQueryString(seats.value) : '';
    // type.value ? queryParams += `&type=${type.value}` : '';
    shelf.value ? queryParams += `&shelf=${shelf.value}` : '';
    seats.value ? queryParams += `&seats=${seats.value}` : '';
    class_of_service.value ? queryParams += `&class=${class_of_service.value}` : '';
    
    return queryParams;
  };

  const $clear = () => {
    
  }

  return {
    setArrivalFrom,
    setArrivalTo,
    setClassOfService,
    setCostFrom,
    setCostTo,
    setDepartureFrom,
    setDepartureto,
    setSeats,
    setShelf,
    generateQuery,
    $clear 
  };
});
