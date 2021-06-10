import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Event } from '../../components/Event';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import api from '../../api';
import Loading from '../../components/Loading';
import ArtistsList from '../../components/Artist/ArtistsList';
import { EventProps } from '../../components/Event/Event';

export default function EventContainer() {
  const { id }: { id: string } = useParams();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  /**
   * Gets event info
   */
  const getEvent = useCallback(async () => {
    try {
      const res = await api.events.getEventDetails(id);
      setEvent(res);
      setArtists(res.artists);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    getEvent();
  }, [getEvent]);

  if (loading) return <Loading />;

  // If event is not found we display a not found message
  if (!id || Array.isArray(event) || !event)
    return <PageNotFound message={'Could not find event'} />;

  return (
    <Layout>
      <Event event={event} />

      {artists.length ? <ArtistsList artists={artists} /> : null}
    </Layout>
  );
}
