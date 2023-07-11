import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IDonator, IPartner, ISponsor, IBand } from '../types';
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

  const bands: IBand[] = [
    {
      name: 'Don\'t Kill The Cow',
      description:
        `Don't Kill The Cow est un groupe d'indie rock originaire de la région du Grand Genève, ayant déjà réalisé plus de 80 concerts sur la scène genevoise et lausannoise.
        
        Après la sortie de leur EP en mars 2020, le groupe franchit une nouvelle étape avec leur premier album intitulé "Drawing Cards", qui voit le jour en mai 2022.
        
        Leur complicité sur scène, forgée par plus de quinze ans d'amitié, se transmet au public à travers des compositions variées et originales, remplies d'émotions profondes et d'énergie débordante.`,
      url: '',
      style: 'Indie Rock',
      location: 'Genève',
      video: 'https://www.youtube.com/embed/HlG-E8jPrYE',
      image: '/bands/2023/1_dont_kill_the_cow.png',
      year: 2023,
    },
    {
      name: 'nuum.',
      description:
        `nuum. est un groupe qui fusionne habilement le grunge et la pop pour créer un son captivant, hypnotique et énergique.

        Initialement formé sous le nom de Sinai Planum en 2018, le groupe a sorti  leur premier single "Burn the Hideaway" en 2019 et leur EP "Sauvage Café" début 2021.
        
        Après une année 2021 accomplie, le groupe se réinvente suite au départ du chanteur principal et se lance sous le nom de "nuum.", composé d'Alexandre Kawecki à la basse, Jan Waligorski au chant et à la guitare, et Loïc Cattin à la batterie.`,
      url: '',
      style: 'Neo-grunge',
      location: 'Vaud',
      video: 'https://www.youtube.com/embed/8707c6IRsiM',
      image: '/bands/2023/2_nuum.png',
      year: 2023,
    },
    {
      name: 'The Meseeks',
      description:
        `The Meseeks est un trio punk rock de Brig formé en 2018, qui a sorti son premier EP "RENEGADE" un an plus tard.

        Après de nombreux concerts énergiques et passionnés, le groupe a commencé à écrire de nouvelles chansons et a développé son propre son, quelque part entre l'indie, l'emo et le post-punk.

        Leur nouvel EP "HEAVY DREAMS / PLASMONIC VIBES" explore la réflexion autocritique de la routine quotidienne et les rêves euphoriques.
        `,
      url: '',
      style: 'Punk Rock',
      location: 'Valais',
      video: 'https://www.youtube.com/embed/9ToEvKHn3q4',
      image: '/bands/2023/3_the_meseeks.png',
      year: 2023,
    },
    {
      name: 'Fluffy Machine',
      description:
        `Fluffy Machine s'est fait un nom dans la scène punk rock européenne au cours des 5 dernières années, s'inspirant de groupes tels que IDLES et Clowns.

        En 2019, ils ont enregistré leur premier album "Mutual Admiration Society" qui explore le skate punk à la manière californienne.
        
        Avec leur dernier album "Alive But Not Dead"  sorti en 2021 et le single "i'm always high when i see you smile" sorti en 2022, ils nous offrent une ambiance estivale revigorante, raffraichissante et dynamique.`,
      url: '',
      style: 'Punk Rock',
      location: 'Valais',
      video: 'https://www.youtube.com/embed/IlVeeiTKuMU',
      image: '/bands/2023/4_fluffy_machine.png',
      year: 2023,
    },
  ];

  return {
    props: { sponsors, partners, donators, bands },
  };
}

type IProps = {
  sponsors: ISponsor[];
  partners: IPartner[];
  donators: IDonator[];
  bands: IBand[];
};

const Home: NextPage<IProps> = ({ sponsors, partners, donators, bands }: IProps) => {
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
        <div className="pb-16 pt-16 bg-white p-8" id="lineup">
          <div className="m-auto">
            <p className="text-8xl mb-8 font-migra-bold font-bold text-center">Line-up 2023</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-4 px-8">
              {bands.map((band: IBand, i: number) => (
                <div key={i} className="h-full flex flex-col">
                  <div style={{ backgroundImage: `url(${band.image})` }} className="bg-center bg-cover grayscale h-80 mb-8 w-full" ></div>
                  <p className="text-xl font-migra-bold leading-6">{band.name}</p>
                  <p className="text-sm mb-4 font-bold">{band.location} · {band.style}</p>
                  <p className="text-xs font-light whitespace-pre-line">{band.description}</p>
                  <div className="flex-grow"></div>
                  {
                    band.video && (
                      <div className="mt-4">
                        <div className="relative w-full h-32 grayscale">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={band.video}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )
                  }
                </div>
              ))}
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
