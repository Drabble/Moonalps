import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IGeneral, IPartner, ISponsor } from "../types";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const URL = process.env.STRAPI_URL;

type IProps = {
  sponsors: ISponsor[];
  partners: IPartner[];
  general: IGeneral;
};

export async function getStaticProps(context: any) {
  const res = await fetch(`${URL}/api/sponsors?populate=*`);
  const { data: sponsors } = await res.json();

  const res2 = await fetch(`${URL}/api/partners?populate=*`);
  const { data: partners } = await res2.json();

  const res3 = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res3.json();

  return {
    props: { sponsors, partners, general },
  };
};


const Home: NextPage<IProps> = ({ sponsors, partners, general }: IProps) => {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      console.log(window.innerHeight, window.innerWidth)
      setWidth(window.innerWidth);
    })
  }, [])

  return (
    <Layout general={general} onScroll={(value) => setScroll(value)}>
      <div className="bg-zinc-900">
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta
            name="description"
            content={general?.attributes.metaDescription}
          />
        </Head>

        <div className="min-h-screen w-full flex flex-col justify-center items-center pb-16 relative"

          style={{
            backgroundImage: `url('/trees4.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: `${scroll / 8}px ${scroll / 4}px`,
          }}>
          <Image
            src={`/cover_full.svg`}
            alt="Logo"
            width={1200}
            height={400}
          />
          {/*<div
            style={{
              position: 'absolute',
              bottom: '0',
              background: `url(${`/trees2.svg`}) `,
              backgroundPosition: "bottom",
              backgroundSize: `${width}px ${width / 4}px`,
              backgroundRepeat: "repeat",
              height: `100%`,
              width: '100%',
            }}
          ></div>*/}
        </div>

        <main
          className="bg-zinc-100 text-zinc-900  relative min-h-screen flex justify-center items-center p-2"
          style={{
            backgroundImage: `url('/trees5.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: `${scroll / 8}px ${scroll / 4}px`,
          }}
        >
          <div className="text-center -mt-2">
            <p className="text-9xl mb-16">
              Une 3<sup>ème</sup> édition sur 2 jours !
            </p>
          </div>
        </main>
        <main className="bg-zinc-900 text-primary w-full p-16"
          style={{
            backgroundImage: `url('/trees5.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: `${scroll / 8}px ${scroll / 4}px`,
          }}>
          <div className="bg-white text-zinc-900 rounded-md py-16 text-center">
            <p className="text-6xl mb-16">SPONSORS</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {sponsors.map((sponsor, i) => (
                  <a
                    key={i}
                    href={sponsor.attributes.url}
                    rel="noreferrer"
                    target="_blank"
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      src={`${sponsor.attributes.logo.data.attributes.url}`}
                      alt={sponsor.attributes.name}
                      className="w-60"
                    />
                    {/*<p className=" text-sm">
                      {sponsor.attributes.name}
                </p>*/}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>

        <main className="bg-zinc-100 text-primary w-full p-16"

          style={{
            backgroundImage: `url('/trees4.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: `${scroll / 8}px ${scroll / 4}px`,
          }}>


          <div className="bg-white text-zinc-900 rounded-md py-16 text-center">
            <p className="text-6xl mb-16">PARTENAIRES</p>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center p-4 gap-8 flex-wrap">
                {partners.map((partner, i) => (
                  <a
                    key={i}
                    href={partner.attributes.url}
                    rel="noreferrer"
                    target="_blank"
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      src={`${partner.attributes.logo.data.attributes.url}`}
                      alt={partner.attributes.name}
                      className="w-60"
                    />

                    {/*<p className=" text-sm">
                      {partner.attributes.name}
                </p>*/}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div >
    </Layout >
  );
};


export default Home;
