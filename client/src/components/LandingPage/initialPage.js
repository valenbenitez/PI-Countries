import React from "react";
import { NavLink } from "react-router-dom"
import './LandingPage.css'

export default function initPage() {
    return (
        // <div className="divCont">
        //     <div>
        //         <div>
        //             <h1>Welcome</h1>
        //         </div>
        //         <div>
        //             <NavLink className="divCont" to={'/countries'}><button>Go!</button></NavLink>
        //         </div>
        //     </div>
        // </div>
        <div className="divCont">
            <h1 className="titleB">Bienvenidos</h1>
            <NavLink to={'/countries'}>
                <button className="buttonG">Go!</button>
            </NavLink>
        </div>
    )
}