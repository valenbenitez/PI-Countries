import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../redux/actions";
import { useHistory } from "react-router-dom";
// import '/SearchBar.css'

export default function SearchBar() {

    const [buscar, setBuscar] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    function onSubmit(e){
        e.preventDefault()
        if(buscar.length === 0) return alert('Type name of country please')
        dispatch(searchCountry(buscar))
        history.push("/countries/"+buscar)
        setBuscar('')
    }

    function inputChange(e){
        // e.preventDefautl()
        setBuscar(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Search country' onChange={inputChange} value={buscar}></input>
            <input type='submit' value='Search'></input>
        </form>
    )
}

