import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Content = ({ data }) => {
  return (
    <div
      className=" d-flex  flex-wrap justify-content-around  gap-4 "
      style={{ marginTop: "10rem" }}
    >
      {data?.map((e) => (
        <Card sx={{ maxWidth: 1000 }}>
          <CardMedia component={"img"} height="auto" image={e.Image} />

          <CardContent>
            <Typography gutterBottom variant="h5" component={"div"}>
              {e.Title}
            </Typography>
            <Typography variant="body2">{e.Summary}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary">
              Share
            </Button>
            <Button
              onClick={() => setFlag(true)}
              sx={{ backgroundColor: "red" }}
              color="secondary"
              variant="contained"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Content;
