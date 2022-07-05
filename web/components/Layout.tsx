import { useState } from "react";
import { IGeneral } from "../types";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Footer from "./Footer";

type IProps = {
  general: IGeneral,
  onScroll?: (_: number) => void;
  children: JSX.Element;
  inverse: Boolean
};
const Layout: React.FC<IProps> = ({ general, onScroll, children, inverse }) => {
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
      <nav className={`fixed top-0 w-full z-50 px-2 md:px-4 py-2.5 rounded`} style={{
        background: `rgba(15, 5, 20, ${Math.min(scroll / 100, 1.0)})`
      }}>
        <div className="flex flex-wrap justify-between items-center mx-auto">

          <Link href="/">
            <a>
              <Image src={"/logo.svg"} alt="Accueil" height="40rem" width="40rem" />
            </a>
          </Link>
          <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3  rounded-lg md:hidden ocus:outline-none focus:ring-2  text-dark-200 hover:bg-dark-900 focus:ring-dark-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto ${!showMenu ? 'hidden' : 'bg-dark-900 rounded p-4'}`}>
            <ul className="flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium text-left text-lg">
              <li>
                <Link href="/">
                  <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}>
                    ACCUEIL
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lineup">
                  <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }} >
                    LINEUP
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}>
                    LE FESTIVAL
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tickets">
                  <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}>
                    BILLETERIE
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a  style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}>
                    ANCIENNES EDITIONS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}>
                    CONTACT
                  </a>
                </Link>
              </li>
              <li className="flex justify-start mt-4 mb-4 items-center gap-2 text-xl">
                <a  style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}
                  href={general?.attributes.youtubeUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaYoutube />
                </a>
                <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}
                  href={general?.attributes.instagramUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </a>
                <a style={{filter: inverse ? `invert(${Math.max(1 - scroll / 40 , 0.0)})` : `` }}
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

      <Footer general={general}/>
    </div >
  );
};

export default Layout;
