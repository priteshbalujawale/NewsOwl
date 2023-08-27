import React from "react";
import loader from '../loader.gif'

export default function Loader(props){
    return(
        <>
        <div className="loader container text-center">
        <img src={loader} alt="" />
        </div>
        </>
    )
}