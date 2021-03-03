import React from 'react';
import "./index.css";
import Hero from './../hero/hero';

export default function index() {
    return (
        <div className="index">
            <div className="background_black"></div>
            <div className="cont_index"><Hero/></div>
            <div className="background_black"></div>
           
        </div>
    )
}
