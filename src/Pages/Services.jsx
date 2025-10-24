import React from 'react';
import PetSolution from '../Components/PetSolution';
import { useTheme } from '../Providers/ThemeContext';

const Services = () => {
    const {theme} = useTheme()
    return (
        <div className='container mx-auto px-4 py-12'>
            <div className={`${theme === "light" ? "bg-linear-to-tr from-[#f5e4dc] to-[#f0f0e4]" : "bg-[#191e24]"} py-16 px-6 rounded-2xl mb-16`}>
                <h2 className='text-5xl mb-4 font-bold'>Discover Winter Pet Services</h2>
                <p className='text-lg'>Browse and book trusted services to keep your <br /> pets comfortable and healthy all winter long</p>
            </div>
            <PetSolution isVisible="hidden"></PetSolution>
        </div>
    );
};

export default Services;