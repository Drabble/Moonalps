import type { NextPage } from 'next'
import Head from 'next/head'
import { IGeneral } from '../types';
import Layout from '../components/Layout';

const URL = process.env.STRAPIBASEURL;

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

const Tickets: NextPage<IProps> = ({ general }: IProps) => {
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

        <main className="w-full flex min-h-screen flex-col p-4">
          <p className="text-6xl">Comming soon!</p>
        </main>
      </div >
    </Layout >
  )
}

export default Tickets;
