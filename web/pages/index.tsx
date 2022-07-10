import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IBand, IGallery, IGeneral, IPartner, ISponsor } from '../types';
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

  const res = await fetch(`${URL}/api/sponsors?populate=*`);
  const { data: sponsors } = await res.json();

  const res2 = await fetch(`${URL}/api/partners?populate=*`);
  const { data: partners } = await res2.json();

  return {
    props: { general, bands, galleries, sponsors, partners },
  };
}

type IProps = {
  sponsors: ISponsor[];
  partners: IPartner[];
  general: IGeneral;
  bands: IBand[];
  galleries: IGallery[];
};

const Home: NextPage<IProps> = ({ sponsors, partners, general, bands, galleries }: IProps) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      console.log(window.innerHeight, window.innerWidth);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout general={general} bands={bands} galleries={galleries} onScroll={(value) => setScroll(value)} inverse={false}>
      <div className="bg-dark-900">
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta name="description" content={general?.attributes.metaDescription} />
        </Head>

        <div className="min-h-screen w-full flex flex-col justify-center items-center pb-16 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <Tree className="w-full stroke-dark-800 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <Image src="/cover_full.svg" alt="Logo" width={1200} height={400} />
          {/* <div
            style={{
              position: 'absolute',
              bottom: '0',
              background: `url(${`/trees2.svg`}) `,
              backgroundPosition: "bottom",
              backgroundSize: `${width}px ${width / 4}px`,
              backgroundRepeat: "repeat",
              height: `100%`,
              width: '100%',
            }}
          ></div> */}
        </div>

        <div className="bg-dark-100 text-dark-900 min-h-screen flex justify-center items-center p-2 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(-${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="text-center -mt-2 relative">
            <p className="text-9xl mb-16">
              Une 3<sup>ème</sup> édition sur 2 jours !
            </p>
          </div>
        </div>
        <div className="bg-dark-900 text-primary w-full p-16 fill-blue-500 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="bg-white text-dark-900 rounded-md py-16 text-center relative">
            <p className="text-6xl mb-16">SPONSORS</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {sponsors.map((sponsor, i) => (
                  <a key={i} href={sponsor.attributes.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                    <img src={`${sponsor.attributes.logo.data.attributes.url}`} alt={sponsor.attributes.name} className="w-60" />
                    {/* <p className=" text-sm">
                      {sponsor.attributes.name}
                </p> */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-100 text-primary w-full p-16 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex">
            <Tree className="w-full stroke-dark-800 fill-transparent" style={{ transform: `translate(-${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="bg-white text-dark-900 rounded-md py-16 text-center relative">
            <p className="text-6xl mb-16">PARTENAIRES</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {partners.map((partner, i) => (
                  <a key={i} href={partner.attributes.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                    <img src={`${partner.attributes.logo.data.attributes.url}`} alt={partner.attributes.name} className="w-60" />

                    {/* <p className=" text-sm">
                      {partner.attributes.name}
                </p> */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
