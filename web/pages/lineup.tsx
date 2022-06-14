import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { IGeneral, IBand } from '../types';
import Layout from '../components/Layout';

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
  return (
    <Layout general={general}>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta
            name="description"
            content={general?.attributes.metaDescription}
          />
        </Head>

        <main className="bg-indigo-800 text-white pt-20">
          <div className="container m-auto">
            <p className="text-center text-8xl mt-28 mb-28">LINE-UP</p>
            <div className="flex flex-col gap-2 mt-4">
              {bands.map((band, i) =>
                <div key={i} className="p-4">
                  <div className="grid grid-cols-3 gap-4 mb-16">
                    <div className="hidden sm:block col-span-3 sm:col-span-1">
                      <img src={`${band.attributes.image?.data.attributes.url}`}
                        alt="Logo"
                        className="w-full" />
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <p className="text-3xl font-bold mb-2 text-center">{band.attributes.name}</p>
                      <div className="sm:hidden mb-4">
                        <img src={`${band.attributes.image?.data.attributes.url}`}
                          alt="Logo"
                          className="w-full" />
                      </div>
                      <p>{band.attributes.description}</p>
                      <div className="mt-4 text-center ">
                        <a href={band.attributes.url} >{band.attributes.url}</a>
                      </div>
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
