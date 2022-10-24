import React from 'react';
import Button from "../Button/Button";
import './ProductIthem.css';

const ProductIthem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <>
            <div className="card" style={{width:'14rem'}}>
                <div className="card-body">
                    <img src="https://s1.eda.ru/StaticContent/Photos/120131084043/141113143428/p_O.jpg" className="card-img-top" alt="..."/>
                    <h5 className="card-title">{product.title}</h5>
                    {product.description}
                    <div>
                        <span>Стоимость: <b>{product.price}</b></span>
                    </div>
                    <Button className={'add-btn'} onClick={onAddHandler}>
                        Добавить в корзину
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductIthem;
