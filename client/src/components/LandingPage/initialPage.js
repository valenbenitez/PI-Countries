import React from "react";
import {NavLink} from "react-router-dom"

export default function initPage(){
    return(
        <div>
            <div>
                <h1>Welcome</h1>
            </div>
            <div>
               <NavLink to={'/countries'}><button>Go to home</button></NavLink>
            </div>
        </div>
    )
}