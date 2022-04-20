import React, { Component } from "react"
// import {connect} from "react-redux"
import { Link } from "react-router-dom"
import './card.css'

export class CountryCard extends Component {
    render() {
        return (
            <div>
                <div className="div2">
                    <img className="banderaCard" src={this.props.flag} />
                    <h2>{this.props.name}</h2>
                    {/* <p>{this.props.image}</p> */}
                    <p>{this.props.continent}</p>
                    para mas detalle del pokemon: <Link to={`/countries/${this.props.id}`}>Click aqui</Link>
                </div>
                    <br/>
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