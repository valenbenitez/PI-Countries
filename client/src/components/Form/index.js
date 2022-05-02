import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import NavBar from '../NavBar/Navbar'
import { getAllCountries, postActivity } from '../redux/actions'
// import Button from "react-bootstrap/Button"
// import Modal1 from '../Modal/Modal'
import './form.css'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
    if (input.duracion < 1) {
        errors.duracion = "Valor debe ser mayor a 1"
    }
    if (input.duracion > 24) {
        errors.duracion = "Debe ser menor a 24hs"
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

    // const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);



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
        if (input.name === "" || input.duracion === "" || input.temporada === "" || input.Country.length === 0 || input.duracion < 1 || input.duracion > 24) return alert('Completar todos los campos porfavor')

        dispatch(postActivity(input))
        alert('Actividad creada correctamente')
        // handleShow()
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

        //     <React.Fragment>
        //     <CssBaseline />
        //     <Container fixed>
        //       <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        //     </Container>
        //   </React.Fragment>

        <React.Fragment>
            <CssBaseline />
            <NavBar />
            {/* <div className='divForm'> */}
            <Container fixed>
                <Box sx={{ bgcolor: 'darkgray', height: '120vh' }}>
                    {/* <div > */}
                    <form /*className='formIn'*/ className='Container' onSubmit={(e) => handleSubmit(e)}>
                        <br />
                        <div className='DivX'>
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
                        <div className="rangeFrm DivX">
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

                        <div className='DivX'>
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
                        <div className='DivX'>
                            {errors.temporada && <label className='labelError'>{errors.temporada}</label>}
                            <label>Estacion: </label>

                            <select className="optionCn"
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



                        <div className='DivX'>
                            {/* <label>Paises: </label> */}

                            {/* <select className="optionCn" onChange={e => handleSelect(e)}> */}
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Paises</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    // value={id}
                                    onChange={e => handleSelect(e)}
                                    label="Age"
                                >
                                    {/* <option>Paises</option> */}
                                    {countries.map((pai) => (
                                        <MenuItem value={`${pai.id},${pai.name}`}>{pai.name}</MenuItem>
                                    ))}
                                </Select>
                            <div className='btnP'>
                                {input.Country.map(el => <Button variant="outlined" color="error" type='reset' onClick={() => handleDelete(el)}>{el} | X</Button>)}
                            </div>
                            </FormControl>
                            {/* </select> */}


                            {/* <input className='buttonSubmit' type='submit' value='Submit'></input> */}
                            <div className='DivX'>
                                <Button className='save' type='submit' variant="contained" endIcon={<SendIcon />}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </form>
                    {/* </div> */}
                </Box>
            </Container>
            {/* </div> */}
        </React.Fragment>

    )
}

export default Form
{/* <Modal1
    show={show}
    titulo={"Countries"}
    contenido={"Actividad borrada correctamente"}
    button1={"Guardar cambios"} onClick={handleClose}
/> */}