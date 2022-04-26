import React from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../NavBar/Navbar"
import { getCountry, resetCountryDetail /*getCountryQuery, searchCountry*/ } from "../redux/actions/index"
import './detail.css'

const CountryDetail = (props) => {

    var dispatch = useDispatch()
    var country = useSelector((state) => state.country)
    // var actividades = useSelector((state) =>state.activities)

    // console.log(country)

    // React.useEffect(()=>{
    //     dispatch(getCountry(props.match.params.id))

    //     return () => { dispatch(resetCountryDetail()) }
    // },[]) //eslint-disable-line

    React.useEffect(() => {
        // console.log(country)
        // dispatch(getCountry(props.match.params.id))

        dispatch(getCountry(props.match.params.id))

    }, [country, dispatch, props.match.params.id]) //eslint-disable-line

    // console.log(props.match)
    // if (!Object.keys(country).length) {
    //     return <h1>loading</h1>
    // }

    return (
        <div className="div1">
            <NavBar />
            <div className="detailContainer">

                <img className="banderaDetail" src={country.flag} alt="flag not found" />

                <div className="detailContent">
                    <h3 className="nameDetail">Pais: {Object.keys(country).length && country.name}</h3>

                    <h3 className="detailC">Capital: {Object.keys(country).length && country.capital}</h3>

                    <h3 className="detailC">Id: {Object.keys(country).length && country.id}</h3>

                    <h3>Continente: {Object.keys(country).length && country.continent}</h3>

                    <h3 className="detailC">Poblacion: {Object.keys(country).length && country.poblacion}</h3>

                    <h3 className="detailC">Area: {Object.keys(country).length && country.area} km²</h3>

                    <h3 className="detailC">Actividades: {country.activities ? country.activities.map(a => (
                        <p key={a.id}>{a.name}</p>
                    ))
                        : <p>Loading...</p>
                    }</h3>
                </div>

            </div>
        </div>
    )
}

export default CountryDetail