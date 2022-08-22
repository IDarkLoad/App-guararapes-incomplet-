import React from "react";
import user from "../images/user.png";


const MaterialCard =(props) => {
    const {id, descricao, marca, valor, preço} = props.contact;
    return (
        <div className="ui abs">
            <img className="ui avatar image" src={user} alt="user" style={{width:"5em", height:"5em"}} />
            <div className="content">
                <div className="header">{descricao}</div>
                <div>{marca}</div>
                <div>{valor}</div>
                <div>{preço}</div>
            </div>
            <button className="ui button red" 
            style={{marginTop: '8px',}}
            onClick={() => props.clickHander(id)}
            >Excluir</button>
        </div>
    );

};

export default MaterialCard;