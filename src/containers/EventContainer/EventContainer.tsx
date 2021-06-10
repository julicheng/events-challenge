import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Event } from '../../components/Event';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import api from '../../api';

export default function EventContainer() {
  const { id }: { id: string } = useParams();
  const [event, setEvent] = useState(null);

  const getEvent = useCallback(async () => {
    try {
      const res = await api.events.getEventDetails(id);
      setEvent(res);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    getEvent();
  }, [getEvent]);

  if (!id || Array.isArray(event) || !event)
    return <PageNotFound message={'Could not find event'} />;

  return (
    <Layout>
      <Event event={event} />
    </Layout>
  );
}
