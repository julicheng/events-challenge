import React from 'react';

interface Props {
  icon: React.ReactNode;
  text: string;
}

export default function IconInfo({ text, icon }: Props) {
  return (
    <div className='flex py-1 items-center'>
      {icon}
      <p className='text-xs w-5/6'>{text}</p>
    </div>
  );
}
