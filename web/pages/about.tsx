import type { NextPage } from 'next'
import Head from 'next/head'
import { IGeneral } from '../types';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';

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

        <main className="p-4 pt-20 bg-indigo-800">
          <div className="container m-auto mb-16">
            <p className="text-center text-8xl mt-28 mb-28">LE FESTIVAL</p>
            <ReactMarkdown >{general?.attributes.about}</ReactMarkdown>
          </div>
        </main>
      </div >
    </Layout >
  )
}

export default About;
