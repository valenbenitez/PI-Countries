import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCountries } from '../redux/actions/index'
import CountryCard from "../CountryCard/index";


export class Countries extends Component {
    componentDidMount() {
        this.props.getAllCountries()
    }
    render() {
        // console.log(this.props.id)
        return (
            <div>
                
                <div>
                    {this.props.countries && this.props.countries.map((coun) => (
                        <CountryCard
                            id={coun.id}
                            name={coun.name}
                            continent={coun.continent}
                            flag={coun.flag}
                            capital={coun.capital}
                            subregion={coun.subregion}
                            area={coun.area}
                            poblacion={coun.poblacion}
                            actividades={coun.activities.name}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export function mapStateToProps(state) {
    return {
        countries: state.countries
    }
}

export const mapDispatchToProps = { getAllCountries }

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
