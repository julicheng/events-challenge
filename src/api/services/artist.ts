import api, { API_KEY } from '../api';

// API path to the artist service
const path = 'artist';

/**
 * Get artist info
 *
 * @param id artist id
 */
const getArtist = async (id: string) => {
  const res = await api.request({
    method: 'GET',
    url: `${path}/${id}`,
    params: { api_key: API_KEY },
  });
  return res.data.results;
};

export default {
  getArtist,
};
