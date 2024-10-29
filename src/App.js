import { Card, CardActionArea, CardContent, CardMedia, createTheme, Grid2, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import LocaleSelect from "./components/localeSelect";
import React from 'react';
import { useTranslation } from "react-i18next";
import profile from './assets/images/profile.jpg';
import youtube from './assets/icons/youtube.svg';
import instagram from './assets/icons/instagram.svg';
import github from './assets/icons/github.svg';
import Widget from "./components/widget";

function App() {

  const [t, i18n] = useTranslation("global");
  
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
      <section className="banner">
        <div  className="banner-locale">
          <LocaleSelect/>
        </div>
        <div className="line-break"/>
        <img className="profile" src={profile}></img>
        <Typography variant="h3">Jason Rising</Typography> 
        <Typography sx={{opacity:'80%'}} variant="h6">{t("home.job_title")}</Typography> 
        <div className="icons">
          <a href="https://www.youtube.com/channel/UCGpHnJ3Er16l4urR01OXAkg"><img src={youtube}></img></a>
          <a href="https://www.instagram.com/sketch343/"><img src={instagram}></img></a>
          <a href="https://github.com/Jason-Rising"><img src={github}></img></a>
        </div>
      </section>
      </ThemeProvider>
      <section className="main">
        <div className="main-container">
          <Grid2 container spacing={{ xs: 2, md: 3, lg: 8 }}>
            <Grid2>
              <Widget img={profile} />
            </Grid2>
            <Grid2>
              <Widget img={profile} />
            </Grid2>
            <Grid2>
              <Widget img={profile} />
            </Grid2>
            <Grid2>
              <Widget img={profile} />
            </Grid2>
          </Grid2>
        </div>
      </section>
    </div>
  );
}


export default App;