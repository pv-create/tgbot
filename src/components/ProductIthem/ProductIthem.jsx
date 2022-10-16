import React from 'react';
import Button from "../Button/Button";
import './ProductIthem.css';
import soup from '/Users/pavelvilkov/Desktop/projects/node/tgbot/client/src/assets/pictures/soup.jpg'

const ProductIthem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    {/*<img src="..." className="card-img-top" alt="..."/>*/}
                    <h5 className="card-title">{product.title}</h5>
                    {product.description}
                    <div>
                        <span>Стоимость: <b>{product.price}</b></span>
                    </div>
                </div>
                <Button className={'add-btn'} onClick={onAddHandler}>
                    Добавить в корзину
                </Button>
            </div>



        </>



    );
};

export default ProductIthem;
