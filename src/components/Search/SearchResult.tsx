import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { venueProps } from '../Event/Event';
import InfoIcon from '../InfoIcon';

export interface SearchResultProps {
  eventname: string;
  largeimageurl: string;
  description: string;
  id: string;
  date: string;
  venue: venueProps;
}

export default function SearchResult({
  eventname,
  largeimageurl,
  description,
  id,
  date,
  venue,
}: SearchResultProps) {
  const history = useHistory();

  // Handles button click
  const handleClick = useCallback(() => {
    history.push(`event/${id}`);
  }, [history, id]);

  return (
    <div className='rounded m-6 p-5 bg-white shadow-md w-60'>
      <div className='flex flex-col h-full justify-around'>
        <img src={largeimageurl} alt={eventname} className='rounded' />
        <p className='pt-4 pb-1 text-center text-md'>{eventname}</p>
        <p className='py-2 text-sm text-gray-600'>
          {description.length > 60
            ? `${description.substring(0, 60)}...`
            : description}
        </p>
        <div className='py-2 text-gray-600'>
          <InfoIcon
            icon={<LocationMarkerIcon className='h-5 w-5 mr-3' />}
            text={`${venue.name}, ${venue.town}`}
          />
          <InfoIcon
            icon={<CalendarIcon className='h-5 w-5 mr-3' />}
            text={date}
          />
        </div>
        <div className='pt-3'>
          <button
            className='rounded bg-black w-full text-white p-2 hover:bg-gray-700'
            onClick={handleClick}
          >
            view details
          </button>
        </div>
      </div>
    </div>
  );
}
