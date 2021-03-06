import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
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
            <p className="text-center text-8xl mt-28 mb-28 break-words">INFOS PRATIQUES</p>
            <div className=" grid md:grid-cols-2 gap-2 mb-8">
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg">
                <h2 className="text-center">Transport</h2>
                <ReactMarkdown>{info?.attributes.transport}</ReactMarkdown>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10995.779475979833!2d6.2944797!3d46.4497894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf9a8081e32006c7!2sMoonAlps%20Festival!5e0!3m2!1sen!2sch!4v1658858359793!5m2!1sen!2sch"
                  className="h-96 w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full">
                <h2 className="text-center">Dormir</h2>
                <ReactMarkdown>{info?.attributes.sleep}</ReactMarkdown>
              </div>
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full">
                <h2 className="text-center">Manger/Boire</h2>
                <ReactMarkdown>{info?.attributes.foodAndBeverage}</ReactMarkdown>
              </div>
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full">
                <h2 className="text-center">Billetterie</h2>
                <ReactMarkdown>{info?.attributes.tickets}</ReactMarkdown>
              </div>
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full">
                <h2 className="text-center">Accessibilit??</h2>
                <ReactMarkdown>{info?.attributes.accessibility}</ReactMarkdown>
              </div>
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg h-full">
                <h2 className="text-center">Sant?? & S??curit??</h2>
                <ReactMarkdown>{info?.attributes.healthAndSafety}</ReactMarkdown>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
