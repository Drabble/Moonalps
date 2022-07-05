import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { IGeneral } from '../types';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res.json();

  return {
    props: { general },
  };
}

type IProps = {
  general: IGeneral,
}

const About: NextPage<IProps> = ({ general }: IProps) => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout general={general} onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta
            name="description"
            content={general?.attributes.metaDescription}
          />
        </Head>

        <main className="bg-dark-100 text-dark-900 pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <Tree
              className="w-full stroke-dark-200 fill-transparent"
              style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }}
            />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28">LE FESTIVAL</p>
            <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg mb-8">
              <ReactMarkdown>{general?.attributes.about}</ReactMarkdown>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
