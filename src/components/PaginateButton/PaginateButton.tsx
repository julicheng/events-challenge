interface Props {
  onClick: () => void;
}

export default function PaginateButton({ onClick }: Props) {
  return (
    <div className='flex justify-center pt-5 pb-10'>
      <button
        onClick={onClick}
        className='rounded bg-black py-3 px-8 text-white hover:bg-gray-700 dark:hover:bg-gray-900'
      >
        load more
      </button>
    </div>
  );
}
