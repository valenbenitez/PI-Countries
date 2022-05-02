import React, { Component } from "react"
import { Link } from "react-router-dom"
import './card.css'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export class CountryCard extends Component {
    render() {
        return (

            // <div className="contenedorCont" >

            //     <div className="cardConteiner">

            //         <h3 className="h3" >{this.props.name}</h3>

            //         <div className="contContent">

            //             <img className="imgCard" src={this.props.flag} alt="flag not found" />

            //             <h5 >Continente: {this.props.continent}</h5>

            //             <h5 >Detalle: <Link to={`/countries/${this.props.id}`}>Click aqui</Link></h5>

            //         </div>
            //     </div>

            // </div>

            <Card className="card1" sx={{ maxWidth: 345,}}>
            <CardActionArea>
              <CardMedia className="imgCard" 
                component="img"
                height="130"
                image={this.props.flag}
                alt="flag not found :/"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {this.props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.props.continent}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             <Button size="small" color="primary"><Link to={`/countries/${this.props.id}`}>
                Detail
                </Link></Button>
            </CardActions>
          </Card>
            
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