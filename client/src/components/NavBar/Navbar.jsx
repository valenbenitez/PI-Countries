import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./NavBar.css"

export default function NavBar() {
    
    return(
        <div className="navBarConteiner">
            {/* <nav> */}
                <div className="navCountries">Countries</div>
                <div><Link to='/countries'>Home</Link></div>
                <div><Link to='/create'>Crear actividad</Link></div>
                <SearchBar/>
            {/* </nav> */}
        </div>
    )
}