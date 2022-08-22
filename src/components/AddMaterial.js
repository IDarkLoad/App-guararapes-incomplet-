import React, { useState } from "react";

function AddMaterial ({ AddMaterialHandler }) {
    const [descricao, setDescricao] = useState("")
    const [marca, setMarca] = useState("")
    const [valor, setValor] = useState("")
    const [preço, setPreço] = useState("")

    const handleAdd = () => {
        if (descricao === "" && marca === "" && valor === "" && preço === "") {
            alert("Todos os Preenchimentos são obrigatórios");
            return
        }
        AddMaterialHandler({ descricao, marca, valor, preço});
        setDescricao("")
        setMarca("")
        setValor("")
        setPreço("")
    }

    return (
        <div className="ui main">
            <h2>Space test</h2>
            <h2>Adicionar Item</h2>
            <div className="ui form">
                <div className="field">
                    <label>Descrição</label>
                    <input type="text"                       
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="field">
                    <label>Marca</label>
                    <input type="text"
                        placeholder="Marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)} 
                        />
                </div>
                <div className="field">
                    <label>Quantidade</label>
                    <input type="number"
                        placeholder="Quantidade"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} 
                        />
                </div>
                <div className="field">
                    <label>Preço</label>
                    <input type="text"
                        placeholder="Preço"
                        value={preço}
                        onChange={(e) => setPreço(e.target.value)} 
                        />
                </div>
                <button className="ui button green" onClick={handleAdd}>Adicionar</button>
            </div>
        </div>
    );
};

export default AddMaterial;