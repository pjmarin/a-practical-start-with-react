import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results/index';
import HouseFromQuery from '../house/HouseFromQuery';

import HouseFilter from './house-filter';

function App() {
  const [ allHouses, setAllHouses ] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch('/houses.json');
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  
  return (
    <Router>
      <div className='container'>
        <Header 
          subtitle="Providing houses all over the world !!!"
          title="Some title"
        />
        {/* { allHouses.map((house) => {
          return <li key={house.id}>{ house.description }</li>
        }) } */}
        <HouseFilter allHouses={allHouses} />
      </div>
      <Routes>
        <Route path="/searchresults/:country" element={<SearchResults allHouses={allHouses} />} />

        <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses} />} />
        <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
      </Routes>
    </Router>
  );
}

export default App;
