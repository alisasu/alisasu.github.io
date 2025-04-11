import {useEffect, useState} from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const classes = `content ${isVisible ? '' : 'hidden'}`

  return (
    <div className={classes}>
      hello it's me. contact me for a copy of my resume. this site is still under construction! 
    </div>
  );
};

export default About;