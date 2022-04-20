import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountry } from "../redux/actions/index"
import './detail.css'

const CountryDetail = (props) => {

    var dispatch = useDispatch()
    var country = useSelector((state) => state.country)
    var actividades = useSelector((state) =>state.activities)

    React.useEffect(() => {
        dispatch(getCountry(props.match.params.id))
    }, [country])

    console.log(props.match)

    return (
        <div>
            <img className="banderaDetail" src={country.flag} alt="image not found"/>
            <h3>Pais: {Object.keys(country).length && country.name}</h3>
            <br />
            <div>
                <h3>Capital: {Object.keys(country).length && country.capital}</h3>
                <br />
                <h3>Id: {Object.keys(country).length && country.id}</h3>
                <br />
                <h3>Continente: {Object.keys(country).length && country.continent}</h3>
                <br />
                <h3>Poblacion: {Object.keys(country).length && country.poblacion}</h3>
                <br />
                <h3>Area: {Object.keys(country).length && country.area} km²</h3>
                <br/>
                <h3>Actividades: {actividades.length && actividades.name}</h3>
            </div>

        </div>
    )
}

export default CountryDetail