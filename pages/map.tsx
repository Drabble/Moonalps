import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

const About: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival" />
        </Head>

        <main className="pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 break-words">PLAN DU FESTIVAL</p>
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
