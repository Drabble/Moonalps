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
          <title>Info Moonalps</title>
          <meta name="description" content="Toutes les informations utiles sur le Moonalps" />
        </Head>

        <main className="pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 break-words">INFOS PRATIQUES</p>
            <div className="grid md:grid-cols-2 gap-4 p-8 h-full">
              <div className="mb-4">
                <p className="text-3xl mb-2">Accès</p>
                <h3>
                  <strong>Transports publics</strong>
                </h3>
                <p>&nbsp;</p>
                <h4>Depuis Lausanne :</h4>
                <ul>
                  <li>
                    Régio Express jusqu&apos;à Rolle, puis bus <em>835</em> direction Gland gare sud.
                  </li>
                  <li>
                    Derniers trains depuis Rolle à <strong>00:15, 00:45, 01:45, 02:45</strong>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <h4>Depuis Genève :</h4>
                <ul>
                  <li>
                    Régio Express jusqu&apos;à Gland, puis bus <em>835</em> direction Rolle gare nord.
                  </li>
                  <li>
                    Derniers trains depuis Gland à <strong>00:20, 01:21 , 02:04, 03:19</strong>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <h3>
                  <strong>Comment rentrer ? ABC Taxis Cochet SA !</strong>
                </h3>
                <p>&nbsp;</p>
                <p>
                  Tu préfères rentrer chez toi après le festival plutôt que de camper? Pas de souci! Notre partenaire transports{' '}
                  <strong>ABC Taxis Cochet SA</strong> est là pour toi!
                </p>
                <p>&nbsp;</p>
                <ul>
                  <li>
                    Deux navettes régulières et avantageuses te ramèneront depuis le festival jusqu’en gare de Rolle ou de Gland. Dernières courses à{' '}
                    <strong>2h30</strong> le vendredi et <strong>3h00</strong> le samedi. Prix par personne pour le trajet MoonAlps Festival - gare de Rolle ou
                    de Gland: <strong>5.- CHF</strong>
                  </li>
                  <li>
                    Un taxi ABC sera également stationné sur place pour les personnes désirant se rendre à d’autres endroits avec des courses individuelles
                    (tarif normal selon la course). Numéro de téléphone ABC : <strong>+41 22 361 45 45</strong>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <h3>
                  <strong>En voiture</strong>
                </h3>
                <p>&nbsp;</p>
                <p>Sortir de l&apos;autoroute à Rolle ou à Gland puis prendre la route en direction de Bursins. Une fois à Bursins, suivre les indications.</p>
                <p>&nbsp;</p>
                <p>Des places de parc sont à disposition le long du terrain de foot. (Privilégie le covoiturage!)</p>
              </div>
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10995.779475979833!2d6.2944797!3d46.4497894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf9a8081e32006c7!2sMoonAlps%20Festival!5e0!3m2!1sen!2sch!4v1658858359793!5m2!1sen!2sch"
                  className="h-96 w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mb-4">
                <p className="text-3xl mb-2">Dormir</p>
                <p>Tout comme l&apos;année dernière, un camping gratuit sera à disposition des festivalier·e·s !</p>
                <ul>
                  <li>Le camping ouvre vendredi dès 16h</li>
                  <li>Il y aura des douches et toilettes à disposition</li>
                  <li>La fermeture du camping se fera dimanche autour de midi</li>
                </ul>
                <p>&nbsp;</p>
                <p>Nous t&apos;invitons à rester et visiter Bursins, un des plus beaux villages de Suisse (pour de vrai), entre le vendredi et le samedi.</p>
              </div>
              <div className="mb-4">
                <p className="text-3xl mb-2">Manger/Boire</p>
                <p>
                  Le festival accueille cette année Man&apos;Ouchy qui viendra enflammer tes papilles avec des saveurs du Liban ainsi que le food truck Lo
                  Montagnon qui te proposera des burgers du terroir neuchâtelois. Tout comme l&apos;année dernière, la merveilleuse brasserie FMR te rafraîchira
                  avec sa sélection de bières artisanales et locales! L&apos;originale production Winatypic composée d&apos;un alliage de chasselas vaudois
                  ainsi que de jus de pommes et de raisins de La Côte, sera également en vente lors du festival.
                </p>
                <p>&nbsp;</p>
                <p>
                  Petit rappel - paiement par <strong>cash</strong> ou <strong>TWINT</strong> uniquement !
                </p>
              </div>
              <div className="mb-4">
                <p className="text-3xl mb-2">Billetterie</p>
                <p>La billetterie est ouverte et disponible au lien si dessous:</p>
                <p>
                  <strong>
                    <a href="https://moonalps.vercel.app/tickets">BILLETTERIE</a>
                  </strong>
                </p>
                <p>Petit rappel :</p>
                <ul>
                  <li>Prix par soir : 25.-</li>
                  <li>Pass deux soirs : 40 .-</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-3xl mb-2">Accessibilité</p>
                <p>Toute la surface stands et restauration est accessible. Néanmoins, le terrain principal, se situant devant la scène, l&apos;est moins.</p>
              </div>
              <div className="mb-4">
                <p className="text-3xl mb-2">Santé &amp; Sécurité</p>
                <p>Les travailleuse·eur·s sociales·aux Hors-murs seront présent·e·s pour faire de la prévention.</p>
                <p>Un défibrilateur ainsi que deux secouristes certifié·e·s seront présents lors du festival en cas de besoin.</p>
              </div>
              <div className="mb-4">
                <p className="text-3xl mb-2">Stands</p>
                <h3>
                  <strong>Stone With love:</strong>
                </h3>
                <p>Bijoux en micro macramé et en bois faits avec amours :) &nbsp;</p>
                <h3>
                  <strong>Mr. Kloudy:</strong>
                </h3>
                <p>Tatoueur autodidacte :herb:finesse, légèreté et designs uniques parsemés de folie. &nbsp;</p>
                <h3>
                  <strong>Lovely vikings:</strong>
                </h3>
                <p>
                  Une boutique en ligne représentant des artisans et des créateurs scandinaves avec une belle étique. Nous sommes Amanda et Mathias, une sœur et
                  un frère unis par nos cœurs suédois nés en Suisse. Ceci est un appel au viking qui sommeille en toi.
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
