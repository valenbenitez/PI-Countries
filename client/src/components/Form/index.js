import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import NavBar from '../NavBar/Navbar'
import { getAllCountries, postActivity } from '../redux/actions'
// import { useEffect } from 'react'


const Form = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector(state => state.countries)

    //creo que no seria necesario ya que los countries ya se encuentran en la bd
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    // useEffect(()=>{
    // dispatch(postActivity(input))
    // }[])

    //     valor, cambiarValor
    // const [nombre, setName] = useState({ filed: "" })

    // const [dificultad, setDificultad] = useState({ filed: "" })

    // const [duracion, setDuracion] = useState({ filed: "" })

    // const [temporada, setTemporada] = useState({ filed: "" })

    // const [paisesElegidos, setPaises] = useState({ filed: [] })

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
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <br />
                    <InputForm
                        tipo="text"
                        label="Nombre de actividad"
                        placeholder="Indique el nombre de la actividad..."
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                    // error="No debe incluir numeros ni caracteres especiales :/"
                    />

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

                    <InputForm
                        tipo="number"
                        label="Duracion (en hs)"
                        placeholder="Indique las horas que desea..."
                        name="duracion"
                        value={input.duracion}
                        onChange={handleChange}
                    // error="No debe incluir numeros ni caracteres especiales :/"
                    />


                    <select
                        name="temporada"
                        value={input.temporada}
                        onChange={(e) => handleChange(e)}
                    >
                        <option>Estacion</option>
                        <option value={"winter"}>Winter/Invierno</option>
                        <option value={"spring"}>Spring/Primavera</option>
                        <option value={"summer"}>Summer/Verano</option>
                        <option value={"autumn"}>Autumn/Otoño</option>
                    </select> <br />

                    <select onChange={e => handleSelect(e)}>
                        <option>Paises</option>
                        {countries.map((pai) => (
                            <option value={`${pai.id},${pai.name}`}>{pai.name}</option>
                        ))}
                    </select>
                            {/* NO MUESTRA NOMBRE */}
                    <div>
                        {input.Country.map(el => <button type='reset' onClick={() => handleDelete(el)}>X</button>)}
                    </div>
                    <input type='submit' value='Submit'></input>

                </form>
            </div>
        </div>
    )
}

export default Form