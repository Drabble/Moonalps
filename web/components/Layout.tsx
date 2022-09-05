import React, { useEffect } from 'react';
import { useState } from 'react';
import { IBand, IGallery, IGeneral } from '../types';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Footer from './Footer';

type IProps = {
  general: IGeneral;
  bands: IBand[];
  galleries: IGallery[];
  onScroll?: (_: number) => void;
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  inverse: boolean;
};

const Layout: React.FC<IProps> = ({ general, bands, galleries, onScroll, children, inverse }) => {
  const [scroll, setScroll] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const [galleryYears, setGalleryYears] = useState(
    [...new Set(galleries.map((gallery: IGallery) => gallery.attributes.year))].sort((a: number, b: number) => b - a)
  );
  const [bandYears, setBandYears] = useState([...new Set(bands.map((band: IBand) => band.attributes.year))].sort((a: number, b: number) => b - a));

  const changeScroll = () => {
    setScroll(window.scrollY);
    if (onScroll) onScroll(window.scrollY);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeScroll);
  }

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 px-2 md:px-4 py-2.5 rounded bg-dark-900`}
        style={{
          background: `rgba(6, 26, 33, ${Math.min(scroll / 5, 1.0)})`,
        }}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a>
              <Image src={'/logo.svg'} alt="Accueil" height="40rem" width="40rem" />
            </a>
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{ filter: inverse ? `invert(${Math.max(1 - scroll / 5, 0.0)})` : `` }}
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3  rounded-lg md:hidden ocus:outline-none focus:ring-2  text-dark-200 hover:bg-dark-900 focus:ring-dark-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${!showMenu ? 'hidden' : 'bg-dark-900 rounded p-4'}`}
            style={{ filter: inverse ? `invert(${Math.max(1 - scroll / 5, 0.0)})` : `` }}
          >
            <ul className="list-none ml-0 flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium text-left text-lg">
              <li>
                <Link href="/">
                  <a>ACCUEIL</a>
                </Link>
              </li>
              <li>
                <div className="dropdown relative">
                  <button className="font-medium text-dark-200">LINEUP</button>
                  <div className="z-50 dropdown-menu absolute hidden">
                    <ul className="list-none ml-0 bg-dark-900 border-4 border-dark-800 mt-2">
                      {bandYears.map((year) => (
                        <li className="" key={year}>
                          <Link href={`/lineup/${year}`}>
                            <a className="block p-4 w-full">{year}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown relative">
                  <button className="font-medium text-dark-200">LE FESTIVAL</button>
                  <div className="z-50 dropdown-menu absolute hidden">
                    <ul className="list-none ml-0 bg-dark-900 border-4 border-dark-800 mt-2">
                      <li>
                        <Link href="/about">
                          <a className="block p-4 w-full">À PROPOS</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/info">
                          <a className="block p-4 w-full">INFOS PRATIQUES</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/map">
                          <a className="block p-4 w-full">PLAN DU FESTIVAL</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a className="block p-4 w-full">CONTACT</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {general?.attributes.enableTickets && (
                <li>
                  <Link href="/tickets">
                    <a>BILLETTERIE</a>
                  </Link>
                </li>
              )}
              <li>
                <div className="dropdown relative">
                  <button className="font-medium text-dark-200">GALERIE</button>
                  <div className="z-50 dropdown-menu absolute hidden">
                    <ul className="list-none ml-0 bg-dark-900 border-4 border-dark-800 mt-2">
                      {galleryYears.map((year) => (
                        <li className="" key={year}>
                          <Link href={`/galleries/${year}`}>
                            <a className="block p-4 w-full">{year}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="flex justify-start mt-4 mb-4 items-center gap-2 text-xl">
                <a href={general?.attributes.youtubeUrl} rel="noreferrer" target="_blank">
                  {' '}
                  <FaYoutube />
                </a>
                <a href={general?.attributes.instagramUrl} rel="noreferrer" target="_blank">
                  {' '}
                  <FaInstagram />
                </a>
                <a href={general?.attributes.facebookUrl} rel="noreferrer" target="_blank">
                  {' '}
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <Footer general={general} />
    </div>
  );
};

export default Layout;
