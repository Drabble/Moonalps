import type { NextPage } from 'next'
import Head from 'next/head'
import { IHome, IBand } from '../types';
import Layout from '../components/Layout';
import Moment from 'react-moment';
import 'moment/locale/fr';

type IProps = {
  bands: IBand[],
  home: IHome,
}
const Home: NextPage<IProps> = ({ bands, home }: IProps) => {
  return (
    <Layout home={home}>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival à Bursins, Suisse" />
          <link rel="icon" href="/favicon.ico" />
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
                    <img src={`http://127.0.0.1:1337${band.attributes.image?.data.attributes.url}`} className="w-full" />
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

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:1337/api/bands?populate=*");
  const { data: bands } = await res.json();

  const res3 = await fetch("http://127.0.0.1:1337/api/home?populate=*");
  const { data: home } = await res3.json();

  return {
    props: { bands, home }
  }
}

export default Home
