import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IGeneral, IBand, IGallery } from '../../types';
import Layout from '../../components/Layout';
import Tree from '../../assets/Tree.svg';
import { useRouter } from 'next/router';

const URL = process.env.STRAPI_URL;

export async function getStaticProps({ params }: any) {
  const bandsResponse = await fetch(`${URL}/api/bands?populate=*`);
  const { data: bands } = await bandsResponse.json();

  const generalResponse = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await generalResponse.json();

  const galleriesResponse = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await galleriesResponse.json();

  const bandsOfThisYearResponse = await fetch(`${URL}/api/bands?populate=*&filters[year][$eq]=${params.year}`);
  const { data: bandsOfThisYear } = await bandsOfThisYearResponse.json();

  return {
    props: { general, bands, galleries, bandsOfThisYear },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${URL}/api/bands?populate=*`);
  const { data: bands } = await res.json();
  const years = [...new Set(bands.map((band: IBand) => band.attributes.year))];
  return {
    paths: years.map((year: any) => ({ params: { year: year.toString() } })),
    fallback: false, // false or 'blocking'
  };
}

type IProps = {
  bands: IBand[];
  galleries: IGallery[];
  general: IGeneral;
  bandsOfThisYear: IBand[];
};

const Lineup: NextPage<IProps> = ({ bands, general, galleries, bandsOfThisYear }: IProps) => {
  const router = useRouter();
  const { year } = router.query;
  const [scroll, setScroll] = useState(0);
  return (
    <Layout general={general} bands={bands} galleries={galleries} onScroll={(value) => setScroll(value)} inverse>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta name="description" content={general?.attributes.metaDescription} />
        </Head>

        <main className="bg-dark-100 text-dark-900 pt-20 p-2 text-justify relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28">LINE-UP {year}</p>
            <div className="flex flex-col gap-2 mt-4">
              {bandsOfThisYear.map((band, i) => (
                <div key={i} className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg mb-8">
                  <p className="text-6xl text-center mb-8 mt-8">{band.attributes.name}</p>
                  <div className="grid grid-cols-3 gap-4 mb-16">
                    <div className="hidden sm:block col-span-3 sm:col-span-1">
                      <img src={`${band.attributes.image.data?.attributes.url}`} alt="Logo" className="w-full" />
                      <div className="mt-4 text-center ">
                        <a href={band.attributes.url}>{band.attributes.url}</a>
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <div className="sm:hidden mb-4">
                        <img src={`${band.attributes.image.data?.attributes.url}`} alt="Logo" className="w-full" />
                        <div className="mt-4 text-center ">
                          <a href={band.attributes.url}>{band.attributes.url}</a>
                        </div>
                      </div>
                      <p className="text-xl font-light">{band.attributes.description}</p>
                      {band.attributes.video && (
                        <div className="mt-4">
                          <div className="relative w-full h-96">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={band.attributes.video}
                              title="Video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Lineup;
