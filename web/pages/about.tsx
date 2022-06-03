import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IAbout, IHome, IPost } from '../types';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';

type IProps = {
  about: IAbout,
  home: IHome,
}
const Home: NextPage<IProps> = ({ about, home }: IProps) => {
  return (
    <Layout home={home}>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival à Bursins, Suisse" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full flex min-h-screen flex-col p-4">
          <div>
            <ReactMarkdown escapeHtml={false}>{about?.attributes.content}</ReactMarkdown>
          </div>
        </main>
      </div >
    </Layout >
  )
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:1337/api/about?populate=*");
  const { data: about } = await res.json();

  const res2 = await fetch("http://127.0.0.1:1337/api/home?populate=*");
  const { data: home } = await res2.json();

  return {
    props: { about, home }
  }
}

export default Home
