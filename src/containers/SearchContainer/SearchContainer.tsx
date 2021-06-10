import { useCallback, useState } from 'react';
import Layout from '../../components/Layout';
import { SearchInput, SearchResults } from '../../components/Search';
import PaginateButton from '../../components/PaginateButton/PaginateButton';

import api from '../../api';

export default function SearchContainer() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [pagesRemaining, setPagesRemaining] = useState(0);

  const getEvents = useCallback(async (keyword: string) => {
    try {
      const { results, totalcount, pagecount } =
        await api.events.getEventsByKeyword(keyword);
      !results.length
        ? setMessage(`No results were found for '${keyword}'`)
        : setMessage(`${totalcount} results were found for '${keyword}'`);
      setResults(results);
      setPagesRemaining(Math.ceil(totalcount / pagecount) - 1);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      getEvents(keyword);
    },
    [keyword, getEvents]
  );

  const onChange = useCallback((e) => {
    setKeyword(e.currentTarget.value);
  }, []);

  const handlePaginate = useCallback(async () => {
    try {
      const res = await api.events.getEventsByKeyword(keyword, results.length);
      const newResults: any = [...results, ...res.results];
      setResults(newResults);
      setPagesRemaining(pagesRemaining - 1);
    } catch (e) {
      console.error(e);
    }
  }, [keyword, results, pagesRemaining]);

  return (
    <Layout>
      <SearchInput
        handleSubmit={onSubmit}
        handleOnChange={onChange}
        keyword={keyword}
      />
      <SearchResults results={results} message={message} />
      {pagesRemaining > 0 ? (
        <PaginateButton handleClick={handlePaginate} />
      ) : null}
    </Layout>
  );
}
