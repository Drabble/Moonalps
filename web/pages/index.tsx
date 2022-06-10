import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IGeneral, IPartner, ISponsor } from "../types";
import { useState } from "react";
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

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
              //backgroundImage: `linear-gradient(to bottom, rgba(5,5,5, 0.5), rgba(25,25,25  ,0.5) 80%, rgba(210,210,210, 1)), url('/moonalps.jpg')`,
              backgroundImage: `url('/moonalps.jpg')`,
              backgroundRepeat: "repeat-y",
              backgroundPosition: "center, center",
              backgroundSize: "cover",
              filter: `grayscale(${Math.max(0, 100 - scroll / 3)}%)`,
            }}
          ></div>
          <div className="min-h-screen w-full flex flex-col justify-center items-center pb-16">
            <Image
              src={`/cover.svg`}
              alt="Logo"
              width={800}
              height={200}
            />
            <p className="text-2xl sm:text-5xl md:text-5xl lg:text-6xl text-center text-secondary relative font-bold uppercase mt-2">
              {general?.attributes.date}
            </p>
          </div>
        </div>

        <div className="min-h-screen w-full bg-transparent"></div>

        <main
          className="w-full flex flex-col justify-stretch relative bg-tertiary"
          style={{ marginTop: "700px", paddingTop: "200px" }}
        >
          <div
            style={{
              background: `url(${`/trees.svg`}) `,
              backgroundPosition: "top",
              backgroundSize: "2000px 650px",
              backgroundRepeat: "repeat-x",
              height: "700px",
              position: "absolute",
              left: 0,
              right: 0,
              top: -400 + "px",
            }}
          ></div>
          <div className="relative mb-60 text-center">
            <p className="text-6xl text-primary mb-16">
              Une 3<sup>ème</sup> édition sur 2 jours !
            </p>
            <p className="text-4xl text-secondary mb-8">
              C&apos;est 2 fois plus de
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex flex-col justify-center text-primary">
                <Image
                  src={"/icons/artistes.svg"}
                  alt="Artistes"
                  width="100rem"
                  height="100rem"
                />
                Artistes
              </div>
              <div className="flex flex-col justify-center text-primary">
                <Image
                  src={"/icons/binch.svg"}
                  alt="Binchs"
                  width="100rem"
                  height="100rem"
                />
                Binchs
              </div>
              <div className="flex flex-col justify-center text-primary">
                <Image
                  src={"/icons/camping.svg"}
                  alt="Camping"
                  width="100rem"
                  height="100rem"
                />
                Camping
              </div>
              <div className="flex flex-col justify-center text-primary">
                <Image
                  src={"/icons/food.svg"}
                  alt="Nourriture"
                  width="100rem"
                  height="100rem"
                />
                Nourriture
              </div>
            </div>
          </div>
        </main>
        <div>

          <div className="w-full h-80" style={{
            backgroundImage: 'url("/directions.jpg")',
            backgroundAttachment: 'fixed',
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center, center",
            backgroundSize: "cover",
            filter: `grayscale(${Math.max(0, 100 - scroll / 3)}%)`,
          }}></div>
        </div>
        <main className="w-full flex flex-col justify-stretch relative bg-white p-4 pt-20">
          <div className="relative mb-40 text-center">
            <p className="text-6xl text-black mb-16">Sponsors</p>
            <div className="flex flex-col items-center">
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
                      className="w-96"
                    />
                    <p className="text-gray-800 text-sm">
                      {sponsor.attributes.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
        <main className="w-full flex flex-col justify-stretch relative bg-white p-4 pt-20 border-t-4 border-black">

          <div className="relative mb-40 text-center">
            <p className="text-6xl text-black mb-16">Partenaires</p>
            <div className="flex flex-col items-center">
              <div className="flex justify-center p-4 gap-4 flex-wrap">
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
                      className="w-96"
                    />
                    <p className="text-gray-800 text-sm">
                      {partner.attributes.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};


export default Home;
