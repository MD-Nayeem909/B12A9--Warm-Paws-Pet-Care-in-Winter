import React from 'react';
import PetSolution from '../Components/PetSolution';
import CTA from '../Components/CTA';
import HeroSlider from '../Components/HeroSlider';
import TipsForPets from '../Components/TipsForPets';

const Home = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <HeroSlider></HeroSlider>
            <PetSolution pageName={true}></PetSolution>
            <TipsForPets></TipsForPets>
            <CTA></CTA>
        </div>
    );
};

export default Home;