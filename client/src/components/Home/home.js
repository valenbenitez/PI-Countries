import React, { /*Component*/ useEffect, useState } from "react";
import { /*connect*/ useDispatch, useSelector } from "react-redux";
import { filterByAct, filterByCont, getActivities, getAllCountries, orderByName } from '../redux/actions/index'
import CountryCard from "../CountryCard/index";
import { orderByPop } from "../redux/actions/index";
import { Paginacion } from "../Paginado/Paginacion";
import './home.css'

export default function Countries() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const activities = useSelector(state => state.activities)
    const [, setOrder] = useState('')

    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(10)

    const lastCountry = pagina * porPagina
    const firstCountry = lastCountry - porPagina

    const currentCountry = countries.slice(firstCountry, lastCountry)
    // const maximo = countries.length / porPagina
    const paginado = (numPage) => {
        setPagina(numPage);
    }

    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getActivities())
    }, [dispatch]) //eslint-disable-line


    function handleSelectPop(e) {
        e.preventDefault()
        dispatch(orderByPop(e.target.value))
        setOrder(e.target.value)
    }

    function handleSelectName(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setOrder(e.target.value)
    }

    function handleSelectCont(e) {
        // e.preventDefault()
        dispatch(filterByCont(e.target.value))
        // setCountries(e.target.value)
    }

    function handleSelectFilterAct(e) {
        dispatch(filterByAct(e.target.value))
    }

    function previousPage() {
        if (pagina > 1) {
            setPagina(pagina - 1)
        }
    }

    function nextPage() {
        let ultPage = Math.ceil(countries.length / porPagina)

        if (pagina < ultPage) {
            setPagina(pagina + 1)
        }

    }
    // console.log(this.props.id)
    return (
        <div >
            <div className="filtersAndSorts">
                <div>
                    <span>Order by population</span>
                    <select  onChange={(e) => handleSelectPop(e)} >
                        <option value='All' >All</option>
                        <option value='asc'>ASC</option>
                        <option value='desc'>DESC</option>
                    </select>
                </div>

                <div>
                    <span>Order by name</span>
                    <select onChange={(e) => handleSelectName(e)}>
                        <option value='All'>All</option>
                        <option value='az'>A-Z</option>
                        <option value='za'>Z-A</option>
                    </select>
                </div>

                <div>
                    <label>Filter by continent</label>
                    <select onChange={(e) => handleSelectCont(e)}>
                        <option value='All' >All</option>
                        <option value='Africa' >Africa</option>
                        {/* <option value='Antarctica'>Antartida</option> */}
                        <option value='Americas'>Americas</option>
                        <option value='Asia' >Asia</option>
                        <option value='Europe' >Europa</option>
                        <option value='Oceania' >Oceania</option>
                    </select>
                </div>

                <div>
                    <label>Filter by actividades</label>
                    <select onChange={(e) => handleSelectFilterAct(e)}>
                        <option value='All'>All</option>
                        {activities.length && activities.map(el => {
                            return (<option value={el.name}>{el.name}</option>)
                        })}
                    </select>
                </div>
            </div>
            <div className="divPag">
                <Paginacion
                    porPagina={porPagina}
                    countries={countries.length}
                    paginado={paginado}
                    previousPage={previousPage}
                    nextPage={nextPage}
                />
            </div>

            <div className="divGen">
                {countries && currentCountry.map((coun) => (
                    <CountryCard
                        id={coun.id}
                        name={coun.name}
                        continent={coun.continent}
                        flag={coun.flag}
                        capital={coun.capital}
                        subregion={coun.subregion}
                        area={coun.area}
                        poblacion={coun.poblacion}
                        actividades={coun.activities.name}
                    />
                ))}
            </div>


        </div>
    )

}

// export function mapStateToProps(state) {
//     return {
//         countries: state.countries
//     }
// }

// export const mapDispatchToProps = { getAllCountries }

// export default connect(mapStateToProps, mapDispatchToProps)(Countries);
