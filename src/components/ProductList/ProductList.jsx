import React, {useState} from 'react';
import './ProductList.css';
import { Button, Checkbox, Form, Input } from 'antd';
import {useTelegram} from "../../hooks/useTelegram";
const {user, onClose} = useTelegram();


const ProductList = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your telegram name</label>
                <input value={user?.username}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Your Name</label>
                <input className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Согласен на обработку личной информации</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ProductList;
