import {
  SearchCircleIcon,
  MusicNoteIcon,
  AnnotationIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  artist: any;
}

export default function ArtistDetails({ artist }: Props) {
  const { description, name, spotifyartisturl, twitter, imageurl } = artist;
  return (
    <div className='p-3 flex flex-col'>
      <Link
        to='/'
        className='mx-auto mt-2 flex items-center hover:text-gray-600'
      >
        <SearchCircleIcon className='h-5 w-5 mr-1' /> back to search
      </Link>
      <div className='shadow-md rounded mx-auto mt-5 bg-white justify-center p-5 md:p-9 w-10/12 md:w-9/12 lg:w-7/12'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-12/12 md:w-4/12'>
            <img src={imageurl} alt={name} className='rounded w-full' />
          </div>
          <div className='w-12/12 mt-5 md:ml-5 md:w-8/12 md:mt-0 text-gray-600'>
            <h1 className='text-2xl text-black'>{name}</h1>
            <p className='py-4'>{description}</p>
            {spotifyartisturl && (
              <div className='flex py-1 items-center'>
                <MusicNoteIcon className='h-5 w-5 mr-3' />
                <a
                  className='text-xs w-5/6 hover:text-gray-800'
                  href={spotifyartisturl}
                  target='_blank'
                >
                  {spotifyartisturl}
                </a>
              </div>
            )}
            {twitter && (
              <div className='flex py-1 items-center'>
                <AnnotationIcon className='h-5 w-5 mr-3' />
                <a
                  className='text-xs w-5/6 hover:text-gray-800'
                  href={`https://twitter.com/${twitter}`}
                  target='_blank'
                >
                  @{twitter}
                </a>
              </div>
            )}

            {/* <h1 className='text-2xl text-black'>{eventname}</h1>
        <p className='py-4'>{description}</p>
        <div className='flex py-1 items-center'>
          <LocationMarkerIcon className='h-5 w-5 mr-3' />
          <p className='text-xs w-5/6'>
            {venue.name}, {venue.town}
          </p>
        </div>
        <div className='flex py-1 items-center'>
          <CalendarIcon className='h-5 w-5 mr-3' />
          <p className='text-xs w-5/6'>{date}</p>
        </div>
        <div className='flex py-1 items-center'>
          <ClockIcon className='h-5 w-5 mr-3' />
          <p className='text-xs w-5/6'>
            {`${openingtimes.doorsopen} - ${openingtimes.doorsclose}`}
          </p>
        </div>
        <div className='flex py-1 items-center'>
          <TicketIcon className='h-5 w-5 mr-3' />
          <p className='text-xs w-5/6'>{entryprice}</p>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}