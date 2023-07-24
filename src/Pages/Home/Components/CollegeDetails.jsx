import React, { useEffect, useState } from 'react';

const CollegeDetails = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => setColleges(data))
            .catch(error => console.log(error))
    })
    return (
        <div>
            {/* {
                colleges.map(college => (
                    <div key={college._id}>
                        <h1 className='text-5xl'>{college.college_name}</h1>
                    </div>
                ))
            } */}
        </div>
    );
};

export default CollegeDetails;