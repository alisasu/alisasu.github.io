import {useEffect, useState} from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const classes = `content ${isVisible ? '' : 'hidden'}`

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset state after 3 seconds
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className={classes}>
      Talk to me! 
      <button disabled={isCopied} onClick={() => {handleCopy('alisa.su@nyu.edu')}}>
        {isCopied ? 'Copied!' : 'Get my e-mail :)'}
      </button>
    </div>
  );
};

export default About;