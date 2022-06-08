import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Spinner({message}) {
   return (
      <div className='flex flex-col jestify-center items-center w-full h-full'>
         <Oval 
            type="Circles"
            color="#00BFFF"
            height={50}
            width={50}
            className="m-5"
         />
         <p className='text-lg text-center px-2'>{message}</p>
      </div>
   )
}
