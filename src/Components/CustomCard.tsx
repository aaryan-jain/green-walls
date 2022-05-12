import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogContent from "../UsableObjects/Blog";

interface CustomCardProps {
  isBlogThere: boolean;
}

const defaultBlog: BlogContent = {
  image:
    "https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg",
  author: "Vikas Jain",
  date: new Date(),
  title: "Test Blog topic: Real Estate",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  body: "",
};

const listBlogs: Array<BlogContent> = [defaultBlog, defaultBlog, defaultBlog];

export default function CustomCard(props: CustomCardProps) {
  const [blogLoaded, setBlogLoaded] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<Array<BlogContent>>(listBlogs);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    // .. might have to move above line into if condition
    if (!props.isBlogThere) {
      // .. code to fetch blogs
    }
  }, []);

  return (
    <>
      {/* <Slide direction="left" in={checked} mountOnEnter unmountOnExit> */}

      {listBlogs.map((e, i) => {
        return (
          <Box>
            <Card sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
              <CardActionArea
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  sx={{
                    width: "30%",
                  }}
                  image={defaultBlog.image}
                  alt={`image of blog ${0}`}
                />
                <CardContent sx={{ ml: 3 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {defaultBlog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {defaultBlog.description}
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <Typography
                    variant="body2"
                    color="secondary"
                    component="span"
                  >
                    {defaultBlog.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <br />
          </Box>
        );
      })}

      {/* RESPONSIVE FOR MOBILE BELOW */}
      {listBlogs.map((e, i) => {
        return (
          <Link>
            <Card
              sx={{
                display: { sm: "flex", xs: "flex", md: "none" },
                height: 120,
              }}
            >
              <CardActionArea sx={{ width: "33%" }}>
                <CardMedia
                  component="img"
                  sx={{
                    ml: 1,
                    width: "100%",
                  }}
                  image={defaultBlog.image}
                  alt={`image of blog ${0}`}
                />
              </CardActionArea>
              <CardActionArea
                sx={{
                  ml: 2,
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="body2" component="div">
                    {defaultBlog.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="secondary"
                    component="span"
                  >
                    {defaultBlog.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <br />
          </Link>
        );
      })}
      {/* </Slide> */}

      {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Paper
          elevation={2}
          sx={{ height: "250px", background: "Gray", width: "100%" }}
        >
          <img
            src={defaultBlog.image}
            alt={`${defaultBlog.date}`}
            style={{
              height: "100%",
              flexGrow: 1,
            }}
          />
          <Typography variant="h4">{defaultBlog.title}</Typography>
        </Paper>
      </Box> */}
    </>
  );
}
