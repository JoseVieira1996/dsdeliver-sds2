import axios from "axios";

const API_URL = 'https://jose-aulas-sds2.herokuapp.com';

//const API_URL = 'http://192.168.15.3:8080';

export function fetchOrders (){
    return axios (`${API_URL}/orders`);
}

export function confirmDelivery (orderId: number){
    return axios.put (`${API_URL}/orders/${orderId}/delivered`);
}










