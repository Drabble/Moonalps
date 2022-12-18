import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IDonator, IPartner, ISponsor } from '../types';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

export async function getStaticProps() {
  const sponsors: ISponsor[] = [
    {
      name: 'Blackbird',
      logo: '/sponsors/1_blackbird.webp',
      url: 'https://www.blackbirdhouse.ch/',
      principal: false,
    },
    {
      name: 'Blackbird house',
      logo: '/sponsors/2_blackbird.webp',
      url: 'https://www.blackbirdhouse.ch/',
      principal: false,
    },
    {
      name: 'Blackbird',
      logo: '/sponsors/3_easycycle.webp',
      url: 'https://www.easycycle.ch/',
      principal: false,
    },
    {
      name: 'Blackbird',
      logo: '/sponsors/4_hauswirth.webp',
      url: 'http://www.hauswirthsa.ch/',
      principal: false,
    },
    {
      name: 'Blackbird',
      logo: '/sponsors/5_dorin.webp',
      url: 'https://www.garagedorin.ch/',
      principal: false,
    },
    {
      name: 'Isofloc',
      logo: '/sponsors/6_isofloc.webp',
      url: 'https://www.pikbois.ch/',
      principal: false,
    },
    {
      name: 'Blackbird',
      logo: '/sponsors/7_richa.png',
      url: 'https://www.richa.ch/',
      principal: false,
    },
    {
      name: 'La Mobilière',
      logo: '/sponsors/8_mobiliere.jpg',
      url: 'https://www.mobiliere.ch/',
      principal: false,
    },
    {
      name: 'Auberge de Luins',
      logo: '/sponsors/9_luins.png',
      url: 'https://www.aubergedeluins.ch/',
      principal: false,
    },
    {
      name: 'BCV',
      logo: '/sponsors/10_bcv.webp',
      url: 'https://www.bcv.ch/',
      principal: false,
    },
  ];

  const partners: IPartner[] = [
    {
      name: 'FMR',
      logo: '/partners/1_fmr.webp',
      url: 'http://fmrbrewing.com/',
      supporter: false,
    },
    {
      name: 'Montagnon',
      logo: '/partners/2_montagnon.png',
      url: 'https://www.lomontagnon.ch/',
      supporter: false,
    },
    {
      name: 'Manouchy',
      logo: '/partners/3_manouchy.png',
      url: 'https://manouchy.ch/',
      supporter: false,
    },
    {
      name: 'Wynatypic',
      logo: '/partners/4_wynatypic.jpg',
      url: 'https://www.winatypic.com/',
      supporter: false,
    },
    {
      name: 'ABC',
      logo: '/partners/5_abc.png',
      url: 'http://www.abctaxis.ch/',
      supporter: false,
    },
    {
      name: 'Commune de Bursins',
      logo: '/partners/6_bursins.png',
      url: 'https://www.bursins.ch/',
      supporter: true,
    },
  ];

  const donators: IDonator[] = [
    {
      name: 'Feel Zen',
      location: 'Bursins',
    },

    {
      name: 'Oeno-Pôle Sàrl',
      location: 'Bursins',
    },

    {
      name: 'Club de pétanque Phénix',
      location: 'Burisins',
    },

    {
      name: 'Boulangerie CH. Fayet',
      location: 'Bursins',
    },

    {
      name: 'Pizzeria Bella Vita',
      location: 'Gland',
    },

    {
      name: 'Capriati SA',
      location: 'Rolle',
    },

    {
      name: 'Birchler Récupération Sàrl',
      location: 'Etoy',
    },

    {
      name: 'Favez Energie Sàrl',
      location: 'Mont-sur-Rolle',
    },

    {
      name: 'TOTEM Escalade',
      location: 'Meyrin Versoix Gland Ecublens Vevey',
    },

    {
      name: 'Hans Nobs & Cie AG',
      location: 'Münchenbuchsee',
    },

    {
      name: 'Infomaniak Events',
      location: '',
    },

    { name: 'FC BRP', location: '' },

    {
      name: 'Gabriela Cantero Oriol',
      location: '',
    },

    {
      name: 'Melisa Oriol',
      location: '',
    },

    {
      name: 'David Oriol',
      location: '',
    },

    {
      name: 'Joëlle Carriot',
      location: '',
    },

    {
      name: 'Margrith Dumuid-Galliker',
      location: '',
    },

    {
      name: 'Alexandre Dumuid',
      location: '',
    },

    {
      name: 'Timothée Spörli',
      location: '',
    },

    {
      name: 'Michela Terribilini',
      location: '',
    },

    {
      name: 'Loïc Stefano Cattin',
      location: '',
    },
  ];

  return {
    props: { sponsors, partners, donators },
  };
}

type IProps = {
  sponsors: ISponsor[];
  partners: IPartner[];
  donators: IDonator[];
};

const Home: NextPage<IProps> = ({ sponsors, partners, donators }: IProps) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout onScroll={(value) => setScroll(value)} inverse={false}>
      <div className="bg-dark-900">
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival" />
        </Head>

        <div className="min-h-screen w-full flex flex-col justify-center items-center pb-16 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-800 fill-transparent" style={{ height: '50rem', transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <Image src="/cover_full.svg" alt="Logo" width={1200} height={400} />
        </div>

        <div className="bg-dark-100 text-dark-900 min-h-screen flex justify-center items-center p-2 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden">
            <Tree
              className="w-full stroke-dark-200 fill-transparent"
              style={{ height: '50rem', transform: `translate(-${scroll / 15}px, ${scroll / 15}px)` }}
            />
          </div>
          <div className="text-center -mt-2 relative">
            <p className="text-9xl mb-24 mt-24">
              Une 4<sup>ème</sup> édition ?
            </p>
            {/* <div className="flex flex-wrap justify-center gap-1 mb-24">
              <a href="horaires_2022.pdf" target="blank" className="text-4xl p-8 bg-dark-900 text-dark-100 hover:invert">
                Horaire
              </a>
              <Link href="/lineup/2022">
                <a className="text-4xl p-8 bg-dark-900 text-dark-100 hover:invert ">Lineup 2022</a>
              </Link>
              <Link href="/tickets">
                <a className="text-4xl p-8 bg-dark-900 text-dark-100 hover:invert">Billetterie</a>
              </Link>
            </div> */}
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
                  .filter((sponsor) => sponsor.principal)
                  .map((sponsor, i) => (
                    <a key={i} href={sponsor.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={sponsor.logo} alt={sponsor.name} className="w-96" />
                    </a>
                  ))}
              </div>
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {sponsors
                  .filter((sponsor) => !sponsor.principal)
                  .map((sponsor, i) => (
                    <a key={i} href={sponsor.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${sponsor.logo}`} alt={sponsor.name} className="w-60" />
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
                  .filter((partner) => !partner.supporter)
                  .map((partner, i) => (
                    <a key={i} href={partner.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${partner.logo}`} alt={partner.name} className="w-96" />
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
                  .filter((partner) => partner.supporter)
                  .map((partner, i) => (
                    <a key={i} href={partner.url} rel="noreferrer" target="_blank" className="flex flex-col justify-center items-center">
                      <img src={`${partner.logo}`} alt={partner.name} className="w-60" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
          <div className="rounded-md py-16 text-center relative text-dark-900">
            <p className="text-6xl mb-16 break-words">Le Moonalps Festival remercie ses donnateur·rice·s</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
              {donators.map((donator, i) => (
                <div key={i} className="flex flex-col justify-center text-center mb-8 break-all">
                  <p className="font-bold">{donator.name}</p>
                  <p>{donator.location}</p>
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
