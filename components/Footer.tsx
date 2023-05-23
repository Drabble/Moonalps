import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Layout: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center relative footer">
      <div className="relative w-full max-w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10995.779475979833!2d6.2944797!3d46.4497894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf9a8081e32006c7!2sMoonAlps%20Festival!5e0!3m2!1sen!2sch!4v1658858359793!5m2!1sen!2sch"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="relative w-full">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background: `linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
        ),url('/moonalps.jpg')`,
            filter: `grayscale(50%)`,
            backgroundPosition: 'center, center',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
          }}
        ></div>

        <div className="w-96 max-w-full flex flex-col gap-16 p-2 my-16 text-center relative m-auto">
          <div className="flex flex-col gap-2">
            <p>
              Postulations
              <br />
              <a itemProp="email" href={`mailto:booking@moonalps.ch`}>
                booking@moonalps.ch
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              Contact
              <br />
              <a itemProp="email" href={`mailto:info@moonalps.ch`}>
                info@moonalps.ch
              </a>{' '}
              <br />
            </p>
            <div className="flex gap-2 justify-center">
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
          </div>
          <p className="text-sm p-4 my-4">© Moonalps 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
