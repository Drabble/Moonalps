import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IHome, IPartner, ISponsor } from "../types";
import { useState } from "react";
import Layout from "../components/Layout";

const URL = process.env.STRAPIBASEURL;

type IProps = {
  sponsors: ISponsor[];
  partners: IPartner[];
  home: IHome;
};

export async function getStaticProps(context: any) {
  const res = await fetch(`${URL}/api/sponsors?populate=*`);
  console.log(res);
  const { data: sponsors } = await res.json();
  console.log(sponsors);

  const res2 = await fetch(`${URL}/api/partners?populate=*`);
  const { data: partners } = await res2.json();

  const res3 = await fetch(`${URL}/api/home?populate=*`);
  const { data: home } = await res3.json();

  console.log(home);

  return {
    props: { sponsors, partners, home },
  };
};

const Home: NextPage<IProps> = ({ sponsors, partners, home }: IProps) => {
  const [scroll, setScroll] = useState(0);

  return (
    <Layout home={home} onScroll={(value) => setScroll(value)}>
      <div>
        {/*<div className="p-4 my-8 w-full justify-center text-center font-bold">
            <h1>Moonalps Festival</h1>
            <p>Le 9 et 10 septembre 2022</p>
          </div>
          <div className="flex justify-center p-4 mb-16">
            <div className="relative w-96 max-w-full h-96">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/emBjFtxBWq8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            </div>*/}

        <Head>
          <title>Moonalps Festival</title>
          <meta
            name="description"
            content="Moonalps Festival à Bursins, Suisse"
          />
          <link rel="icon" href="/favicon.ico" />
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
              //backgroundImage: `linear-gradient(to bottom, rgba(5,5,5, 0.5), rgba(25,25,25  ,0.5) 80%, rgba(210,210,210, 1)), url('http://127.0.0.1:1337${home?.attributes.cover.data.attributes.url}')`,
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
              {home?.attributes.dates}
            </p>
          </div>
        </div>

        <div className="w-full h-screen bg-transparent"></div>

        <main
          className="w-full flex flex-col justify-stretch relative bg-tertiary"
          style={{ marginTop: "700px", paddingTop: "200px" }}
        >
          <div
            style={{
              background: `url(${`/trees.svg`}) `,
              backgroundPosition: "-300px 0",
              backgroundSize: "900px 700px",
              backgroundRepeat: "repeat-x",
              height: "750px",
              position: "absolute",
              left: 0,
              right: 0,
              top: Math.max(-1700, -600 - (scroll / 3)) + "px",
            }}
          ></div><div
            style={{
              background: `url(${`/trees.svg`}) `,
              backgroundPosition: "1200px",
              backgroundSize: "1500px 700px",
              backgroundRepeat: "repeat-x",
              height: "700px",
              position: "absolute",
              left: 0,
              right: 0,
              top: Math.max(-1100, -500 - (scroll / 5)) + "px",
            }}
          ></div><div
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
          <div className="relative">
            <div className="h-screen text-center">
              <p className="text-6xl text-primary mb-16">
                Une 3<sup>ème</sup> édition sur 2 jours !
              </p>
              <p className="text-4xl text-secondary mb-8">
                C'est 2 fois plus de
              </p>
              <div className="flex flex-wrap justify-center">
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
                    src={"/icons/binchs.svg"}
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
          </div>
        </main>
        <main className="w-full flex flex-col justify-stretch relative bg-tertiary">

          <div
            style={{
              background: `url(${`/trees.svg`}) `,
              backgroundPosition: "top",
              backgroundSize: "1500px 700px",
              backgroundRepeat: "repeat-x",
              height: "700px",
            }}
          ></div>
          <div className="h-screen relative">
            <div className="text-center">
              <p className="text-6xl text-primary mb-16">Sponsors</p>
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
                        src={`http://127.0.0.1:1337${sponsor.attributes.logo.data.attributes.url}`}
                        className="w-80"
                      />
                      <p className="text-primary text-sm">
                        {sponsor.attributes.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <main className="w-full flex flex-col justify-stretch relative bg-tertiary">

          <div
            style={{
              background: `url(${`/trees.svg`}) `,
              backgroundPosition: "top",
              backgroundSize: "1500px 700px",
              backgroundRepeat: "repeat-x",
              height: "700px",
            }}
          ></div>
          <div className="h-screen relative">
            <div className="text-center">
              <p className="text-6xl text-primary mb-16">Partenaires</p>
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
                        src={`http://127.0.0.1:1337${partner.attributes.logo.data.attributes.url}`}
                        className="w-80"
                      />
                      <p className="text-primary text-sm">
                        {partner.attributes.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};


export default Home;
