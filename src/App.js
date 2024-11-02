import { Button, createTheme, Grid2, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import LocaleSelect from "./components/localeSelect";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import profile from './assets/images/profile.jpg';
import youtube from './assets/icons/youtube.svg';
import instagram from './assets/icons/instagram.svg';
import github from './assets/icons/github.svg';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import timelineElements from "./timelineElements";
import TimelineElement from "./components/timelineElement";

import { ReactComponent as WorkIcon } from './assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from './assets/icons/graduate-cap.svg';
import Widget from "./components/widget";


function App() {

  const [t] = useTranslation("global");
  
  const [showProjects, setShowProjects] = useState(true);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  // timeline styles

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
          <Button onClick={()=>setShowProjects(true)}>Projects</Button>
          <Button onClick={()=>setShowProjects(false)}>Timeline</Button>
          {/* Timeline */}
          {!showProjects ? 
          <VerticalTimeline lineColor={ "#c9c9c9" } layout="1-column-left"
          >
            {
              timelineElements.map(element => {
                let iconStyleColor = element.isWork ? 'rgb(33, 150, 243)' : 'rgb(255, 131, 54)';
                return (
                  <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(248, 248, 248)'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(248, 248, 248)' }}
                    key={element.id}
                    date={element.date}
                    dateClassName="date"
                    icon={element.isWork ? <WorkIcon/> : <SchoolIcon/>}
                    iconStyle={{ background: iconStyleColor }}
                    >
                    <TimelineElement 
                    title={element.title}
                    icon={element.icon}
                    location={element.location}
                    description={element.description}
                    tags={element?.tags}/>
                  </VerticalTimelineElement>
                )
              })
            }
          </VerticalTimeline>
          :
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
          }
        </div>
      </section>
    </div>
  );
}


export default App;