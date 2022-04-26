import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import NavBar from '../NavBar/Navbar'
import { getAllCountries, postActivity } from '../redux/actions'
// import { useEffect } from 'react'
import './form.css'

// name: "",
// dificultad: 1,
// duracion: "",
// temporada: "",
// Country: [],

function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "Debe completar este campo"
    } else if (parseInt(input.name)) {
        errors.name = "No number"
    }
    if (!input.duracion) {
        errors.duracion = "Debe completar este campo"
    }
    if (!input.temporada) {
        errors.temporada = "Debe completar este campo"
    }
    if (!input.Country.length > 0) {
        errors.Country = "Debe completar este campo"
    }
    return errors
}

const Form = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector(state => state.countries)
    const [errors, setErrors] = useState('')

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);


    const [input, setInput] = useState({
        name: "",
        dificultad: 1,
        duracion: "",
        temporada: "",
        Country: [],
    })


    //FN   // handleChange   //handleSelect   //handleSubmit

    function handleDelete(el) {
        setInput({
            ...input,
            Country: input.Country.filter(e => e !== el)
        })
    }

    function handleChange(e) {
        // e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e) {
        setInput({
            ...input,
            Country: [...input.Country, e.target.value.split(',')[0]]
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name === "" || input.duracion === "" || input.temporada === "" || input.Country.length === 0) return alert('Completar todos los campos porfavor')

        dispatch(postActivity(input))
        alert('Actividad creada correctamente :)')
        setInput({
            name: "",
            dificultad: 1,
            duracion: "",
            temporada: "",
            Country: [],
        })
        dispatch(getAllCountries())
        history.push("/countries")
    }

    return (
        <div>
            <NavBar />
            <div className='divForm'>
                <div >
                    <form className='formIn' onSubmit={(e) => handleSubmit(e)}>
                        <br />
                        <div>
                            {errors.name && <label className='labelError'>{errors.name}</label>}
                            <InputForm
                                tipo="text"
                                label="Nombre de actividad"
                                placeholder="Indique el nombre de la actividad..."
                                name="name"
                                value={input.name}
                                onChange={handleChange}
                            // error="No debe incluir numeros ni caracteres especiales :/"
                            />

                        </div>
                        <div>
                            <InputForm
                                tipo="range"
                                min="1"
                                max="5"
                                step="1"
                                label="Dificultad"
                                placeholder="Indique nivel de dificultad..."
                                name="dificultad"
                                value={input.dificultad}
                                onChange={handleChange}

                            // error="No debe incluir numeros ni caracteres especiales :/"
                            />
                        </div>

                        <div>
                            {errors.duracion && <label className='labelError'>{errors.duracion}</label>}
                            <InputForm
                                tipo="number"
                                label="Duracion (en hs)"
                                placeholder="Indique las horas que desea..."
                                name="duracion"
                                value={input.duracion}
                                onChange={handleChange}
                            // error="No debe incluir numeros ni caracteres especiales :/"
                            />
                        </div>
                        <div>
                            {errors.temporada && <label className='labelError'>{errors.temporada}</label>}
                            <label>Estacion: </label>
                            <select
                                name="temporada"
                                value={input.temporada}
                                onChange={(e) => handleChange(e)}
                            >
                                {/* <option>Estacion</option> */}
                                <option value={"winter"}>Winter/Invierno</option>
                                <option value={"spring"}>Spring/Primavera</option>
                                <option value={"summer"}>Summer/Verano</option>
                                <option value={"autumn"}>Autumn/Otoño</option>
                            </select> <br />
                        </div>



                        <div>
                            <label>Paises: </label>
                            <select onChange={e => handleSelect(e)}>
                                {/* <option>Paises</option> */}
                                {countries.map((pai) => (
                                    <option value={`${pai.id},${pai.name}`}>{pai.name}</option>
                                ))}
                            </select>
                            {/* NO MUESTRA NOMBRE */}
                            <div>
                                {input.Country.map(el => <button type='reset' onClick={() => handleDelete(el)}>{el} | X</button>)}
                            </div>
                            <input className='buttonSubmit' type='submit' value='Submit'></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form