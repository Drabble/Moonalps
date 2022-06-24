import type { NextPage } from 'next'
import Head from 'next/head'
import { IGeneral } from '../types';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res.json();

  return {
    props: { general }
  }
}

type IProps = {
  general: IGeneral,
}

const About: NextPage<IProps> = ({ general }: IProps) => {
  const [scroll, setScroll] = useState(0);
  return (
    <Layout general={general} onScroll={(value) => setScroll(value)}>
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
          <div className="container m-auto mb-16">
              
            <p className="text-center text-8xl mt-28 mb-28">LE FESTIVAL</p>
          <div className="bg-zinc-900 p-8 border-8 border-black rounded-lg mb-8">
            <ReactMarkdown >{general?.attributes.about}</ReactMarkdown>
            </div>
          </div>
        </main>
      </div >
    </Layout >
  )
}

export default About;
