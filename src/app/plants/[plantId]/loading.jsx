import React from 'react';

const LoadingDetails = () => {
    return (
        <div className='flex items-center justify-center h-[40vh] w-[100vw]'>
            <h2 className="text-3xl font-bold text-center">Plant Details LOading soon</h2>
            <span className="loading loading-spinner text-success"></span>
        </div>
    );
};

export default LoadingDetails;