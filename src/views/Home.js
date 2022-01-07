import React from 'react';

const Home = props => {
  return (
    <div>
      <h3>Projects</h3>
      <ul class="projects"> 
        <li>
          <b>CUNY/Math Start</b>
          <p> When I was teaching at CUNY, I created these websites for students to explore the concepts of area and perimeter. Not mobile friendly, unfortunately.</p>
          <ul>
            <li><a class="proj" href="https://alisasu.github.io/MathStart/rectangleA.html">Rectangle Area</a></li>
            <li><a class="proj" href="https://alisasu.github.io/MathStart/rectangleP.html">Rectangle Perimeter</a></li>
          </ul>
        </li>
        <li>
          <b>Netflix Analytics</b>
          <p>Sorry, we didn't want to pay for Firebase hosting anymore. </p>
          <p>But I worked on this project with some classmates. Upload your Netflix viewing history as a csv and get some data analysis back. Snarky comments included complimentary from the devs.</p>
          <ul>
            <li><a class="proj" href="https://github.com/capstone-team-terra/roast-me">roast-me (GitHub repo)</a></li>
          </ul>
        </li>
        <li>
          <b>Conway's Game of Life</b>
          <p>Some fun.</p>
          <ul>
            <li>
              <a class="proj" href="https://replit.com/@alisasu/FlippantBraveParentheses">Game of Life</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;