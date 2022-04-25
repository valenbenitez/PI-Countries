import React, { /*Component*/ useEffect, useState } from "react";
import { /*connect*/ useDispatch, useSelector } from "react-redux";
import { filterByCont, getActivities, getAllCountries, orderByName } from '../redux/actions/index'
import CountryCard from "../CountryCard/index";
import { orderByPop } from "../redux/actions/index";

export default function Countries() {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const activities = useSelector(state => state.activities)
    const [, setOrder] = useState('')
    const [countrie, setCountries] = useState('All')

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

    function handleSelectCont(e){
        // e.preventDefault()
        dispatch(filterByCont(e.target.value))
        setCountries(e.target.value)
    }
    // console.log(this.props.id)
    return (
        <div>

            <div>
                <span>Order by population</span>
                <select onChange={(e) => handleSelectPop(e)} >
                    <option>All</option>
                    <option value='asc'>ASC</option>
                    <option value='desc'>DESC</option>
                </select>
            </div>

            <div>
                <span>Order by name</span>
                <select onChange={(e) => handleSelectName(e)}>
                    <option>All</option>
                    <option value='az'>A-Z</option>
                    <option value='za'>Z-A</option>
                </select>
            </div>

            <div>
                <label>Filter by continent</label>
                <select value={countrie} onChange={(e)=> handleSelectCont(e)}>
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
                <select>
                    {activities.length && activities.map(el =>{
                       return( <option value={el.id}>{el.name}</option>)
                    })}
                </select>
            </div>

            <div>
                {countries && countries.map((coun) => (
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
