import type { NextPage } from 'next'
import Head from 'next/head'
import { IHome, Igallery } from '../types';
import Layout from '../components/Layout';
import Moment from 'react-moment';
import 'moment/locale/fr';
import Masonry from 'react-masonry-css';

type IProps = {
  galleries: Igallery[],
  home: IHome,
}
const Home: NextPage<IProps> = ({ galleries, home }: IProps) => {
  return (
    <Layout home={home}>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival à Bursins, Suisse" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full flex flex-col p-4">


          <div className="flex flex-col gap-2 justify-center">
            {galleries.map((gallery, i) =>
              <div key={i} className="w-full p-4">
                <div>
                  <h1
                    className="text-center">Galerie {gallery.attributes.year}</h1>
                  <p className="text-center mb-2">{gallery.attributes.credits}</p>
                </div>
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {
                    gallery.attributes.pictures.data.map((picture, j) => (
                      <div className="col-span-2" key={j}>
                        <img src={`http://127.0.0.1:1337${picture.attributes.url}`} />
                      </div>
                    ))
                  }
                </Masonry>

              </div>
            )}

          </div>
        </main>
      </div>
    </Layout >
  )
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:1337/api/galleries?populate=*");
  const { data: galleries } = await res.json();

  const res3 = await fetch("http://127.0.0.1:1337/api/home?populate=*");
  const { data: home } = await res3.json();

  console.log(JSON.stringify(galleries));

  return {
    props: { galleries, home }
  }
}

export default Home
