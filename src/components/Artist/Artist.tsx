import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export interface ArtistProps {
  artistid: string;
  image: string;
  name: string;
}

export default function Artist({ artistid, image, name }: ArtistProps) {
  const history = useHistory();

  // Clicking on the div of the artist will
  // link to artists page
  const handleClick = useCallback(() => {
    history.push(`/artist/${artistid}`);
  }, [history, artistid]);

  return (
    <div
      className='rounded m-4 p-5 bg-gray-100 shadow-md w-60 cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex flex-col h-full justify-around'>
        <img src={image} alt={name} className='rounded w-52 h-52' />
        <p className='text-center mt-3'>{name}</p>
      </div>
    </div>
  );
}
