import React from "react";
import Service from "../UsableObjects/Service";
import { serviceDetailsArray } from "../common/mapping";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

function ServiceCard() {
  return (
    <Box
      display="flex"
      sx={{
        width: "100%",
      }}
    >
      {serviceDetailsArray.map((ele, i) => {
        return (
          <Card key={i} sx={{ mr: "auto", width: "30%" }}>
            <CardHeader
              titleTypographyProps={{
                fontFamily: "Roboto Slab",
                fontWeight: "500",
              }}
              title={ele.title}
            />
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {ele.subtitle}
              </Typography>
              <Divider></Divider>
              <ul>
                {ele.descriptionPoints.map((e, i) => {
                  return <li key={i}>{e}</li>;
                })}
              </ul>
            </CardContent>
            <CardActions>
              <Button color="secondary"> Get a Quotation</Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}

export default ServiceCard;
