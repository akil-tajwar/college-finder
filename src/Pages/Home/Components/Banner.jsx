import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(/public/banner2.jpg)] bg-center bg-no-repeat bg-cover text-center'>
            <div className='bg-black bg-opacity-70'>
                <div className='flex gap-3 justify-center items-center bg-center py-96'>
                    <div className='py-8 flex gap-4'>
                        <input className='py-1 px-3 w-96 font-semibold text-2xl h-14 rounded' placeholder='Search your desired college' type="text" />
                        <button className='bg-yellow-500 text-[#242424] px-14 h-14 text-2xl font-semibold rounded'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;