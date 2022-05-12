import React from "react";
import { Grid, Paper, Divider, Typography, Box, Button } from "@mui/material";

import Item from "../UsableObjects/Items";
import Carousel from "react-material-ui-carousel";
import DBMall from "../assets/db-mall-1.jpg";
import Colliers from "../assets/colliers.jpg";
import Jll from "../assets/real-estate.jpg";

interface ItemProps {
  item: Item;
}
function handleClick() {
  console.log("inside carousel");
}
function Items(props: ItemProps) {
  return (
    <div>
      <Typography>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <h2>{props.item.name}</h2>
          <Box width="100%" height="600px">
            <img
              src={props.item.image}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Button className="CheckButton">{props.item.description}</Button>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <Typography
            variant="h6"
            // ml={15}
            sx={{
              fontFamily: "Roboto Slab",
              fontWeight: "600",
            }}
            textAlign="start"
          >
            {props.item.name}
          </Typography>
          <Box width="100%" height="200px">
            <img
              src={props.item.image}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Divider></Divider>
          <Button className="CheckButton">{props.item.description}</Button>
        </Box>
      </Typography>
    </div>
  );
}

export default function CarouselElement() {
  var carouselItems: Item[] = [
    {
      name: "DB Mall",
      description: " DB Mall Valuation",
      image: DBMall,
    },
    {
      name: "JLL Work",
      description: "Work done in JLL India",
      image: Jll,
    },
    {
      name: "Colliers Work",
      description: "Work done in Colliers India",
      image: Colliers,
    },
  ];

  return (
    <Box>
      <Carousel
        interval={7000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
      >
        {carouselItems.map((item, i) => (
          <Items item={item} key={i} />
        ))}
      </Carousel>
    </Box>
  );
}
