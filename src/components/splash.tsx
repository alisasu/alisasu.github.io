import { useState, useEffect } from 'react';

const Splash = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-screen ${isVisible ? 'visible' : ''}`}>
      <h1>Hello, World!</h1>
    </div>
  )
}

export default Splash;