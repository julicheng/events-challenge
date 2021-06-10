import { SearchCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  search?: boolean;
}

export default function Layout({ children, search = true }: Props) {
  return (
    <div className='bg-gray-200 min-h-full min-w-full'>
      {search ? (
        <div className='p-3 flex flex-col'>
          <Link
            to='/'
            className='mx-auto mt-2 flex items-center hover:text-gray-600'
          >
            <SearchCircleIcon className='h-5 w-5 mr-1' /> back to search
          </Link>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
