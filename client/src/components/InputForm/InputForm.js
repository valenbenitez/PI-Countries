import React from "react";
import './InputForm.css'
import { Form } from "react-bootstrap";

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

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>{label}</Form.Label>
                <Form.Control type={tipo} placeholder={placeholder} name={name} value={value} onChange={onChange} />
                {/* <Form.Text className="text-muted">
                    <p>{error}</p>
                </Form.Text> */}

            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />

            </Form.Group> */}

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
        </Form>
    )
}

export default InputForm