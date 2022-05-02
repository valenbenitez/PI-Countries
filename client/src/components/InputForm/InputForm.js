import React from "react";
import './InputForm.css'
import { Form } from "react-bootstrap";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const InputForm = ({ tipo, label, placeholder, name, error, value, onChange, min, max, step }) => {

    if (tipo === "range") return (
        // <div>
        //     <div className="divInputForm">
        //         <label htmlFor="nombre">{label}</label>
        //         <input className="inputt" min={min} max={max} step={step} value={value} type={tipo} placeholder={placeholder} name={name} onChange={onChange} />
        //         <span>{value}</span>
        //     </div>
        // </div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>{label}</Form.Label>
                <Form.Control min={min} max={max} step={step} type={tipo} placeholder={placeholder} name={name} value={value} onChange={onChange} />
                {/* <Form.Text className="text-muted">
                    <p>{error}</p>
                </Form.Text> */}
                <span>Valor: {value}</span>
            </Form.Group>
        </Form>

    )

    return (
        // <main>
        //     <label htmlFor="nombre">{label}</label> <br />
        //     <div className="divInputForm">
        //         <input className="inputt" value={value} type={tipo} placeholder={placeholder} name={name} onChange={onChange} />
        //     </div>
        //     <p>{error}</p>
        // </main>

        // <Form>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">

        //         <Form.Label>{label}</Form.Label>
        //         <Form.Control type={tipo} placeholder={placeholder} name={name} value={value} onChange={onChange} />
        //         {/* <Form.Text className="text-muted">
        //             <p>{error}</p>
        //         </Form.Text> */}

        //     </Form.Group>
        // </Form>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label={label } variant="standard" name={name} value={value} onChange={onChange} />
            <p>{error}</p>
        </Box>
    )
}

export default InputForm