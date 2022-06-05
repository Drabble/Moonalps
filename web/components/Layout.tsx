import { useState } from "react";
import { IGeneral } from "../types";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";

type IProps = {
  general: IGeneral,
  onScroll?: (_: number) => void;
  children: JSX.Element;
};
const Layout: React.FC<IProps> = ({ general, onScroll, children }) => {
  const [scroll, setScroll] = useState(0);

  const changeScroll = () => {
    setScroll(window.scrollY);
    if (onScroll) onScroll(window.scrollY);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeScroll);
  }

  return (
    <div>
      <div
        className="flex justify-between items-center p-4 bg-menu sticky top-0 w-full z-50  "
        style={{
          background: `rgba(10,10,10,${Math.max(0.6, 1 - scroll / 1000)})`,
        }}
      >
        <div className="text-white">
          <Link href="/">
            <a className="text-primary">
              <Image src={"/logo.svg"} alt="Accueil" height="40rem" width="40rem" />
            </a>
          </Link>
        </div>
        <div className="flex-grow flex gap-2 flex-wrap justify-center text-center text-2xl">
          <Link href="/">
            <a className="text-primary mx-2">
              ACCUEIL
            </a>
          </Link>
          <Link href="/lineup">
            <a className="text-primary mx-2">
              LINEUP
            </a>
          </Link>
          <Link href="/about">
            <a className="text-primary mx-2">
              LE FESTIVAL
            </a>
          </Link>
          <Link href="/tickets">
            <a className="text-primary mx-2">
              BILLETERIE
            </a>
          </Link>
          <Link href="/gallery">
            <a className="text-primary mx-2">
              ANCIENNES EDITIONS
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-primary mx-2">
              CONTACT
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2 text-2xl">
          <a
            href={general?.attributes.youtubeUrl}
            rel="noreferrer"
            target="_blank"
            className="text-primary"
          >
            {" "}
            <FaYoutube />
          </a>
          <a
            href={general?.attributes.instagramUrl}
            rel="noreferrer"
            target="_blank"
            className="text-primary"
          >
            {" "}
            <FaInstagram />
          </a>
          <a
            href={general?.attributes.facebookUrl}
            rel="noreferrer"
            target="_blank"
            className="text-primary"
          >
            {" "}
            <FaFacebook />
          </a>
        </div>
      </div>

      {children}

      <footer className="flex flex-col justify-center items-center bg-black text-white relative bg-menu bg-opacity-90">
        <div className="relative w-full max-w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21990.331813895922!2d6.268520421094685!3d46.452828613988856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c445658efd4a3%3A0x4b2cf936e7b1b5a8!2sBursins!5e0!3m2!1sen!2sch!4v1650235559671!5m2!1sen!2sch"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-96 max-w-full flex flex-col gap-16 p-2 my-16 text-center">
          <div className="flex flex-col gap-2">
            <p>
              Postulations
              <br />
              <a itemProp="email" href={`mailto:${general?.attributes.postulationEmail}`}>
                {general?.attributes.postulationEmail}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              Contact
              <br />
              <a itemProp="email" href={`mailto:${general?.attributes.contactEmail}`}>
                {general?.attributes.contactEmail}
              </a>{" "}
              <br />
              <a href={`tel:${general?.attributes.contactPhone}`}>{general?.attributes.contactPhone}</a>
            </p>
            <div className="flex gap-2 justify-center">
              <a
                href={general?.attributes.youtubeUrl}
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <FaYoutube />
              </a>
              <a
                href={general?.attributes.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <FaInstagram />
              </a>
              <a
                href={general?.attributes.facebookUrl}
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm p-4 my-4">{general?.attributes.copyright}</p>
      </footer>
    </div>
  );
};

export default Layout;
