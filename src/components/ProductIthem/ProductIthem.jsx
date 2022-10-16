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

            <div className={'product ' + className}>
                <div className={'img'}/>
                <div className={'title'}>{product.title}</div>
                <div className={'description'}>{product.description}</div>
                <div className={'price'}>
                    <span>Стоимость: <b>{product.price}</b></span>
                </div>
                <Button className={'add-btn'} onClick={onAddHandler}>
                    Добавить в корзину
                </Button>
            </div>
             {/*<div className={'product ' + className}>*/}
             {/*   <div className={'img'}>*/}
             {/*        <img src={soup}/>*/}
             {/*    </div>*/}
             {/*   <div className={'title'}>{product.title}</div>*/}
             {/*    <div className={'description'}>{product.description}</div>*/}
             {/*    <div className={'price'}>*/}
             {/*        <span>Стоимость: <b>{product.price}</b></span>*/}
             {/*    </div>*/}
             {/*   <Button className={'add-btn'} onClick={onAddHandler}>*/}
             {/*        Добавить в корзину*/}
             {/*    </Button>*/}
             {/*</div>*/}
        </>



    );
};

export default ProductIthem;
