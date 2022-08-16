import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IGeneral, IGallery, IImage, IBand } from '../../types';
import Layout from '../../components/Layout';
import 'moment/locale/fr';
import Tree from '../../assets/Tree.svg';
import { useRouter } from 'next/router';
import Gallery from '../../components/Gallery';

const URL = process.env.STRAPI_URL;

export async function getStaticProps({ params }: any) {
  const bandsResponse = await fetch(`${URL}/api/bands?populate=*`);
  const { data: bands } = await bandsResponse.json();

  const generalResponse = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await generalResponse.json();

  const galleriesResponse = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await galleriesResponse.json();

  const galleriesOfThisYearResponse = await fetch(`${URL}/api/galleries?populate=*&filters[year][$eq]=${params.year}`);
  const { data: galleriesOfThisYear } = await galleriesOfThisYearResponse.json();

  return {
    props: { general, bands, galleries, galleriesOfThisYear },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await res.json();
  const years = [...new Set(galleries.map((gallery: IGallery) => gallery.attributes.year))];
  return {
    paths: years.map((year: any) => ({ params: { year: year.toString() } })),
    fallback: false, // false or 'blocking'
  };
}

type IProps = {
  general: IGeneral;
  bands: IBand[];
  galleries: IGallery[];
  galleriesOfThisYear: IGallery[];
};

const Galleries: NextPage<IProps> = ({ galleries, general, bands, galleriesOfThisYear }: IProps) => {
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
          <div className="absolute top-0 bottom-0 left-0 right-0 flex overflow-hidden justify-center items-center">
            <Tree className="w-full stroke-dark-200 fill-transparent" style={{ transform: `translate(${scroll / 10}px, ${scroll / 10}px)` }} />
          </div>
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28">GALERIE {year}</p>
            <div className="flex flex-col gap-2 justify-center">
              <div className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg mb-8">
                <Gallery pictures={galleriesOfThisYear.flatMap((gallery) => gallery.attributes.pictures?.data || [])} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Galleries;
