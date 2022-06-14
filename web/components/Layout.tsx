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
  const [showMenu, setShowMenu] = useState(false);

  const changeScroll = () => {
    setScroll(window.scrollY);
    if (onScroll) onScroll(window.scrollY);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeScroll);
  }

  return (
    <div>
      <nav className={`fixed top-0 w-full z-50 bg-menu border-gray-200 px-2 md:px-4 py-2.5 rounded`} style={{
        background: `rgba(0, 0, 0, ${Math.min(scroll / 100, 0.8)})`
      }}>
        <div className="flex flex-wrap justify-between items-center mx-auto">

          <Link href="/">
            <a className="text-primary">
              <Image src={"/logo.svg"} alt="Accueil" height="40rem" width="40rem" />
            </a>
          </Link>
          <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3  rounded-lg md:hidden ocus:outline-none focus:ring-2  text-gray-400 hover:bg-black focus:ring-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto ${!showMenu ? 'hidden' : 'bg-black rounded p-4'}`}>
            <ul className="flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium text-left text-primary text-lg">
              <li>
                <Link href="/">
                  <a >
                    ACCUEIL
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lineup">
                  <a >
                    LINEUP
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    LE FESTIVAL
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tickets">
                  <a>
                    BILLETERIE
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a >
                    ANCIENNES EDITIONS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    CONTACT
                  </a>
                </Link>
              </li>
              <li className="flex justify-start mt-4 mb-4 items-center gap-2 text-xl">
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
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      < footer className="flex flex-col justify-center items-center text-white relative bg-menu" >
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
      </footer >
    </div >
  );
};

export default Layout;
