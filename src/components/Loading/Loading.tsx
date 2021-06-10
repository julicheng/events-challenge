import React from 'react';
import Layout from '../Layout';

export default function Loading() {
  return (
    <Layout search={false}>
      <p className='dark:text-gray-300 text-center p-5'>Loading...</p>
    </Layout>
  );
}
