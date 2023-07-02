import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const About: NextPage = () => {
  const [scroll, setScroll] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  return (
    <Layout onScroll={(value) => setScroll(value)}>
      <div>
        <Head>
          <title>À propos du Moonalps</title>
          <meta name="description" content="À propos du Moonalps" />
        </Head>

        <main className="pt-20 p-2 text-justify relative">
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 font-migra-bold break-all">LE FESTIVAL</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-2 gap-8 lg:gap-24">
              <div className=" order-last lg:order-first">
                <img src="/photos/amis2.jpeg" className="w-full cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setIndex(0);
                  }} />
                <Lightbox open={open} index={index} close={() => setOpen(false)} slides={[{ src: "/photos/amis2.jpeg" }]} />
              </div>
              <div style={{ maxWidth: "40rem" }}>
                <p className="text-2xl font-migra-bold">Le MoonAlps, c’est quoi ?</p>
                <p className="text-sm mb-2">
                  La pandémie de COVID-19 ayant mis un frein à la musique live en 2020, un groupe d’amis a souhaité voir redémarrer la scène musicale locale et surtout celle touchant au rock. L’idée a rapidement mûri et un événement musical dans le village de Bursins, sur la Côte vaudoise, s’est concrétisé. C’est ainsi qu’en l’espace de quelques semaines, une première édition du MoonAlps Festival a vu le jour en septembre 2020.
                </p>
                <p className="text-sm mb-2">
                  Étant donné l’engouement du public, des artistes et du staff, nous avions décidé de réitérer l’aventure d’une manière plus structurée en fondant l’association à but non lucratif "Les Amis du MoonAlps" le 7 mars 2021. L’association a ensuite lancé un concours nommé "Take The Moonstage" afin de permettre à des jeunes groupes (moins de 22 ans) d’ouvrir le festival et qui a permis d’accueillir Stockholm Syndrome et Warnöx, deux groupes suisses prometteurs qui ont su créer la petite étincelle nécessaire pour marquer le public lors des éditions 2021 et 2022.
                </p>
                <p className="text-sm mb-4">
                  Après 3 éditions réussies, nous partons sur une année 2023 très spéciale. La MoonAlps vibe t’attend au bord du Léman à La Terrasse des Tilleuls pour un événement unique qui aura lieu le 12 août 2023 à Rolle. De plus, cette année ce ne sera pas la lune qui sera présente mais les Pléiades, une pluie d’étoiles filantes… ;)
                </p>
                <p className="text-2xl font-migra-bold mt-2">Faire une donation</p>
                <p className="text-sm">Si tu veux soutenir l&apos;association, le festival et le projet MoonAlps dans sa totalité.</p>
                <p className="text-sm">
                  Destinataire: Association LES AMI.E.S DU MOONALPS 1183, Bursins
                </p>
                <p className="text-sm">
                  Compte bancaire: IBAN: CH73 0076 7000 K551 9075 2
                </p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
