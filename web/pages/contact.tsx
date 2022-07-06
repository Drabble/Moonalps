import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IGeneral } from '../types';
import Layout from '../components/Layout';
import 'moment/locale/fr';
import Tree from '../assets/Tree.svg';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res.json();

  return {
    props: { general },
  };
}

type IProps = {
  general: IGeneral,
}

const Contact: NextPage<IProps> = ({ general }: IProps) => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout general={general} onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta
            name="description"
            content={general?.attributes.metaDescription}
          />
        </Head>

        <main className="bg-dark-100 text-dark-900 pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <Tree
              className="w-full stroke-dark-200 fill-transparent"
              style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }}
            />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28">CONTACT</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-dark-100 p-8 border-8 border-dark-200 rounded-lg mb-8">
              <div className="sm:col-span-2">
                <h1>Écris-nous !</h1>
                <div className="mb-4">
                  <label>
                    <p className="mb-2">
                      Nom
                      <span>(obligatoire)</span>
                    </p>
                    <input type="text" required aria-required="true" className="w-full h-10 p-2 border border-dark-900" />
                  </label>
                </div>
                <div className="mb-4">
                  <label>
                    <p className="mb-2">
                      Email
                      <span>(obligatoire)</span>
                    </p>
                    <input type="email" required aria-required="true" className="w-full h-10 p-2 border border-dark-900" />
                  </label>
                </div>
                <div className="mb-4">
                  <label>
                    <p className="mb-2">Site web</p>
                    <input type="url" required className="w-full h-10 p-2 border border-dark-900" />
                  </label>
                </div>
                <div className="mb-4">
                  <label>
                    <p className="mb-2">
                      Message
                      <span>(obligatoire)</span>
                    </p>
                    <textarea rows={20} required aria-required="true" className="w-full p-2 border border-dark-900" />
                  </label>
                </div>
                <button className="p-4 bg-black text-white rounded-md float-right">Envoyer</button>
              </div>
              <div className="text-lg flex flex-col gap-2 p-4 border-dark-800">
                <h1>Contact</h1>
                <p>
                  <span className="font-bold">Email</span>
                  <br />
                  <a className="text-tertiary" itemProp="email" href={`mailto:${general?.attributes.contactEmail}`}>
                    {general?.attributes.contactEmail}
                  </a>
                  {' '}
                  <br />
                </p>
                <p>
                  <span className="font-bold">Téléphone</span>
                  <br />
                  <a className="text-tertiary" href={`tel:${general?.attributes.contactPhone}`}>{general?.attributes.contactPhone}</a>
                </p>

                <a className="text-tertiary" itemProp="email" href={`mailto:${general?.attributes.postulationEmail}`}>
                  {general?.attributes.postulationEmail}
                </a>
                <p>
                  <span className="font-bold">Président</span>
                  <br />
                  {general?.attributes.president}

                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
