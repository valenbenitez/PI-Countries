import React from "react";
import './Paginado.css'

export const Paginacion = ({ porPagina, countries, paginado, previousPage, nextPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries / porPagina); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="contUl">
        <ul className="paginadoCont">
          <li className="prevAndNext" onClick={previousPage} >Prev</li>
            {pageNumbers && pageNumbers.map(num => (
              <li className="liNum1" key={num}>
                    <button className="liNum" onClick={()=>paginado(num)} >{num}</button>
                </li>
            ))}
            <li className="prevAndNext" onClick={nextPage} >Next</li>
        </ul>
    </nav>
  );
};

// <Paginacion
//             porPagina={porPagina}
//             countries={countries.length}
//             paginado={paginado}
//             />
