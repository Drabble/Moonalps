import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { IGeneral, IBand } from '../types';
import Layout from '../components/Layout';
import { useState } from 'react';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/bands?populate=*`);
  const { data: bands } = await res.json();

  const res3 = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res3.json();

  return {
    props: { bands, general }
  }
}

type IProps = {
  bands: IBand[],
  general: IGeneral,
}

const Lineup: NextPage<IProps> = ({ bands, general }: IProps) => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout general={general}  onScroll={(value) => setScroll(value)}>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta
            name="description"
            content={general?.attributes.metaDescription}
          />
        </Head>

        <main className="bg-zinc-900 text-white pt-20 p-2 text-justify" style={{
            backgroundImage: `url('/trees4.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: `${scroll / 8}px ${scroll / 4}px`,
          }}>
          <div className="container m-auto">
            <p className="text-center text-8xl mt-28 mb-28">LINE-UP</p>
            <div className="flex flex-col gap-2 mt-4">
              {bands.map((band, i) =>
                <div key={i} className="bg-zinc-900 p-8 border-8 border-black rounded-lg mb-8">
                  <p className="text-6xl text-center mb-8 mt-8">{band.attributes.name}</p>
                  <div className="grid grid-cols-3 gap-4 mb-16">
                    <div className="hidden sm:block col-span-3 sm:col-span-1">
                      <img src={`${band.attributes.image?.data.attributes.url}`}
                        alt="Logo"
                        className="w-full" />
                      <div className="mt-4 text-center ">
                        <a href={band.attributes.url} >{band.attributes.url}</a>
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <div className="sm:hidden mb-4">
                        <img src={`${band.attributes.image?.data.attributes.url}`}
                          alt="Logo"
                          className="w-full" />
                          <div className="mt-4 text-center ">
                        <a href={band.attributes.url} >{band.attributes.url}</a>
                      </div>
                      </div>
                      <p className="text-xl font-light">{band.attributes.description}</p>
                      {band.attributes.video &&
                        <div className="mt-4">
                          <div className="relative w-full h-96">
                            <iframe className="absolute top-0 left-0 w-full h-full" src={band.attributes.video} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </main>
      </div >
    </Layout >
  )
}

export default Lineup
