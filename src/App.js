import React, {useEffect} from 'react';

import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import {Route, Routes} from 'react-router-dom'
const tg=window.Telegram.WebApp
const App = () => {
    useEffect(()=>{
        tg.ready();
    }, [])
    const onClose=()=>{
        tg.close()
    }
    return (
        <div>

            <Header/>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
};

export default App;
