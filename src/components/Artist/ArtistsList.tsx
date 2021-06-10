import React from 'react';
import Artist, { ArtistProps } from './Artist';

interface Props {
  artists: ArtistProps[];
}

export default function ArtistsList({ artists }: Props) {
  return (
    <>
      <hr className='my-8' />
      <div>
        <h2 className='text-xl text-center mb-5'>Artists</h2>
        <div className='flex flex-wrap w-full justify-center items-center'>
          {artists.length
            ? artists.map((artist: any) => {
                return <Artist key={artist.artistid} {...artist} />;
              })
            : null}
        </div>
      </div>
    </>
  );
}
