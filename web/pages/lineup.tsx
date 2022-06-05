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

        <main className="w-full flex flex-col p-4">

          <h1>Line-up</h1>
          <div className="flex flex-col gap-2 mt-4">
            {bands.map((band, i) =>
              <div key={i} className={"md:w-11/12 bg-black text-white p-4" + (i % 2 === 1 ? " self-end" : "")}>
                <div>
                  <p className="text-3xl font-bold mb-2 text-center">{band.attributes.name}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Image src={`${URL}${band.attributes.image?.data.attributes.url}`} alt="Logo" width="100%" height="500rem" />
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <p>{band.attributes.description}</p>
                    <a href={band.attributes.url} className="text-red-500 hover:text-red-800">{band.attributes.url}</a>
                    <div className="w-full">
                      <div className="relative w-full h-96">
                        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/emBjFtxBWq8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </Layout >
  )
}

export default Lineup
