import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-primary text-black flex flex-col justify-center items-center fixed top-0 left-0">
      <div className="w-1/2 mx-auto">
        <h1 className="text-center mb-4">OPPSSSS....</h1>
        <h1 className="text-center mb-4">PAGE NOT FOUND</h1>
        <button
          className="mx-auto block font-bold p-2 bg-primary cursor-pointer text-gray-100"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
