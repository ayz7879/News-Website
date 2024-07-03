import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";

const SuggestList = ({ search, setSearch }) => {
  return (
    <>
      <AppBar
        className="d-flex  align-items-center "
        color=""
        sx={{ marginTop: "75px" }}
      >
        <Toolbar className="d-flex gap-4 ">
          <Button onClick={() => setSearch("war")} variant="contained">
            war
          </Button>
          <Button onClick={() => setSearch("government")} variant="contained">
            government
          </Button>
          <Button onClick={() => setSearch("Politics")} variant="contained">
            Politics
          </Button>
          <Button onClick={() => setSearch("education")} variant="contained">
            education
          </Button>
          <Button onClick={() => setSearch("health")} variant="contained">
            health
          </Button>
          <Button onClick={() => setSearch("economy")} variant="contained">
            economy
          </Button>
          <Button onClick={() => setSearch("business")} variant="contained">
            business
          </Button>
          <Button onClick={() => setSearch("fashion")} variant="contained">
            fashion
          </Button>
          <Button
            onClick={() => setSearch("entertainment")}
            variant="contained"
          >
            entertainment
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SuggestList;
