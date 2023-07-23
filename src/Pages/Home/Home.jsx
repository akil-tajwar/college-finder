import React from 'react';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Gallery from './Components/Gallery';
import ResearchPapers from './Components/ResearchPapers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Gallery></Gallery>
            <ResearchPapers></ResearchPapers>
        </div>
    );
};

export default Home;