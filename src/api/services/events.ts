import api, { API_KEY } from '../api';

// API path to the events service
const path = 'events';

/**
 * Get events by keyword
 *
 * @param keyword to search
 * @param offset record to start at
 * @returns
 */
const getEventsByKeyword = async (keyword: string, offset?: number) => {
  const res = await api.request({
    method: 'GET',
    url: `${path}/search`,
    params: { keyword, api_key: API_KEY, offset },
  });
  return res.data;
};

/**
 * Get event details
 *
 * @param id of the event
 * @returns
 */
const getEventDetails = async (id: string) => {
  const res = await api.request({
    method: 'GET',
    url: `${path}/${id}`,
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

export default {
  getEventsByKeyword,
  getEventDetails,
};
