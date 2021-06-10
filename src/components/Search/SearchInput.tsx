import { ChangeEvent, FormEvent } from 'react';

interface Props {
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent) => void;
  keyword: string;
}
export default function SearchInput({ onSubmit, onChange, keyword }: Props) {
  return (
    <form onSubmit={onSubmit} className='flex justify-center p-9'>
      <input
        value={keyword}
        onChange={onChange}
        type='search'
        placeholder='Search for events'
        className='dark:text-gray-200 dark:bg-gray-600 border shadow border-transparent rounded p-2 w-10/12 md:w-6/12 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent mr-2'
      />
      <input
        type='submit'
        value='Search'
        className='dark:bg-gray-700 dark:hover:bg-gray-900 shadow-md rounded w-20 text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 '
      />
    </form>
  );
}
