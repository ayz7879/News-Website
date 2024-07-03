import { Favorite, FavoriteBorder, Pageview } from "@mui/icons-material";
import {
  AppBar,
  TextField,
  Toolbar,
  Typography,
  Autocomplete,
} from "@mui/material";
import React from "react";

const Navbar = ({ search, setSearch }) => {
  let friends = [
    "war",
    "government",
    "Politics",
    "education",
    "health",
    "economy",
    "business",
    "fashion",
    "entertainment",
  ];
  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h4">NewsExpress</Typography>
          {/* <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-50 rounded-3 "
            sx={{ margin: "auto", background: "white", color: "black" }}
          /> */}
          <Autocomplete
            sx={{ margin: "auto", background: "white", color: "black" }}
            className="w-50 rounded-3 "
            options={friends}
            renderInput={(params) => (
              <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                {...params}
              />
            )}
          />

          <Pageview
            color="inherit"
            sx={{ fontSize: "60px" }}
            fontSize="large"
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
