import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IBand, IGallery } from '../types';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

const Tickets: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival" />
        </Head>
        <main className="bg-dark-100 text-dark-900 pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center mt-28 mb-28 break-all text-7xl md:text-8xl">BILLETTERIE</p>
            <div className="bg-white bg-opacity-80">
              <iframe src="//etickets.infomaniak.com/shop/VOwIoSPDPn/" width="100%" height="700px" />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Tickets;
