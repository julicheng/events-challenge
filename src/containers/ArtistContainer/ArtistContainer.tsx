import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ArtistDetails } from '../../components/Artist';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import api from '../../api';
import Loading from '../../components/Loading';
import { ArtistDetailsProps } from '../../components/Artist/ArtistDetails';

export default function ArtistContainer() {
  const { id }: { id: string } = useParams();
  const [artist, setArtist] = useState<ArtistDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Gets details about the artist
   */
  const getArtist = useCallback(async () => {
    try {
      const res = await api.artist.getArtist(id);
      setArtist(res);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getArtist();
  }, [getArtist]);

  if (loading) return <Loading />;

  // If artist is not found we display a not found message
  if (!id || Array.isArray(artist) || !artist)
    return <PageNotFound message={'Could not find artist'} />;

  return (
    <Layout>
      <ArtistDetails artist={artist} />
    </Layout>
  );
}
