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
                  Si tu aimes le rock et la musique live, tu ne voudras pas manquer le MoonAlps Festival, le rendez-vous incontournable des amateurs de son et de convivialité. Ce festival est né de la passion d’un groupe d’amis qui ont voulu relancer la scène musicale locale après la crise du COVID-19. Depuis 2020, ils ont organisé trois éditions réussies dans le charmant village de Bursins, sur la Côte vaudoise, en mettant en avant des jeunes talents suisses.
                </p>
                <p className="text-sm mb-4">
                  Cette année, le MoonAlps Festival change de décor et t’invite à venir vibrer au bord du Léman, à La Terrasse des Tilleuls, à Rolle. Le 12 août 2023, tu pourras profiter d’une journée exceptionnelle et d'une soirée sous les étoiles, avec un spectacle céleste en prime : les Pléiades, une pluie d’étoiles filantes. Ne rate pas cette occasion unique de vivre une expérience musicale et cosmique inoubliable !
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
