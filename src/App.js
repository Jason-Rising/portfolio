import { Button, createTheme, Grid2, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import LocaleSelect from "./components/localeSelect";
import React, { useRef, useState } from 'react';
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
import { ReactComponent as DownArrowIcon } from './assets/icons/down-arrow-outline.svg';


function App() {

  const [t] = useTranslation("global");
  
  const [showProjects, setShowProjects] = useState(true);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery('(max-width:980px)');
  
  const targetDivRef = useRef(null);
  const scrollToDiv = () => {
    targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        {isMobile ? <div className="banner-downarrow-mobile" onClick={scrollToDiv}><DownArrowIcon/></div> : null}
      </section>
      </ThemeProvider>
      <section className="main" ref={targetDivRef}>
        <div className="main-container">
          <div className="navbar">
            <Button className={!showProjects ? "active" : ""}  onClick={()=>setShowProjects(true)}>Projects</Button>
            <Button className={!showProjects ? "active" : ""} onClick={()=>setShowProjects(false)}>Timeline</Button>  
            <div
                className="underline"
                style={{
                    transform: showProjects ? "translateX(0)" : "translateX(100%)",
                }}
            />
          </div>
          {/* Timeline */}
          {!showProjects ? (
            !isMobile ?
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
            <div className="timeline-container-mobile fade-in-left">{
              timelineElements.map(element => {
                return (
                  <TimelineElement 
                      title={element.title}
                      icon={element.icon}
                      location={element.location}
                      description={element.description}
                      tags={element?.tags}
                      isMobileView={true}
                      date={element.date}/>
                )
              })}
              </div>
            
          )
          :
            <Grid2 container spacing={{ xs: 2, md: 3, lg: 8 }} className='fade-in-right'>
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