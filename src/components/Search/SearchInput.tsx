import { ChangeEvent, FormEvent } from 'react';

interface Props {
  handleSubmit: (e: FormEvent) => void;
  handleOnChange: (e: ChangeEvent) => void;
  keyword: string;
}
export default function SearchInput({
  handleSubmit,
  handleOnChange,
  keyword,
}: Props) {
  return (
    <form onSubmit={handleSubmit} className='flex justify-center p-9'>
      <input
        value={keyword}
        onChange={handleOnChange}
        type='search'
        placeholder='Search for events'
        className='border shadow border-transparent rounded p-2 w-10/12 md:w-6/12 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent mr-2'
      />
      <input
        type='submit'
        value='Search'
        className='shadow-md rounded w-20 text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 '
      />
    </form>
  );
}
