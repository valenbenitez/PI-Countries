import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./NavBar.css"

export default function NavBar() {
    
    return(
        <div className="navBarConteiner">
            {/* <nav> */}
                <div className="navCountries">Countries</div>
                <div><Link className="lin" to='/countries'>Home</Link></div>
                <div><Link className="lin" to='/create'>Crear actividad</Link></div>
                <SearchBar/>
            {/* </nav> */}
        </div>
    )
}