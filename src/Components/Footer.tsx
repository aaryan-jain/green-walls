import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import QR from "../assets/QR.jpeg";

function Footer() {
  const leftcontainer = () => {
    return (
      <div
        className="left"
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Roboto Slab",
              fontWeight: "600",
            }}
          >
            GREEN WALLS:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto Slab",
              fontWeight: "300",
            }}
          >
            Master Planning | Bio phillic Solutions | Advisory
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto Slab",
              fontWeight: "200",
              marginTop: "3rem",
            }}
          >
            &#169; Copyright 2022 Green Walls
          </Typography>
        </div>
      </div>
    );
  };
  const middlecontainer = () => {
    return (
      <div
        className="middle"
        style={{
          display: "flex",
          flexGrow: 2,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Roboto Slab",
            fontWeight: "300",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li>Contact Us : vikasspa@rediffmail.com</li>
            <li style={{ marginTop: "1rem" }}>
              About us : Recently started real estate consultancy
            </li>
            <li style={{ marginTop: "1rem" }}>Careers </li>
          </ul>
        </Typography>
      </div>
    );
  };

  const rightcontainer = () => {
    return (
      <div
        className="right"
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={QR}
          alt=""
          style={{ marginLeft: "3rem", height: "8rem", width: "8rem" }}
        />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Roboto Slab",
            fontWeight: "200",
          }}
        >
          YOU CONTACT ME USING QR ALSO
        </Typography>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "gray",
        color: "white",
        padding: 30,
      }}
    >
      {/* <Paper elevation={0} sx={{ background: "gray" }}></Paper> */}

      {leftcontainer()}
      {middlecontainer()}
      {rightcontainer()}
    </div>
  );
}

export default Footer;
