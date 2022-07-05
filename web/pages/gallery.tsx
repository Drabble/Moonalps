import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IGeneral, IGallery, IImage } from '../types';
import Layout from '../components/Layout';
import 'moment/locale/fr';
import Masonry from 'react-masonry-css';
import Tree from '../assets/Tree.svg';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await res.json();

  const res3 = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res3.json();

  return {
    props: { galleries, general },
  };
}

type IProps = {
  galleries: IGallery[],
  general: IGeneral,
}

const Gallery: NextPage<IProps> = ({ galleries, general }: IProps) => {
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
            <p className="text-center text-8xl mt-28 mb-28">ANCIENNES EDITIONS</p>
            <div className="flex flex-col gap-2 justify-center">
              {galleries.map((gallery, i) => (
                <div key={i} className="bg-dark-100 p-8 border-8 border-dark-200 rounded-lg mb-8">
                  <div>
                    <h1
                      className="text-center"
                    >
                      GALERIE
                      {' '}
                      {gallery.attributes.year}
                    </h1>
                    <p className="text-center mb-2">{gallery.attributes.credits}</p>
                  </div>
                  <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {
                      gallery.attributes.pictures.data.map((picture: IImage, j: Number) => (
                        <div className="col-span-2" key={j.toString()}>
                          <img src={`${picture.attributes.url}`} alt="Photo" />
                        </div>
                      ))
                    }
                  </Masonry>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Gallery;
