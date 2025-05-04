import React from 'react';
import WeatherIcon from './WeatherIcon';



export const Weather:React.FC = () => {
  return (
    <div className="h-full w-full grid grid-cols-2 justify-items-center items-center p-4 gap-1">
        <div className='w-full grid grid-cols-1 justify-items-start '>
            <h1 className="text-3xl font-bold text-black">Colombia, Cali</h1>
            <p className="text-black">Monday, May 23 Update As Of 2:45 PM</p>
        </div>
        <div className='grid grid-rows-2 w-full h-[150px] bg-amber-300 rounded-lg shadow-md p-4'>
            <samp className='text-left'>Today</samp>
            <WeatherIcon iconName="clear-day" size="lg" className="text-white" />
            <h2 className="text-xl font-semibold text-black">25°C</h2>
            <p>23℃ - 31℃</p>
        </div>
    </div>
  );
}