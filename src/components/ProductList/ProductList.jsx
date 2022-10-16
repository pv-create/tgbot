import React, {useState} from 'react';
import './ProductList.css';
import ProductIthem from "../ProductIthem/ProductIthem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import ProductItem from "../ProductIthem/ProductIthem";

const products = [
    {id: '1', title: 'Суп', price: 500, description: 'Рыбный с фарелью'},
    {id: '2', title: 'Котлеты', price: 120, description: 'Из говядины'},
    {id: '3', title: 'Бургер 2', price: 500, description: 'С курицей'},
    {id: '4', title: 'Пицца 8', price: 1220, description: 'Маргаритта с сыром'},
    {id: '5', title: 'Суши 3', price: 500, description: 'С лососем и Фарелью'},
    {id: '6', title: 'Курица 7', price: 600, description: 'В панировке с соусом'},
    {id: '7', title: 'Картошка 4', price: 55, description: 'Жаренная с сырным соусом'},
    {id: '8', title: 'Картошка 5', price: 120, description: 'ЗЖаренная с томатным соусом'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://85.119.146.179:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductIthem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
