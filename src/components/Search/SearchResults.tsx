import SearchResult, { SearchResultProps } from './SearchResult';

interface Props {
  results: SearchResultProps[];
  message: string;
}

export default function SearchResults({ results, message }: Props) {
  return (
    <div className='flex justify-center flex-col'>
      <p className='text-center mb-3'>{message}</p>
      <div className='flex flex-wrap w-12/12 md:w-10/12 mx-auto justify-around flex-auto'>
        {results.length
          ? results.map((result) => {
              return <SearchResult key={result.id} {...result} />;
            })
          : null}
      </div>
    </div>
  );
}
