import {useEffect, useState} from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const classes = `content ${isVisible ? '' : 'hidden'}`

  return (
    <div className={classes}>
      <div>
        <h3>Projects</h3>
        <p><strong>WIP! Hoping to be able to share my new projects soon! </strong></p>
      </div>
      <div>
        <h3>Archive:</h3>
        <div>
        <h4>Math Start</h4>
          <p>When I was working with the Math Start program at CUNY during COVID, I created these sites as a way to teach my students area and perimeter online.</p>
          <a href='https://alisasu.github.io/MathStart/rectangleA.html'>
            <button>Rectangle Area</button>
          </a>
          <a href='https://alisasu.github.io/MathStart/rectangleP.html'>
            <button>Rectangle Perimeter</button>
          </a>
        <h4>Netflix Data Analysis</h4>
        <p>Student project providing some snarky— and occasionally, real— analysis of your Netflix history. Download your Netflix watch history as a CSV and find out what kind of person you are that we have complaints about.</p>
        <p>Disclaimer: Not real AI, not a real chatbot.</p>
          <a href='https://github.com/capstone-team-terra/roast-me'>
            <button>How bad is your Netflix taste?</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;