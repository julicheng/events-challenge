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

  /**
   * Gets all the events with the associated
   * search term
   */
  const getEvents = useCallback(async (keyword: string) => {
    try {
      const { results, totalcount, pagecount } =
        await api.events.getEventsByKeyword(keyword);
      // State for displaying message above results
      !results.length
        ? setMessage(`No results were found for '${keyword}'`)
        : setMessage(`${totalcount} results were found for '${keyword}'`);
      setResults(results);
      // Counts how many pages are still available to paginate
      setPagesRemaining(Math.ceil(totalcount / pagecount) - 1);
    } catch (e) {
      console.error(e);
    }
  }, []);

  /**
   * Handles submit
   */
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      getEvents(keyword);
    },
    [keyword, getEvents]
  );

  /**
   *  Updates keyword change
   */
  const onChange = useCallback((e) => {
    setKeyword(e.currentTarget.value);
  }, []);

  /**
   * Handles pagination by calling endpoind
   * and padding in the offset of where last result is
   */
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
    <Layout search={false}>
      <SearchInput onSubmit={onSubmit} onChange={onChange} keyword={keyword} />
      <SearchResults results={results} message={message} />
      {/* Only displays button when pages are available to paginate */}
      {pagesRemaining > 0 ? <PaginateButton onClick={handlePaginate} /> : null}
    </Layout>
  );
}
