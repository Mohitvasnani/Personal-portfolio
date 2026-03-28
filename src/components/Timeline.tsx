import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education</h1>
        <VerticalTimeline>

          {/* MSc */}
          <VerticalTimelineElement
            date="2025 – Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>MSc Advanced Computer Science</h3>
            <h4>University of Liverpool, UK</h4>
            <p>
              Focused on software engineering, data systems, and real-world problem solving.
            </p>
          </VerticalTimelineElement>

          {/* Internship */}
          <VerticalTimelineElement
            date="Feb 2024 – July 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3>Graduate Software Developer Intern (Full-Stack)</h3>
            <h4>NETPARAM Technologies, India</h4>
            <p>
              Worked on Dealkarts (e-commerce platform). Built reusable React components,
              implemented authentication, integrated APIs using Axios, and collaborated using Git/GitHub.
            </p>
          </VerticalTimelineElement>

          {/* BTech */}
          <VerticalTimelineElement
            date="2020 – 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3>BTech Computer Science</h3>
            <h4>JECRC University, Jaipur</h4>
            <p>
              Built strong foundations in programming, data structures, and software development.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;