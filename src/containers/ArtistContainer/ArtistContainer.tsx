import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ArtistDetails } from '../../components/ArtistDetails';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import api from '../../api';

export default function ArtistContainer() {
  const { id }: { id: string } = useParams();
  const [artist, setArtist] = useState(null);

  const getArtist = useCallback(async () => {
    try {
      const res = await api.artist.getArtist(id);
      setArtist(res);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    getArtist();
  }, [getArtist]);

  if (!id || Array.isArray(artist) || !artist)
    return <PageNotFound message={'Could not find artist'} />;

  return (
    <Layout>
      <ArtistDetails artist={artist} />
    </Layout>
  );
}
