import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experiences/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { useContext, useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { themeContext } from './Context';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    style={{
      background: darkMode? 'black' : '',
      color: darkMode? 'white' : '',
    }}
     className="App"
    >
       <AnimatedCursor innerSize={8}
      outerSize={25}
      color='231, 101, 124'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />

     {
    loading ? 
      <div className='spinner'>
        <ClipLoader
      color={'#e726ad'}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      </div>
      : 
      <div>
      <Navbar></Navbar>
  <Intro></Intro>
  <Services></Services>
  <Experience></Experience>
  <Portfolio></Portfolio>
  <Contact></Contact>
  <ScrollToTop smooth color='#e726ad' height='20px' />
    </div>
     }
    </div>
  );
}

export default App;
