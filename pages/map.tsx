import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const About: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout onScroll={(value) => setScroll(value)}>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival" />
        </Head>

        <main className="pt-20 p-2 text-justify relative">
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 break-words font-migra-bold">PLAN DU FESTIVAL</p>
            <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full w-fit m-auto">
              <img src="/info/plan_2022.png" alt="Plan" className="max-w-full m-auto" />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
