import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Moment from 'react-moment';
import { IBand, IGallery, IGeneral, IPost } from '../types';
import 'moment/locale/fr';
import Layout from '../components/Layout';
import Tree from '../assets/Tree.svg';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const bandsResponse = await fetch(`${URL}/api/bands?populate=*`);
  const { data: bands } = await bandsResponse.json();

  const generalResponse = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await generalResponse.json();

  const galleriesResponse = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await galleriesResponse.json();

  const res = await fetch(`${URL}/api/posts?populate=*`);
  const { data: posts } = await res.json();

  return {
    props: { general, bands, galleries, posts },
  };
}

type IProps = {
  posts: IPost[];
  general: IGeneral;
  bands: IBand[];
  galleries: IGallery[];
};

const News: NextPage<IProps> = ({ posts, general, bands, galleries }: IProps) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout general={general} bands={bands} galleries={galleries} inverse>
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
            <h1>News</h1>
            <div className="flex flex-col gap-2 justify-center mt-4">
              {posts.map((post, i) => (
                <div key={i} className="w-full border border-gray-500 p-4">
                  <div>
                    <p className="text-xl font-bold mb-2">{post.attributes.title}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <Image src={`${URL}${post.attributes.image?.data.attributes.url}`} alt="Vignette" height="500rem" width="100%" />
                    </div>
                    <div className="col-span-2">
                      <p>{post.attributes.content}</p>
                      <p className="italic text-xs mt-4">
                        <Moment format="LLLL">{post?.attributes.publishedAt}</Moment>
                      </p>
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

export default News;
