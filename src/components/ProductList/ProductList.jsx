import React, {useState} from 'react';
import './ProductList.css';
import { Button, Checkbox, Form, Input } from 'antd';
import {useTelegram} from "../../hooks/useTelegram";
const axios = require('axios');
const {user, onClose} = useTelegram();


const ProductList = () => {
    const getData=()=>{
        fetch('https://localhost:7136/api/User')
            .then((response) => console.log(response.json()));

    }
    const onSubmit=()=>{
        alert("Форма заполнена, ваши данные отправлены")
    }
    const [name, setName]=useState('')
    const [firstAgree, setFirstAgree]=useState(false)
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your telegram name</label>
                <input value={user?.username}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Your Name</label>
                <input  onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div style={{marginLeft:"30px"}} className="mb-3 form-check">
                <input onChange={()=>{setFirstAgree(true)}}  type="checkbox" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Согласен на обработку личной информации</label>
            </div>
            <div style={{marginLeft:"30px"}} className="mb-xl-4 form-check">
                <input onChange={()=>{setFirstAgree(true)}}  type="checkbox" className="form-check-input"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Согласен на отправку личной информации</label>
            </div>
            <button style={{marginLeft:"30px"}} onClick={onSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ProductList;
