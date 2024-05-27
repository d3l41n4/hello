import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ rotation }) => {
  const titles = [
    "ONE IN A MILLION DAISES",
    "SUBSTITUTION",
    "NEXT FRONTIERS",
    "OMNIQUEST",
    "NOT A KOALAS NATURAL HABITAT",
    "SPIEGLEIN SPIEGLEIN AN DER WAND",
    "BUSY DOIN NOTHIN",
    "BEICHTSTUHL"
  ];

  const numbers = ["01 / 08", "02 / 08", "03 / 08", "04 / 08", "05 / 08", "06 / 08", "07 / 08", "08 / 08"];
  const navigate = useNavigate();

  const handleTitleClick = (title) => {
    navigate(title.toLowerCase().replace(/\s+/g, '-'));
  };

  const infiniteTitles = useMemo(() => {
    let infiniteTitles = [];
    for (let i = 0; i < 10; i++) {
      infiniteTitles = [...infiniteTitles, ...titles];
    }
    return infiniteTitles;
  }, [titles]);

  useEffect(() => {
    const handleScroll = () => {
      const titles = document.querySelectorAll('.title-section');
      titles.forEach((title) => {
        if (title.getBoundingClientRect().top < window.innerHeight / 2) {
          window.scrollTo({ top: title.offsetTop, behavior: 'smooth' });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      {infiniteTitles.map((title, index) => (
        <React.Fragment key={index}>
          {index < infiniteTitles.length - 1 && (
            <div className="title-number" style={{ zIndex: -20 }}> {/* Set z-index */}
              <h2>{numbers[index % numbers.length]}</h2>
            </div>
          )}
          <section className="title-section" onClick={() => handleTitleClick(title)}>
            <h1 className="title-text">
              {title}
            </h1>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
