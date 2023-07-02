import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IGallery } from '../../types';
import Layout from '../../components/Layout';
import 'moment/locale/fr';
import { useRouter } from 'next/router';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Masonry from 'react-masonry-css';

export async function getStaticProps({ params }: any) {
  if (params.year === '2020') {
    return {
      props: {
        gallery: {
          credits: 'Crédits',
          video: 'https://www.youtube.com/embed/gkQ1Lf4csXQ',
          videos: ['https://youtube.com'],
          pictures: [
            '/galleries/2020/8_D6_A1305_4de941aade.jpg',
            '/galleries/2020/8_D6_A1316_8385d78f68.jpg',
            '/galleries/2020/8_D6_A1325_e077c5a076.jpg',
            '/galleries/2020/8_D6_A1328_d9c44ae3b5.jpg',
            '/galleries/2020/8_D6_A1369_eac4c7dc00.jpg',
            '/galleries/2020/8_D6_A1406_7d1f369dc1.jpg',
            '/galleries/2020/8_D6_A1544_5c1c863e95.jpg',
            '/galleries/2020/8_D6_A1552_a9b7a543a5.jpg',
            '/galleries/2020/8_D6_A1732_1a54f666e8.jpg',
            '/galleries/2020/8_D6_A1772_e934f08b90.jpg',
            '/galleries/2020/8_D6_A1887_8188f71c95.jpg',
            '/galleries/2020/8_D6_A1938_2bc398402f.jpg',
            '/galleries/2020/8_D6_A1965_444f652570.jpg',
            '/galleries/2020/8_D6_A2037_5f9282cc7c.jpg',
            '/galleries/2020/8_D6_A2076_ee09ab4f3b.jpg',
            '/galleries/2020/8_D6_A2112_ac34c8c591.jpg',
            '/galleries/2020/e5ebbf_aad1430681654acb90019da22ff88716_mv2_b020bebb8c.webp',
            '/galleries/2020/e5ebbf_e9c956f7fb36434ba9dd240e88a00326_mv2_ed822cdb45.webp',
            '/galleries/2020/e5ebbf_fdc6f57268e24eaebb594a672a5c6864_mv2_187dcf872a.webp',
          ],
          year: 2020,
        },
      },
    };
  }
  if (params.year === '2021') {
    return {
      props: {
        gallery: {
          credits: '',
          video: 'https://www.youtube.com/embed/emBjFtxBWq8',
          videos: [],
          pictures: [
            '/galleries/2021/Moon_Laps_Festival_003_da52ce4214.jpg',
            '/galleries/2021/Moon_Laps_Festival_005_59959c8803.jpg',
            '/galleries/2021/Moon_Laps_Festival_007_7774f57af0.jpg',
            '/galleries/2021/Moon_Laps_Festival_017_598891acd3.jpg',
            '/galleries/2021/Moon_Laps_Festival_020_6cc38be932.jpg',
            '/galleries/2021/Moon_Laps_Festival_022_c50383ce48.jpg',
            '/galleries/2021/Moon_Laps_Festival_023_1_9f04efb1dd.jpg',
            '/galleries/2021/Moon_Laps_Festival_026_1_b2ac3d1975.jpg',
            '/galleries/2021/Moon_Laps_Festival_027_528d221d15.jpg',
            '/galleries/2021/Moon_Laps_Festival_029_9d521cf290.jpg',
            '/galleries/2021/Moon_Laps_Festival_035_1_9f79815da1.jpg',
            '/galleries/2021/Moon_Laps_Festival_036_e5160befb8.jpg',
            '/galleries/2021/Moon_Laps_Festival_037_1_44da92b326.jpg',
            '/galleries/2021/Moon_Laps_Festival_038_0f416e6d5e.jpg',
            '/galleries/2021/Moon_Laps_Festival_040_50e75c3802.jpg',
            '/galleries/2021/Moon_Laps_Festival_043_33ebf804ba.jpg',
            '/galleries/2021/Moon_Laps_Festival_054_121a45f00b.jpg',
            '/galleries/2021/Moon_Laps_Festival_071_538708b489.jpg',
            '/galleries/2021/Moon_Laps_Festival_088_d47cb5304a.jpg',
            '/galleries/2021/Moon_Laps_Festival_090_5f30fc56ec.jpg',
            '/galleries/2021/Moon_Laps_Festival_131_33ebe5837d.jpg',
            '/galleries/2021/Moon_Laps_Festival_148_69c875afb7.jpg',
            '/galleries/2021/Moon_Laps_Festival_155_794b6a9e9f.jpg',
            '/galleries/2021/dsc_0536_1532561da7.webp',
            '/galleries/2021/dsc_0553_404f630ce3.webp',
            '/galleries/2021/dsc_0573_c184ceea42.webp',
            '/galleries/2021/dsc_0599_600d0496d9.webp',
            '/galleries/2021/dsc_0614_9d19268203.webp',
          ],
          year: 2021,
        },
      },
    };
  }
  if (params.year === '2022') {
    return {
      props: {
        gallery: {
          credits: '',
          video: 'https://www.youtube.com/embed/HF1DI37YaHM',
          videos: [],
          pictures: [
            '/galleries/2022/20220909-moonalps-200.jpg',
            '/galleries/2022/20220909-moonalps-264.jpg',
            '/galleries/2022/20220909-moonalps-42.jpg',
            '/galleries/2022/20220909-moonalps-81.jpg',
            '/galleries/2022/20220910-moonalps-1087.jpg',
            '/galleries/2022/20220910-moonalps-507.jpg',
            '/galleries/2022/20220910-moonalps-614.jpg',
            '/galleries/2022/20220910-moonalps-868.jpg',
            '/galleries/2022/20220910-moonalps-991.jpg',
            '/galleries/2022/20220911-moonalps-1180.jpg',
            '/galleries/2022/20220911-moonalps-1265.jpg',
            '/galleries/2022/IMG_6356.JPG',
            '/galleries/2022/IMG_6375.JPG',
            '/galleries/2022/IMG_6454.JPG',
            '/galleries/2022/IMG_6473.JPG',
            '/galleries/2022/IMG_6476.JPG',
            '/galleries/2022/IMG_6484.JPG',
            '/galleries/2022/IMG_6557.JPG',
            '/galleries/2022/IMG_6564.JPG',
            '/galleries/2022/IMG_6574.JPG',
            '/galleries/2022/IMG_6600.JPG',
            '/galleries/2022/IMG_6601.JPG',
            '/galleries/2022/IMG_6762.JPG',
            '/galleries/2022/IMG_6781.JPG',
            '/galleries/2022/IMG_6834.JPG',
            '/galleries/2022/IMG_6902.JPG',
          ],
          year: 2022,
        },
      },
    };
  }
  return {
    props: { gallery: null },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { year: '2020' } }, { params: { year: '2021' } }, { params: { year: '2022' } }],
    fallback: false, // false or 'blocking'
  };
}

type IProps = {
  gallery: IGallery;
};

const Galleries: NextPage<IProps> = ({ gallery }: IProps) => {
  const router = useRouter();
  const { year } = router.query;
  const [scroll, setScroll] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  return (
    <Layout onScroll={(value) => setScroll(value)}>
      <div>
        <Head>
          <title>Gallerie {year}</title>
          <meta name="description" content="Gallerie" />
        </Head>

        <main className="pt-20 p-2 text-justify relative">
          <div className="container m-auto relative mb-16">
            <p className="text-center text-8xl mt-28 mb-28 font-migra-bold break-all">GALERIE {year}</p>
            {gallery && (
              <div>
                <div className="flex flex-col gap-2 justify-center">
                  <div className="p-8 mb-8">
                    {gallery.video && (
                      <div className="mb-8">
                        <div className="relative w-full" style={{ height: '60vh' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={gallery.video}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}

                    <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                      {gallery.pictures.map((e, i) => (
                        <img
                          className="cursor-pointer p-1"
                          src={e}
                          alt={e}
                          key={i}
                          onClick={() => {
                            setOpen(true);
                            setIndex(i);
                          }}
                        />
                      ))}
                    </Masonry>

                    <Lightbox open={open} index={index} close={() => setOpen(false)} slides={gallery.pictures.map((e) => ({ src: e }))} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Galleries;
