import React from "react";
import './InputForm.css'

const InputForm = ({ tipo, label, placeholder, name, error, value, onChange, min, max, step }) => {

    if (tipo === "range") return (
        <div>
            <div className="divInputForm">
                <label htmlFor="nombre">{label}</label> 
                <input className="inputt" min={min} max={max} step={step} value={value} type={tipo} placeholder={placeholder} name={name} onChange={onChange} />
                <span>{value}</span>
            </div>
        </div>
    )

    return (
        <main>
            <label htmlFor="nombre">{label}</label> <br/>
            <div className="divInputForm">
                <input className="inputt" value={value} type={tipo} placeholder={placeholder} name={name} onChange={onChange} />
            </div>
            <p>{error}</p>
        </main>
    )
}

export default InputForm