import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useLocation, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RotatingMesh from './components/RotatingMesh';
import ProjectDaises from './projects/ProjectDaises';
import ProjectSubstitution from './projects/ProjectSubstitution';
import ProjectNextFrontiers from './projects/ProjectNextFrontiers';
import ProjectOmniquest from './projects/ProjectOmniquest';
import ProjectKoala from './projects/ProjectKoala';
import ProjectSpieglein from './projects/ProjectSpieglein';
import ProjectBusyDoinNotin from './projects/ProjectBusyDoinNotin';
import ProjectBeichten from './projects/ProjectBeichten';
import About from './pages/About';
import './index.css';

function App() {
  const [rotation, setRotation] = useState(0);
  const scrollContainerRef = useRef(null);
  const location = useLocation();

  const easeInOut = useCallback((t) => {
    const a = 6.4;
    return t < 0.5 ? 0.5 * Math.pow(2 * t, a) : 1 - 0.5 * Math.pow(2 * (1 - t), a);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollTop = scrollContainer.scrollTop;
      const sectionHeight = window.innerHeight;
      const currentSectionIndex = Math.floor(scrollTop / sectionHeight);
      const scrollProgress = (scrollTop % sectionHeight) / sectionHeight;
      const easedScrollProgress = easeInOut(scrollProgress);
      const rotationAngle = (currentSectionIndex + easedScrollProgress) * 360;
      setRotation(rotationAngle);
    }
  }, [easeInOut]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <main className="app">
      {location.pathname === '/' && (
        <div id="rotating-mesh-container">
          <RotatingMesh rotation={[0, rotation * (Math.PI / 180), 0]} />
        </div>
      )}
      <Link to="/" className="home-button">HOME</Link>
      <Link to="/about" className="about-button">ABOUT</Link>
      <div ref={scrollContainerRef} className="scroll-container">
        <Routes>
          <Route path="/" element={<Home rotation={rotation} />} />
          <Route path="/about" element={<About />} />
          <Route path="/one-in-a-million-daises" element={<ProjectDaises />} />
          <Route path="/substitution" element={<ProjectSubstitution />} />
          <Route path="/next-frontiers" element={<ProjectNextFrontiers />} />
          <Route path="/omniquest" element={<ProjectOmniquest />} />
          <Route path="/not-a-koalas-natural-habitat" element={<ProjectKoala />} />
          <Route path="/spieglein-spieglein-an-der-wand" element={<ProjectSpieglein />} />
          <Route path="/busy-doin-nothin" element={<ProjectBusyDoinNotin />} />
          <Route path="/beichtstuhl" element={<ProjectBeichten />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
