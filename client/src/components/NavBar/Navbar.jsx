import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./NavBar.css";
import { Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    // <div className="navBarConteiner">
    //     {/* <nav> */}
    //         <div className="navCountries">Countries</div>
    //         <div><Link className="lin" to='/countries'>Home</Link></div>
    //         <div><Link className="lin" to='/create'>Crear actividad</Link></div>
    //         <SearchBar/>
    //     {/* </nav> */}
    // </div>
    <Nav
      className="navBarConteiner"
      activeKey="/home"
      //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="homeAndCreate">
        <Nav.Item>
          <Link to={"/countries"}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="createAct" to={"/create"}>
            Crear actividad
          </Link>
        </Nav.Item>
      </div>
        <SearchBar /*className="search"*/ />
    </Nav>
  );
}
