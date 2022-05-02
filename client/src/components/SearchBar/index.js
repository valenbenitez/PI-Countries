import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../redux/actions";
import { useHistory } from "react-router-dom";
import './SearchBar.css'

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function SearchBar() {

    const [buscar, setBuscar] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    function onSubmit(e) {
        e.preventDefault()
        if (buscar.length === 0) return alert('Type name of country please')
        dispatch(searchCountry(buscar))
        history.push("/countries/" + buscar)
        setBuscar('')
    }

    function inputChange(e) {
        // e.preventDefautl()
        setBuscar(e.target.value)
    }

    return (
        // <div className="searchDiv">
        //     <form onSubmit={onSubmit}>
        //         <input className="searchInput" type='text' placeholder='Search country' onChange={inputChange} value={buscar}></input>
        //     </form>
        // </div>
        <form onSubmit={onSubmit}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    onChange={inputChange}
                    value={buscar}
                    placeholder="Search Country…"
                    inputProps={{ "aria-label": "search" }}
                />
            </Search>
        </form>
    )
}



{/* <input className="buttonSrc" type='submit' value='Search'></input> */ }