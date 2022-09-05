import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { IBand, IGallery, IGeneral, IInfo } from '../types';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const bandsResponse = await fetch(`${URL}/api/bands?populate=*`);
  const { data: bands } = await bandsResponse.json();

  const generalResponse = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await generalResponse.json();

  const galleriesResponse = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await galleriesResponse.json();

  const infoResponse = await fetch(`${URL}/api/info?populate=*`);
  const { data: info } = await infoResponse.json();

  return {
    props: { general, bands, galleries, info },
  };
}

type IProps = {
  general: IGeneral;
  bands: IBand[];
  galleries: IGallery[];
  info: IInfo;
};

const About: NextPage<IProps> = ({ general, bands, galleries, info }: IProps) => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout general={general} bands={bands} galleries={galleries} onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta name="description" content={general?.attributes.metaDescription} />
        </Head>

        <main className="bg-dark-100 text-dark-900 pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 break-words">PLAN DU FESTIVAL</p>
            <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full">
              <div className="mb-4">
                <img src={`${info.attributes.map.data?.attributes.url}`} alt="Plan" className="w-full" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
