import React from 'react';
import Artist, { ArtistProps } from './Artist';

interface Props {
  artists: ArtistProps[];
}

export default function ArtistsList({ artists }: Props) {
  return (
    <div>
      <h2 className='text-xl text-center mt-10 my-3 dark:text-gray-300'>
        Artists
      </h2>
      <div className='flex flex-wrap w-full justify-center items-center'>
        {artists.length
          ? artists.map((artist: any) => {
              return <Artist key={artist.artistid} {...artist} />;
            })
          : null}
      </div>
    </div>
  );
}
