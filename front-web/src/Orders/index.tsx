import React from "react";
import './styles.css';
//import { ReactComponent as Logo} from './logo.svg';
import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductsList";
import {OrderLocationdata, Product} from "./types";
import {useEffect,useState} from "react";
import { fechProducts } from "../api";
import OrderLocation from "./OrderLocation";





function Orders(){
    const [products, setProducts] = useState<Product[]>([]); 
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect (() => {
        fechProducts()
        .then(response => setProducts (response.data))
        .catch(error => console.log(error))
    }, []);

    return(
        <div className="orders-conteiner">
            <StepsHeader />
            <ProductsList products = {products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )

}


export default Orders;