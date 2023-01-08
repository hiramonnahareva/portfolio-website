import './App.css';
import AnimatedCursor from "react-animated-cursor"
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experiences/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { useContext, useEffect, useState } from 'react';
import { themeContext } from './Context';
import ScrollToTop from "react-scroll-to-top";
import { GridLoader } from 'react-spinners';
import Footer from './Components/Footer/Footer';

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
      background: darkMode? "linear-gradient(250deg, hsl(240deg 47% 19%) 0%, hsl(291deg 53% 13%) 100%)" : '',
      color: darkMode? 'white' : '',
    }}
     
    >
       <AnimatedCursor innerSize={8}
      outerSize={25}
      color='231, 255, 255'
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
        <GridLoader
      color={'#e726ad'}
      loading={loading}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      </div>
      : 
      <div>
        <div className="App "  style={{
      background: darkMode? "linear-gradient(250deg, hsl(240deg 47% 19%) 0%, hsl(291deg 53% 13%) 100%)" : '',
      color: darkMode? 'white' : '',
    }}>
      <Navbar></Navbar>
  <Intro></Intro>
  <Services></Services>
  <Experience></Experience>
  <Portfolio></Portfolio>
  <Contact></Contact>
      </div>
  <ScrollToTop smooth color='#e726ad' height='20px' style={{zIndex:"111"}} />
  <Footer></Footer>
    </div>
     }
    </div>
  );
}

export default App;
