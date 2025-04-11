import Header from './header';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import React from 'react';
import Splash from './splash';

const Layout = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
    {loading 
    ? <Splash/> 
    :
      <div>
        <Header />
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    }
    </>
  )
}

export default Layout;