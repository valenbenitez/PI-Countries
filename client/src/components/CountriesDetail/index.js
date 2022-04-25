import React from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../NavBar/Navbar"
import { getCountry, /*getCountryQuery, searchCountry*/ } from "../redux/actions/index"
import './detail.css'

const CountryDetail = (props) => {

    var dispatch = useDispatch()
    var country = useSelector((state) => state.country)
    // var actividades = useSelector((state) =>state.activities)

    // console.log(country)

    React.useEffect(() => {
        // console.log(country)
        dispatch(getCountry(props.match.params.id))
        // dispatch(searchCountry(props.match.params.id))
    }, [country, dispatch, props.match.params.id]) //eslint-disable-line

    // console.log(props.match)
    // if (!Object.keys(country).length) {
    //     return <h1>loading</h1>
    // }

    return (
        <div>
            <NavBar />
            <img className="banderaDetail" src={country.flag} alt="flag not found" />
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
                <br />
                {/* <h3>Actividades: {country.activities.length > 0 && country.activities.map(a => (
                    <p key={a.id}>{a.name}</p>
                ))}</h3> */}
                <h3>Actividades: {country.activities ? country.activities.map(a => (
                    <p key={a.id}>{a.name}</p>
                ))
                    : <p>Loading...</p>
            }</h3>
            </div>

        </div>
    )
}

export default CountryDetail