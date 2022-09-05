import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IBand, IDonator, IGallery, IGeneral, IPartner, ISponsor } from '../types';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';
import Link from 'next/link';

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

  const res3 = await fetch(`${URL}/api/donators?populate=*`);
  const { data: donators } = await res3.json();

  return {
    props: { general, bands, galleries, sponsors, partners, donators },
  };
}

type IProps = {
  sponsors: ISponsor[];
  partners: IPartner[];
  donators: IDonator[];
  general: IGeneral;
  bands: IBand[];
  galleries: IGallery[];
};

const Home: NextPage<IProps> = ({ sponsors, partners, general, bands, galleries, donators }: IProps) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
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
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-800 fill-transparent" style={{ height: '50rem', transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
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
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden">
            <Tree
              className="w-full stroke-dark-200 fill-transparent"
              style={{ height: '50rem', transform: `translate(-${scroll / 15}px, ${scroll / 15}px)` }}
            />
          </div>
          <div className="text-center -mt-2 relative">
            <p className="text-9xl mb-24">
              Une 3<sup>ème</sup> édition sur 2 jours !
            </p>
            <div className="flex flex-wrap justify-center gap-1">
              <Link href="/lineup/2022">
                <a className="text-4xl p-8 bg-dark-900 text-dark-100 hover:invert">Lineup 2022</a>
              </Link>
              <Link href="/tickets">
                <a className="text-4xl p-8 bg-dark-900 text-dark-100 hover:invert">Billetterie</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-dark-900 text-primary w-full p-16 fill-blue-500 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden">
            <Tree
              className="-ml-24 -mt-48 w-full stroke-dark-200 fill-transparent"
              style={{ height: '50rem', transform: `translate(${scroll / 25}px, ${scroll / 25}px)` }}
            />
          </div>
          <div className="bg-white text-dark-900 rounded-md py-16 text-center relative">
            <p className="text-6xl mb-16 break-all">SPONSORS</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {sponsors
                  .filter((sponsor) => sponsor.attributes.principal)
                  .sort((a, b) => a.attributes.order - b.attributes.order)
                  .map((sponsor, i) => (
                    <a key={i} href={sponsor.attributes.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${sponsor.attributes.logo.data?.attributes.url}`} alt={sponsor.attributes.name} className="w-96" />
                      {/* <p className=" text-sm">
                      {sponsor.attributes.name}
                </p> */}
                    </a>
                  ))}
              </div>
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {sponsors
                  .filter((sponsor) => !sponsor.attributes.principal)
                  .sort((a, b) => a.attributes.order - b.attributes.order)
                  .map((sponsor, i) => (
                    <a key={i} href={sponsor.attributes.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${sponsor.attributes.logo.data?.attributes.url}`} alt={sponsor.attributes.name} className="w-60" />
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
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden">
            <Tree
              className="-mr-24 -mt-48 w-full stroke-dark-200 fill-transparent"
              style={{ height: '50rem', transform: `translate(${scroll / 30}px, ${scroll / 30 + 800}px)` }}
            />
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden">
            <Tree
              className="-mr-24 -mt-48 w-full stroke-dark-200 fill-transparent"
              style={{ height: '50rem', transform: `translate(${-scroll / 30 - 120}px, ${scroll / 30}px)` }}
            />
          </div>
          <div className="bg-white text-dark-900 rounded-md py-16 text-center relative mb-16">
            <p className="text-6xl mb-16 break-all">PARTENAIRES</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {partners
                  .filter((partner) => !partner.attributes.supporter)
                  .sort((a, b) => a.attributes.order - b.attributes.order)
                  .map((partner, i) => (
                    <a key={i} href={partner.attributes.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${partner.attributes.logo.data?.attributes.url}`} alt={partner.attributes.name} className="w-96" />
                      {/* <p className=" text-sm">
                      {partner.attributes.name}
                </p> */}
                    </a>
                  ))}
              </div>
            </div>
            <p className="text-xl mt-8 mb-4 break-words">Avec le soutien de</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {partners
                  .filter((partner) => partner.attributes.supporter)
                  .sort((a, b) => a.attributes.order - b.attributes.order)
                  .map((partner, i) => (
                    <a key={i} href={partner.attributes.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${partner.attributes.logo.data?.attributes.url}`} alt={partner.attributes.name} className="w-60" />
                      {/* <p className=" text-sm">
                      {partner.attributes.name}
                </p> */}
                    </a>
                  ))}
              </div>
            </div>
          </div>
          <div className="rounded-md py-16 text-center relative text-dark-900">
            <p className="text-6xl mb-16 break-words">Le Moonalps Festival remercie ses donnateur·rice·s</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
              {donators
                .sort((a, b) => a.attributes.position - b.attributes.position)
                .map((donator, i) => (
                  <div key={i} className="flex flex-col justify-center text-center mb-8 break-all">
                    <p className="font-bold">{donator.attributes.name}</p>
                    <p>{donator.attributes.location}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
