import {
  CalendarIcon,
  ClockIcon,
  LocationMarkerIcon,
  TicketIcon,
} from '@heroicons/react/outline';
import React from 'react';
import InfoIcon from '../InfoIcon';
import Artist from './Artist';

interface Props {
  event: any;
}

export default function Event({ event }: Props) {
  const {
    artists,
    largeimageurl,
    venue,
    date,
    entryprice,
    eventname,
    description,
    openingtimes,
  } = event;

  return (
    <div className='shadow-md rounded mx-auto mt-5 bg-white justify-center p-5 md:p-9 w-10/12 md:w-9/12 lg:w-7/12'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-12/12 md:w-4/12'>
          <img src={largeimageurl} alt={eventname} className='rounded w-full' />
        </div>
        <div className='w-12/12 mt-5 md:ml-5 md:w-8/12 md:mt-0 text-gray-600'>
          <h1 className='text-2xl text-black'>{eventname}</h1>
          <p className='py-4'>{description}</p>
          <InfoIcon
            icon={<LocationMarkerIcon className='h-5 w-5 mr-3' />}
            text={`${venue.name}, ${venue.town}`}
          />
          <InfoIcon
            icon={<CalendarIcon className='h-5 w-5 mr-3' />}
            text={date}
          />
          <InfoIcon
            icon={<ClockIcon className='h-5 w-5 mr-3' />}
            text={`${openingtimes.doorsopen} - ${openingtimes.doorsclose}`}
          />
          <InfoIcon
            icon={<TicketIcon className='h-5 w-5 mr-3' />}
            text={entryprice}
          />
        </div>
      </div>
      <hr className='my-8' />
      <div>
        <h2 className='text-xl text-center mb-5'>Artists</h2>
        <div className='flex flex-wrap w-full justify-center items-center'>
          {artists.length
            ? artists.map((artist: any) => {
                return <Artist key={artist.id} {...artist} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
