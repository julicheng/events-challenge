import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  artistid: string;
  image: string;
  name: string;
}

export default function Artist({ artistid, image, name }: Props) {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/artist/${artistid}`);
  }, [history, artistid]);

  return (
    <div
      className='rounded m-4 p-5 bg-gray-100 shadow-md w-60 cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex flex-col h-full justify-around'>
        <img src={image} alt={name} className='rounded' />
        <p className='text-center mt-3'>{name}</p>
      </div>
    </div>
  );
}
