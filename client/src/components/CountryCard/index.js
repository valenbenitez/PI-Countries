import React, { Component } from "react"
// import {connect} from "react-redux"
import { Link } from "react-router-dom"
import './card.css'
// import { Card, CardGroup, Image } from "react-bootstrap"

export class CountryCard extends Component {
    render() {
        return (

            <div className="contenedorCont" >

                <div className="cardConteiner">

                    <h3 >{this.props.name}</h3>

                    <div className="contContent">

                        <img className="imgCard" src={this.props.flag} alt="flag not found" />

                        <h5 >Continente: {this.props.continent}</h5>

                        <h5 >Detalle: <Link to={`/countries/${this.props.id}`}>Click aqui</Link></h5>

                    </div>
                </div>

             </div>


        )
    }
}


export default CountryCard;


// [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [ ] Código de país de 3 letras (id)
// [ ] Capital
// [ ] Subregión
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Población
// [ ] Actividades turísticas con toda su información asociada