import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => setColleges(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='w-3/4 mx-auto pt-20'>
            <h1 className='text-4xl mb-5 pb-2 font-semibold border-b-4 border-[#1e1e1e] w-fit'>Colleges</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    colleges.slice(0, 3).map(college => (
                        <div className='border-2 border-[#1e1e1e] rounded-lg' key={college._id}>
                            <div className='w-full h-72 relative'>
                                <img className='w-full rounded-t-lg h-full object-cover' src={college.image} alt="" />
                            </div>
                            <div className='px-5 py-2'>
                                <h2 className='text-3xl font-semibold'>{college.college_name}</h2>
                                <h4 className='text-xl font-semibold pb-5'>Admission date: {college.admission_dates}</h4>
                                <p>Events: {college.events}</p>
                                <p>Research history: {college.events}</p>
                                <p>Sports: {college.events}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;