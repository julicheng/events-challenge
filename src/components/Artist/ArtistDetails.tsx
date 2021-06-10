import { MusicNoteIcon, AnnotationIcon } from '@heroicons/react/outline';
import React from 'react';

export interface ArtistDetailsProps {
  description?: string;
  name: string;
  spotifyartisturl?: string;
  twitter?: string;
  imageurl?: string;
}

interface Props {
  artist: ArtistDetailsProps;
}

export default function ArtistDetails({ artist }: Props) {
  const { description, name, spotifyartisturl, twitter, imageurl } = artist;
  return (
    <div className='shadow-md rounded mx-auto mt-5 bg-white justify-center p-5 md:p-9 w-10/12 md:w-9/12 lg:w-7/12 dark:bg-gray-700'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-12/12 md:w-4/12'>
          <img src={imageurl} alt={name} className='rounded w-full' />
        </div>
        <div className='w-12/12 mt-5 md:ml-5 md:w-8/12 md:mt-0 text-gray-600 dark:text-gray-300'>
          <h1 className='text-2xl text-black dark:text-gray-200'>{name}</h1>
          <p className='py-4'>{description}</p>
          {/* If spotify /twitter link is available we display the link */}
          {spotifyartisturl && (
            <div className='flex py-1 items-center'>
              <MusicNoteIcon className='h-5 w-5 mr-3' />
              <a
                className='text-xs w-5/6 hover:text-gray-800 dark:hover:text-gray-400'
                href={spotifyartisturl}
                target='_blank'
                rel='noreferrer'
              >
                {spotifyartisturl}
              </a>
            </div>
          )}
          {twitter && (
            <div className='flex py-1 items-center'>
              <AnnotationIcon className='h-5 w-5 mr-3' />
              <a
                className='text-xs w-5/6 hover:text-gray-800 dark:hover:text-gray-400'
                href={`https://twitter.com/${twitter}`}
                target='_blank'
                rel='noreferrer'
              >
                @{twitter}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
