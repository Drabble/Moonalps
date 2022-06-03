import type { NextPage } from 'next'
import Head from 'next/head'
import { IHome, IPost } from '../types';
import Layout from '../components/Layout';
import 'moment/locale/fr';

type IProps = {
  home: IHome,
}
const Home: NextPage<IProps> = ({ home }: IProps) => {
  return (
    <Layout home={home}>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival à Bursins, Suisse" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="sm:col-span-2">
              <h1>Écris-nous !</h1>
              <div className="mb-4">
                <label>
                  <p className="mb-2">Nom<span>(obligatoire)</span></p>
                  <input type="text" required aria-required="true" className="w-full h-10 p-2" />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="mb-2">Email<span>(obligatoire)</span></p>
                  <input type="email" required aria-required="true" className="w-full h-10 p-2" />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="mb-2">Site web</p>
                  <input type="url" required className="w-full h-10 p-2" />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  <p className="mb-2">Message<span>(obligatoire)</span></p>
                  <textarea rows={20} required aria-required="true" className="w-full p-2" />
                </label>
              </div>
              <button className="p-4 bg-black text-white rounded-md float-right">Envoyer</button>
            </div>
            <div className="text-lg flex flex-col gap-2 p-4 border-black">
              <h1>Contact</h1>
              <p>
                <span className="font-bold">Email</span><br /><a itemProp="email" href="mailto:info@moonalps.ch">info@moonalps.ch</a> <br />
              </p>
              <p><span className="font-bold">Téléphone</span><br /><a href="tel:+41 79 265 18 27">+41 79 265 18 27</a></p>


              <p><span className="font-bold">Postulation</span><br /><a itemProp="email" href="mailto:booking@moonalps.ch">booking@moonalps.ch</a></p>
              <p><span className="font-bold">Président</span><br />
                Loïc Cattin</p>
            </div>
          </div>
        </main>
      </div>
    </Layout >
  )
}

export async function getStaticProps() {
  const res3 = await fetch("http://127.0.0.1:1337/api/home?populate=*");
  const { data: home } = await res3.json();

  return {
    props: { home }
  }
}

export default Home
