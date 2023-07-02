import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Layout: React.FC = () => {
  return (
    <footer className="footer">
      {/* FOOTER */}
      <div className="w-full bg-footer bg-cover bg-center">
        <div className="grid sm:grid-cols-2">
          <div>
            <img src="/moonalps.svg" alt="Logo" className="w-72 max-w-72 mt-4 m-auto sm:ml-8" />
          </div>
          <div className="text-center text-white p-16">
            <p className="text-lg font-bold">
              POSTULATIONS
            </p>
            <p>
              <a itemProp="email" href={`mailto:booking@moonalps.ch`}>
                booking@moonalps.ch
              </a>
            </p>
            <p className="text-lg font-bold mt-32">
              EMAIL
            </p>
            <p>
              <a itemProp="email" href={`mailto:info@moonalps.ch`}>
                info@moonalps.ch
              </a>{' '}
              <br />
            </p>

            <div className="flex gap-2 justify-center text-2xl my-2">
              <a href="https://www.youtube.com/channel/UCAq2Ota_y0mhA2islGq7Yxg" rel="noreferrer" target="_blank">
                {' '}
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/moonalps_festival" rel="noreferrer" target="_blank">
                {' '}
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/MoonAlpsFestival/" rel="noreferrer" target="_blank">
                {' '}
                <FaFacebook />
              </a>
            </div>
            <p className="text-sm p-4 my-4">© Moonalps 2023</p>
          </div>
        </div>
      </div>

    </footer >
  );
};

export default Layout;
