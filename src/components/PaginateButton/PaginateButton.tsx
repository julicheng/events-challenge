interface Props {
  handleClick: () => void;
}

export default function PaginateButton({ handleClick }: Props) {
  return (
    <div className='flex justify-center pt-8 pb-10'>
      <button
        onClick={handleClick}
        className='rounded bg-black py-3 px-8 text-white hover:bg-gray-700'
      >
        load more
      </button>
    </div>
  );
}
