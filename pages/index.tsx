import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IDonator, IPartner, ISponsor } from '../types';
import Layout from '../components/Layout';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export async function getStaticProps() {
  const sponsors: ISponsor[] = [
    {
      name: 'La Mobilière',
      logo: '/sponsors/La mobilière.png',
      url: 'https://www.mobiliere.ch/',
      principal: false,
    },
    {
      name: 'BCV',
      logo: '/sponsors/BCV.png',
      url: 'https://www.bcv.ch/',
      principal: false,
    },
    {
      name: 'Harley-Davidson',
      logo: '/sponsors/Harley-Davidson.jpg',
      url: 'https://www.harley-davidson.com/ch',
      principal: false,
    },
    {
      name: 'Richa & Partners',
      logo: '/sponsors/Richa & Partners.svg',
      url: 'https://www.richa.ch/',
      principal: false,
    },
    {
      name: 'Oeno-Pôle',
      logo: '/sponsors/Oeno-Pôle.jpg',
      url: 'https://www.oeno-pole.ch/',
      principal: false,
    },
    {
      name: 'Hauswirth',
      logo: '/sponsors/Hauswirth.jpg',
      url: 'http://www.hauswirthsa.ch/',
      principal: false,
    },
    {
      name: 'Chabloz, Chiovini et Associés Sàrl',
      logo: '/sponsors/chabloz.png',
      url: 'https://www.pikbois.ch/',
      principal: false,
    },
    {
      name: 'Favez-énergie',
      logo: '/sponsors/favez.png',
      url: 'https://favez-energie.ch/',
      principal: false,
    },
    {
      name: 'Capriati SA',
      logo: '/sponsors/Capriati.webp',
      url: 'https://capriati.ch/',
      principal: false,
    },
  ];

  const partners: IPartner[] = [
  ];

  const donators: IDonator[] = [
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

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  return (
    <Layout onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival" />
        </Head>

        {/* LANDING */}
        <div className="min-h-screen w-full flex flex-col justify-center items-center relative bg-home bg-cover bg-center">
          <div className="text-center text-white">
            <p><img src="/moonalps.png" alt="Logo" className="w-42" /></p>
            <p className="leading-6 text-lg">12 août 2023</p>
            <p className="text-lg "><a href="https://goo.gl/maps/iHe1DSP6HfPQPojV6">Terrasse des tilleuls, Rolle</a></p>
            <div className="mt-8"><a className=" px-6 py-4 bg-white shadow-md text-black text-md mt-2 hover:text-red-600 hover:shadow-lg hover:bg-gray-100" href="#lineup">LINE-UP 2023</a></div>
          </div>
        </div>

        {/* CARROUSEL */}
        <div className="pb-16 pt-16 bg-white text-center p-8">
          <div className="m-auto" style={{ maxWidth: "52rem" }}>
            <p className="text-4xl mb-8 font-migra-light">Vivez le renouveau de la scène musicale rock.
              Rejoignez-nous pour la <i>Soirée MoonAlps</i>, née de l'enthousiasme du public, des artistes et du staff,
              pour une expérience inoubliable sur la Côte vaudoise.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 w-full">
              <img src={`/photos/Scene_1.png`} className="cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setIndex(0);
                }} />
              <img src={`/photos/Scene_2.png`} className="cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setIndex(1);
                }} />
              <img src={`/photos/Scene_3.png`} className="cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setIndex(2);
                }} />
            </div>
          </div>
          <Lightbox open={open} index={index} close={() => setOpen(false)} slides={[{ src: `/photos/Scene_1.png` }, { src: `/photos/Scene_2.png` }, { src: `/photos/Scene_3.png` }]} />
        </div>

        {/* INFOS */}
        <div className="bg-white text-center grid sm:grid-cols-2 gap-0 bg-black">
          <div className="bg-[url('/photos/Scene_4.png')] bg-center bg-cover"></div>
          <div className="p-4 bg-black text-white pt-16 pb-16">
            <p className="font-migra-bold font-bold text-2xl">Où ?</p>
            <p className="font-migra-light leading-5 text-lg">Terrasse des Tilleuls<br />
              Port Arthur Vittel<br />
              1180 Rolle</p>
            <p className="font-migra-light leading-5 text-md mt-2"><a href="https://terrassedestilleuls.ch" className="hover:text-red-400">www.terrassedestilleuls.ch</a></p>
            <p className="font-migra-bold font-bold text-2xl mt-8">Quand ?</p>
            <p className="font-migra-light leading-5 text-lg">Samedi 12 août 2023<br />
              Horaires:<br />
              À partir de 16h<br />
              Jusqu'à la fermeture</p>
            <p className="font-migra-bold font-bold text-2xl mt-8">Accessibilité</p>
            <p className="font-migra-light leading-5 text-lg"><i>Entrée gratuite</i></p>
            <p className="font-migra-light leading-5 text-lg">Parking Prom. John-Berney 2, 6 min. à pied<br />
              Gare de Rolle, 15 min. à pied</p>
            <p className="font-migra-light mt-8 text-md">Entrée accessible en fauteuil roulant</p>
          </div>
        </div>


        {/* LINEUP */}
        <div className="pb-16 pt-16 bg-white text-center p-8" id="lineup">
          <div className="m-auto" style={{ maxWidth: "52rem" }}>
            <p className="text-8xl mb-8 font-migra-bold font-bold">Line-up 2023</p>
            <div className="pb-32 pt-32 text-xl">
              <p><i>À décrouvrir bientot...</i></p>
            </div>
          </div>
        </div>


        {/* AFTERMOVIE */}
        <div className="pb-16 pt-16 bg-black text-white text-center p-8">
          <div className="m-auto" style={{ maxWidth: "52rem" }}>
            <p className="text-2xl mb-4 font-migra-bold font-bold">MoonAlps Festival 2022 - AfterMovie
            </p>
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/HF1DI37YaHM"
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* SPONSORS */}
        <div className="pb-16 pt-16 bg-white text-center p-8">
          <div className="m-auto" style={{ maxWidth: "52rem" }}>
            <p className="text-4xl mb-8 font-migra-light">Merci aux sponsors 2023 !</p>
            {sponsors.filter((sponsor) => sponsor.principal).length > 0 &&
              <div className="flex justify-stretch gap-8 flex-wrap w-full">
                {sponsors
                  .filter((sponsor) => sponsor.principal)
                  .map((sponsor, i) => (
                    <a key={i} href={sponsor.url} rel="noreferrer" target="_blank" className="flex justify-center items-center">
                      <img src={sponsor.logo} alt={sponsor.name} />
                    </a>
                  ))}
              </div>
            }
            <div className="flex flex-wrap justify-center sm:grid-cols-3 gap-12 w-full">
              {sponsors
                .filter((sponsor) => !sponsor.principal)
                .map((sponsor, i) => (
                  <a key={i} href={sponsor.url} rel="noreferrer" target="_blank" className="flex justify-center items-center w-48">
                    <img src={`${sponsor.logo}`} alt={sponsor.name} />
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        {/*<div className="mb-16">
            <p className="font-bold text-6xl mb-8 break-all">Partenaires</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
              {partners
                .filter((partner) => !partner.supporter)
                .map((partner, i) => (
                  <a key={i} href={partner.url} rel="noreferrer" target="_blank" className="flex justify-center items-center grayscale hover:grayscale-0 bg-white p-2">
                    <img src={`${partner.logo}`} alt={partner.name} className="w-40" />
                    <p className=" text-sm">
                      {partner.attributes.name}
                </p>
                  </a>
                ))}
            </div>
          </div>*/}

        {/* SUPPORTERS */}
        {/*<div className="mb-16 relative">
            <p className="font-bold text-4xl mb-8 break-all">Avec le soutien de</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
              {partners
                .filter((partner) => partner.supporter)
                .map((partner, i) => (
                  <a key={i} href={partner.url} rel="noreferrer" target="_blank" className="flex justify-center items-center grayscale hover:grayscale-0 bg-white p-2">
                    <img src={`${partner.logo}`} alt={partner.name} className="w-40" />
                  </a>
                ))}
            </div>
          </div>*/}

        {/* DONATORS */}
        {/*<div className="mb-16 relative">
            <p className="md:text-5xl text-4xl font-bold mb-8 break-all text-center">Merci aux donnateur·rice·s</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
              {donators.map((donator, i) => (
                <div key={i} className="flex flex-col mb-8 break-all">
                  <p className="font-bold">{donator.name}</p>
                  <p>{donator.location}</p>
                </div>
              ))}
            </div>
          </div>*/}
      </div >
    </Layout >
  );
};

export default Home;
