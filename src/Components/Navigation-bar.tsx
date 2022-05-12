import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha, createTheme, Theme } from "@mui/material/styles";
import gwlogo from "../assets/gw - logo2.png";
import { ThemeProvider } from "@mui/system";
import { Grid } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];

const theme = createTheme({
  palette: {
    secondary: {
      main: "#164b4b",
    },
  },
});

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <img
                src={gwlogo}
                alt="logo image"
                style={{ width: 40, marginRight: "20px" }}
              ></img>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                flexGrow: 1,
                letterSpacing: ".15rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              GREEN WALLS
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                flexGrow: 4,
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".08rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                BIOPHILLIC | MASTER PLANNING | ADVISORY
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* -------------------------------------------------------- */}
          </Toolbar>
        </Container>
        <Grid
          container
          sx={{ display: { md: "none" }, p: 0 }}
          direction="row"
          spacing={1}
        >
          <Grid item marginTop={0.5} marginLeft={0.5}>
            <img
              src={gwlogo}
              alt="logo image"
              style={{ width: 40, marginRight: "20px" }}
            ></img>
          </Grid>

          <Grid
            container
            flexDirection="column"
            xs={7}
            md={10}
            alignItems="center"
            justifyContent="center"
            marginLeft={1}
            marginTop={0.5}
          >
            <Grid item>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 400,
                  letterSpacing: ".009rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                GREEN WALLS
              </Typography>
            </Grid>
          </Grid>
          <Grid item marginLeft="auto">
            <IconButton
              size="large"
              aria-label="menu items"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavigationBar;
