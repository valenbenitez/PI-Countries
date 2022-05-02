import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./NavBar.css";

import HomeIcon from "@mui/icons-material/Home";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";

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

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="appbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <NavLink to={"/countries"}>
              <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon className="Icon" />}
              />
            </NavLink>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <NavLink to={"/create"}>
              <BottomNavigationAction
                label="Home"
                value="home"
                icon={<AddIcon className="Icon" />}
              />
            </NavLink>
          </IconButton>

          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{
  /* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */
}
{
  /* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            
          </Typography> */
}
