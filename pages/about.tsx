import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

const About: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>À propos du Moonalps</title>
          <meta name="description" content="À propos du Moonalps" />
        </Head>

        <main className="pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28">LE FESTIVAL</p>
            <div className="p-8 mb-8">
              <h1>Le MoonAlps, c’est quoi ?</h1>
              <p>
                La pandémie de COVID-19 ayant mis un frein à la musique live en 2020, un groupe d’ami·e·s a souhaité voir redémarrer la scène musicale locale et
                surtout celle touchant au rock. L’idée a rapidement mûri et un événement musical dans le village de Bursins, sur la Côte vaudoise, s’est
                concrétisé. C’est ainsi, qu’en l’espace de quelques semaines, une première édition du MoonAlps Festival a vu le jour en septembre 2020. Étant
                donné l’engouement du public, des artistes et du staff, nous avons décidé de réitérer l’aventure d&apos;une manière plus structurée en fondant
                l’association à but non lucratif « Les Ami·e·s du MoonAlps » le 7 mars 2021.
              </p>
              <p>
                Après des mois de travail, une 2ème édition du MoonAlps Festival, plus aboutie et plus grande, a eu lieu le samedi 11 septembre 2021 et a
                rencontré un immense succès. Pour cette édition, nous avons lancé notre concours Take the MoonStage, visant à offrir à un groupe très jeune,
                avec peu d&apos;expérience de scène, de se produire en ouverture de notre festival. Lors de cette seconde édition, nous avons pu compter sur des
                artistes qui aujourd&apos;hui, sont en pleine montée et que l&apos;on retrouve sur des scènes de plus en plus grandes. Stockholm Syndrome, les
                vainqueurs de notre concours en 2021 se sont produits à Festi&apos;neuch en 2022, Crux Sledge, est devenu un groupe bientôt incontournable sur
                la Côte comme dans la région lausannoise. Ramin&amp;Reda, nos DJs en 2021, ont quand à eux terminé leur collaboration en beauté lors du Paléo
                2022 !
              </p>
              <p>
                Bref, suite à l&apos;édition 2021, la bonne humeur générale, la joie du public, de nos partenaires et des artistes ont été une immense gratitude
                à nos yeux. Nous avions réussi notre pari et le MoonAlps ne s’arrêtera pas ici ! C&apos;est pourquoi notre festival revient pour une nouvelle
                édition, cette fois sur deux jours, les 9 &amp; 10 septembre 2022 !
              </p>
              <h2>Comment nous contacter ?</h2>
              <p>
                Pour toute les demandes/questions :
                <a className="text-tertiary ml-1" itemProp="email" href={`mailto:info@moonalps.ch`}>
                  info@moonalps.ch
                </a>
              </p>
              <p>
                Pour les postulations :
                <a className="text-tertiary ml-1" itemProp="email" href={`mailto:booking@moonalps.ch`}>
                  booking@moonalps.ch
                </a>
              </p>
              <h2>Faire une donation</h2>
              <p>Si tu veux soutenir l&apos;association, le festival et le projet MoonAlps dans sa totalité.</p>
              <p>
                <strong>Destinataire :</strong>
                Association LES AMI.E.S DU MOONALPS 1183, Bursins
              </p>
              <p>
                <strong>Compte bancaire :</strong>
                IBAN: CH73 0076 7000 K551 9075 2
              </p>
              <h2>Les Ami·e·s du MoonAlps</h2>
              <p>
                <img src="https://res.cloudinary.com/drabble/image/upload/v1654463278/Amis_du_Moonalps_466320842f.webp" alt="Amis du Moonalps" />
              </p>
              <p>
                <strong>Premier plan (de gauche à droite)</strong>
              </p>
              <p>Alexandre Cionca, Melissa Maggini, Melisa Oriol, Loïc Cattin &amp; Alexandre Dumuid</p>
              <p>
                <strong>Deuxième plan (de gauche à droite)</strong>
              </p>
              <p>Alexandre Kawecki, Jan Waligorski, Steven Cattin, Jorge Da Luz, David Oriol, Allan Haldi, Timothée Spörli &amp; Alexandre de Heller</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
