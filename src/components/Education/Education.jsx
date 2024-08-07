import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Education() {
    return (
      <div className="bg-black">
        <h1>Education</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-center"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022-2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-4xl">
              Bachelor of Technology{" "}
            </h3>
            {/* //align in center */}
            <h4 className="text-center text-2xl">[Computer Science]</h4>
            <h4 className="vertical-timeline-element-subtitle ml-2">
              Bharat Institute of Technology
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Meerut,Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-center"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019-2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-4xl">
              Bachelor of Science
            </h3>
            {/* //align in center */}
            <h4 className="text-center text-2xl">[PCM]</h4>
            <h4 className="vertical-timeline-element-subtitle ml-2">
              Agra University, Uttar Pradesh
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Agra,Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-center"
            contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018-2019"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-4xl">
              Intermediate (12th){" "}
            </h3>
            {/* //align in center */}
            <h4 className="text-center text-2xl">[PCM]</h4>
            <h4 className="vertical-timeline-element-subtitle ml-2">
              BJS Public School
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Meerut,Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-center"
            contentStyle={{ background: "#DCD427", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2016-17"
            iconStyle={{ background: "#DCD427", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-4xl">
              High School (10th){" "}
            </h3>
            {/* //align in center */}
            <h4 className="vertical-timeline-element-subtitle ml-2">
              BJS Public School
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Meerut,Uttar Pradesh
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
export default Education
