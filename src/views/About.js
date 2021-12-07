import React from 'react';

const About = props => {
  return (
    <div>
      <h3>About Me</h3>
      <img src="/me.png" alt="portrait of me trying to kiss a dog"/>
      <h4> Alisa Su </h4>
      <div id="resume">
        <ul>
          <li><b>Education</b>
            <ul>
              <li>
                New York University
                <small>&emsp;B.A. Mathematics</small>
                <small>&emsp;Class of 2019</small>
              </li>
              <li>
                New York University Shanghai
                <small>&emsp;Study Abroad</small>
                <small>&emsp;Spring 2018</small>
              </li>
            </ul>
          </li>
          <li><b>Technologies</b>
            <ul>
              <li>JavaScript (Node.js)</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </li>
          <li><b>Work Experience</b>
            <ul>
              <li>Software Engineer @ ClassLink
                <small> &emsp; Apr 2021 - present</small>
              </li>
              <li>Adjunct Instructor @ CUNY 
                <small> &emsp; Feb 2020 - Sept 2020, Jun 2021 - Sept 2021</small>
              </li>
              <li>Curriculum Writer @ StrongMind
                <small> &emsp; Oct 2020 - Nov 2020</small>
              </li>
              <li>Interpreter @ National Museum of Mathematics
                <small> &emsp; Oct 2019 - Feb 2020</small>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;