import React from 'react';
import Artist from './Artist';

interface Props {
  artists: any;
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
                return <Artist key={artist.id} {...artist} />;
              })
            : null}
        </div>
      </div>
    </>
  );
}
