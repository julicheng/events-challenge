import api, { API_KEY } from '../api';

// API path to the events service
const path = 'events';

/**
 * Get events by keyword
 *
 * @param keyword to search
 * @returns
 */
const getEventsByKeyword = async (keyword: string) => {
  const res = await api.request({
    method: 'GET',
    url: `${path}/search`,
    params: { keyword, api_key: API_KEY },
  });
  return res;
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
  return res;
};

export default {
  getEventsByKeyword,
  getEventDetails,
};
