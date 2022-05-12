import {
  Grid,
  Paper,
  Divider,
  Typography,
  Box,
  Button,
  Card,
} from "@mui/material";
import React, { useState } from "react";
import gwbanner from "../assets/gw.jpeg";
import CarouselElement from "../Components/CarouselElement";
import CustomCard from "../Components/CustomCard";
import ServiceCard from "../Components/ServiceCard";

export default function LandingPage() {
  const [loadedBlogsFlag, setLoadedBlogsFlag] = useState<boolean>(false);
  const [ylength, setYlength] = useState(0);

  const handleScroll = (event: any) => {
    console.log("a");
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;

    const scrollTop = event.currentTarget.scrollTop;
    setYlength(((scrollTop + containerHeight) / scrollHeight) * 100);
  };

  return (
    <>
      <div onScroll={handleScroll}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid
            container
            md={10}
            mt={3}
            justifyContent="center"
            sx={{ display: { sm: "none", xs: "none", md: "flex" } }}
          >
            <Grid item sx={{ height: "190px" }}>
              <img
                src={gwbanner}
                alt="greenwalls banner"
                style={{ height: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            mt={2.4}
            sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
            justifyContent="center"
          >
            <Grid item sx={{ height: "70px", width: "340px" }}>
              <img
                src={gwbanner}
                alt="greenwalls banner"
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid item md={11} xs={11}>
            <Divider></Divider>
          </Grid>

          <Grid item md={8}>
            <Typography
              variant="h3"
              mt={1}
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: "600",
                display: { sm: "none", xs: "none", md: "block" },
              }}
            >
              How we came to be!
            </Typography>
            <Typography
              variant="h6"
              mr={6}
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: "600",
                display: { xs: "block", md: "none" },
              }}
              textAlign="start"
            >
              How we came to be!
            </Typography>
          </Grid>
          <Grid item md={8} xs={8}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: "300",
                display: { xs: "block", md: "none" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
              scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique
              sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
              risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac
              turpis quis ligula lacinia aliquet. Mauris ipsum.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Roboto Slab",
                fontWeight: "300",
                display: { sm: "none", xs: "none", md: "block" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
              scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique
              sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
              risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac
              turpis quis ligula lacinia aliquet. Mauris ipsum.
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item md={8} xs={10} mt={5}>
              <Paper elevation={3} sx={{ p: 1 }}>
                <CarouselElement></CarouselElement>
              </Paper>
            </Grid>
            <Grid item md={9} xs={10}>
              <br />
              <br />
              <Divider></Divider>
              <br />
            </Grid>
          </Grid>
          <Grid item md={10} xs={10}>
            <Grid
              container
              justifyContent="center"
              sx={{ display: { md: "flex" } }}
            >
              <Grid item md={10} xs={10}>
                <Typography
                  variant="h4"
                  mt={1}
                  sx={{
                    fontFamily: "Roboto Slab",
                    fontWeight: "600",
                    display: { sm: "none", xs: "none", md: "block" },
                  }}
                >
                  Blogs:
                </Typography>
                <Typography
                  variant="h6"
                  mt={1}
                  sx={{
                    fontFamily: "Roboto Slab",
                    fontWeight: "600",
                    display: { sm: "block", xs: "block", md: "none" },
                  }}
                >
                  Blogs:
                </Typography>
                <br />
                <CustomCard isBlogThere={loadedBlogsFlag}></CustomCard>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={10} xs={10}>
            <Grid
              container
              sx={{ display: { md: "flex" } }}
              justifyContent="center"
              spacing={2}
            >
              <Grid item md={10} xs={10}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: -5,
                    fontFamily: "Roboto Slab",
                    fontWeight: "600",
                    display: { sm: "none", xs: "none", md: "block" },
                  }}
                >
                  Expertise/Services Provided:
                </Typography>
                <Typography
                  variant="h6"
                  mt={1}
                  sx={{
                    fontFamily: "Roboto Slab",
                    fontWeight: "600",
                    display: { sm: "block", xs: "block", md: "none" },
                  }}
                >
                  Expertise/Services Provided:
                </Typography>
              </Grid>
              <Grid
                item
                md={10}
                xs={10}
                display="flex"
                justifyContent="space-around"
              >
                {/* <Paper elevation={3} sx={{ width: 1 / 3, mr: 1, p: 1 }}>
                  {" "}
                  Biophillic Design
                </Paper>
                <Paper elevation={3} sx={{ width: 1 / 3, mr: 1, p: 1 }}>
                  {" "}
                  Master Planning
                </Paper>
                <Paper elevation={3} sx={{ width: 1 / 3, p: 1 }}>
                  {" "}
                  Advisory
                </Paper> */}
                <ServiceCard></ServiceCard>
              </Grid>
              <Grid item md={11} xs={10}>
                <br />
                <br />
                <Divider></Divider>
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
