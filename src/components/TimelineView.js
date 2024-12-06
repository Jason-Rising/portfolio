import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/graduate-cap.svg';
import {ProjectTimeLineElements} from "../timelineElements";
import TimelineElement from './TimelineElement';
import { useTranslation } from 'react-i18next';

function TimelineView(props) {
  const [t] = useTranslation("timeline");

  return (
    !props.isMobile ? (
      <VerticalTimeline lineColor="#c9c9c9" layout="1-column-left">
        {ProjectTimeLineElements(t).map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            icon={element.isWork ? <WorkIcon /> : <SchoolIcon />}
            iconStyle={{ background: element.isWork ? 'rgb(33, 150, 243)' : 'rgb(255, 131, 54)' }}
            contentStyle={{ background: 'rgb(248, 248, 248)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(248, 248, 248)' }}
          >
            <TimelineElement {...element} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    ) : (
      <div className="timeline-container-mobile fade-in-left">
        {ProjectTimeLineElements(t).map((element) => (
          <TimelineElement key={element.id} {...element} isMobileView={true} />
        ))}
      </div>
    )
)};

export default TimelineView;
