import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IDonator, IPartner, ISponsor } from '../types';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';
import Link from 'next/link';

export async function getStaticProps() {
  const sponsors: ISponsor[] = [
    {
      name: 'Blackbird',
      logo: '/sponsors/1_blackbird.webp',
      url: 'https://www.blackbirdhouse.ch/',
      principal: false,
    },
    {
      name: 'Easycycle',
      logo: '/sponsors/3_easycycle.webp',
      url: 'https://www.easycycle.ch/',
      principal: false,
    },
    {
      name: 'Hauswirth',
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
      name: 'Richa',
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
    <Layout onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival" />
        </Head>

        <div className="min-h-screen w-full flex flex-col justify-center items-center pb-16 relative">
          {/*<div className="absolute top-0 bottom-0 right-0 left-0 bg-moonalps bg-center bg-cover grayscale-50 brightness-75 saturate-200 backdrop-blur-lg"></div>
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent from-80% via-transparent via-80% to-dark-900 to-90%"></div>*/}
          {//<a href="https://www.freepik.com/free-vector/vintage-trees-forest-silhouettes-set_7997410.htm#query=tree&position=1&from_view=search&track=sph">Image by dgim-studio</a> on Freepik
          }
          <div className="absolute m-auto"><Image src="/trees.png" alt="Trees" width={800} height={600} title="Image by dgim-studio" /></div>
          <Image src="/cover_full.svg" alt="Logo" width={800} height={400} />
        </div>

        <div className="p-4 m-auto text-justify" style={{ maxWidth: "58rem" }}>

          <div className="mb-16">
            {/*<p className="md:text-9xl text-8xl font-bold mb-20 mt-24 text-center">
              4<sup>ème</sup> édition
        </p>*/}
            <div className="mb-16">
              <p className="md:text-7xl text-4xl font-bold  mt-16 mb-8 text-center">
                After movie 2022 🔥
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
            <p className="md:text-7xl text-4xl font-bold  mt-16 mb-8 text-center">
              Take the MoonStage!
            </p>
            <p>
              L&apos;un des buts de notre festival est la promotion des groupes et musicien·e·s de Suisse romande. On revient donc avec Take the MoonStage pour te donner l&apos;occasion d&apos;ouvrir une belle soirée de concerts !<br /><br />

              Alors, ça te parle ? Tu fais de la musique ? Tu as un groupe ou tu connais un jeune groupe dans ta région ? N&apos;hésite plus !<br /><br />

              Voici les critères :
            </p>

            <ul>
              <li>Âge des musicien·e·s : 16-22 ans (pour la moitié des membres au moins)</li>
              <li>Genre : plusieurs styles possibles, mais avec influence rock</li>
              <li>Provenance : Suisse romande</li>
            </ul><br />
            <p>
              Ce qu&apos;il faut nous envoyer :</p>

            <ul><li> Une brève biographie</li>
              <li>Nombre de concerts déjà faits</li>
              <li>Bande son / démo / lien Spotify (de préférence des compositions)</li>
              <li>Photo du groupe</li>
            </ul><br />

            <p> Ce que le groupe sélectionné gagne :</p>

            <ul>
              <li>Un set de 30 minutes en ouverture du festival</li>
              <li>De la visibilité</li>
              <li>Des photos professionnelles</li>
              <li>Des rencontres</li>
            </ul><br />
            <p>
              Envoie ta candidature à : <a itemProp="email" href={`mailto:booking@moonalps.ch`}>
                booking@moonalps.ch
              </a><br /><br />
              Délai pour postuler : 11 juin<br /><br />

              Alors n&apos;hésite pas et tente ta chance !
            </p>
          </div>
          {/* <div className="flex flex-wrap justify-center gap-1 mb-24">
              <a href="horaires_2022.pdf" target="blank" className="text-4xl p-8 hover:invert">
                Horaire
              </a>
              <Link href="/lineup/2022">
                <a className="text-4xl p-8 hover:invert ">Lineup 2022</a>
              </Link>
              <Link href="/tickets">
                <a className="text-4xl p-8 hover:invert">Billetterie</a>
              </Link>
            </div>
          <div className="mb-16">
            <p className="font-bold text-6xl mb-8 break-all ">Sponsors</p>
            {sponsors.filter((sponsor) => sponsor.principal).length > 0 &&
              <div className="flex justify-stretch gap-8 flex-wrap w-full">
                {sponsors
                  .filter((sponsor) => sponsor.principal)
                  .map((sponsor, i) => (
                    <a key={i} href={sponsor.url} rel="noreferrer" target="_blank" className="flex justify-center items-center grayscale hover:grayscale-0 bg-white p-2">
                      <img src={sponsor.logo} alt={sponsor.name} />
                    </a>
                  ))}
              </div>
            }
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
              {sponsors
                .filter((sponsor) => !sponsor.principal)
                .map((sponsor, i) => (
                  <a key={i} href={sponsor.url} rel="noreferrer" target="_blank" className="flex justify-center items-center grayscale hover:grayscale-0 bg-white p-2">
                    <img src={`${sponsor.logo}`} alt={sponsor.name} />
                  </a>
                ))}
            </div>
          </div>

          <div className="mb-16">
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
          </div>

          <div className="mb-16 relative">
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



          <div className="mb-16 relative">
            <p className="md:text-5xl text-4xl font-bold mb-8 break-all text-center">Merci aux donnateur·rice·s</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
              {donators.map((donator, i) => (
                <div key={i} className="flex flex-col mb-8 break-all">
                  <p className="font-bold">{donator.name}</p>
                  <p>{donator.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </Layout >
  );
};

export default Home;
