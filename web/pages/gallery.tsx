import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IGeneral, IGallery, IImage } from '../types';
import Layout from '../components/Layout';
import 'moment/locale/fr';
import Masonry from 'react-masonry-css';

const URL = process.env.STRAPI_URL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/galleries?populate=*`);
  const { data: galleries } = await res.json();

  const res3 = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res3.json();

  return {
    props: { galleries, general }
  }
}

type IProps = {
  galleries: IGallery[],
  general: IGeneral,
}

const Gallery: NextPage<IProps> = ({ galleries, general }: IProps) => {
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
                    gallery.attributes.pictures.data.map((picture: IImage, j: Number) => (
                      <div className="col-span-2" key={j.toString()}>
                        <Image src={`${URL}${picture.attributes.url}`} alt="Photo" width="400rem" height="400rem" />
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


export default Gallery;
