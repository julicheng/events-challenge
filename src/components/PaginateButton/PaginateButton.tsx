interface Props {
  handleClick: () => void;
}

export default function PaginateButton({ handleClick }: Props) {
  return (
    <div className='flex justify-center pt-5 pb-10'>
      <button
        onClick={handleClick}
        className='rounded bg-black py-3 px-8 text-white hover:bg-gray-700 dark:hover:bg-gray-900'
      >
        load more
      </button>
    </div>
  );
}
