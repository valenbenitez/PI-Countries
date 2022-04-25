import React from "react";


const InputForm = ({ tipo, label, placeholder, name, error, value, onChange, min, max, step }) => {

    if (tipo === "range") return (
        <div>
            <label htmlFor="nombre">{label}</label> <br/>
            <input min={min} max={max} step={step} value={value} type={tipo} placeholder={placeholder} name={name} onChange={onChange} />
            <span>{value}</span>
        </div>
    )

    return (
        <main>
            <label htmlFor="nombre">{label}</label>
            <div>

                <input value={value} type={tipo} placeholder={placeholder} name={name} onChange={onChange} />
            </div>
            <p>{error}</p>
        </main>
    )
}

export default InputForm