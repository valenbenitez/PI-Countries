import React from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../NavBar/Navbar"
import { getCountry, resetCountryDetail /*getCountryQuery, searchCountry*/ } from "../redux/actions/index"
import './detail.css'
import { deleteAct } from "../redux/actions/index"
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"

const CountryDetail = (props) => {

    var dispatch = useDispatch()
    var country = useSelector((state) => state.country)
    var history = useHistory()
    // var activities = useSelector((state)=>state.activities)

    React.useEffect(() => {
        dispatch(getCountry(props.match.params.id))

        return () => { dispatch(resetCountryDetail()) }
    }, []) //eslint-disable-line

    function onClickDel(e){
        dispatch(deleteAct(e.target.value))
        alert('Actividad borrada')
        history.push('/countries')
    }
    // React.useEffect(() => {
    //      console.log(country)
    //      dispatch(getCountry(props.match.params.id))
    //     dispatch(getCountry(props.match.params.id))

    // }, [country, dispatch, props.match.params.id]) //eslint-disable-line

    // console.log(props.match)
    // if (!Object.keys(country).length) {
    //     return <h1>loading</h1>
    // }

    return (
        <div className="div1">
            <NavBar />
            <div className="detailContainer">


                <div className="detailContent">
                <img className="banderaDetail" src={country.flag} alt="flag not found" />
                    <h3 className="detailC">Pais: {Object.keys(country).length && country.name}</h3>

                    <h3 className="detailC">Capital: {Object.keys(country).length && country.capital}</h3>

                    <h3 className="detailC">ID: {Object.keys(country).length && country.id}</h3>

                    <h3 className="detailC">Continente: {Object.keys(country).length && country.continent}</h3>

                    <h3 className="detailC">Poblacion: {Object.keys(country).length && country.poblacion}</h3>

                    <h3 className="detailC">Area: {Object.keys(country).length && country.area} km??</h3>

                    <div >
                        {country.activities ? country.activities.map(a => (
                            <div className="Pp">
                                <h3>Actividades: </h3>
                                <p key={a.id}>Nombre de la act: {a.name}</p>
                                <p key={a.id}>Dificultad: {a.dificultad}</p>
                                <p key={a.id}>Duracion: {a.duracion}HS</p>
                                <p key={a.id}>Temporada: {a.temporada}</p>
                                <Button variant="outline-danger" value={a.id} onClick={(e) => onClickDel(e)}>Borrar actividad</Button>
                            </div>
                        ))
                            : <p>Loading...</p>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CountryDetail



// dificultad: 3,
//           duracion: 6,
//           temporada: