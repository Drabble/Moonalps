import React from 'react';
import { IGeneral } from '../types';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

type IProps = {
  general: IGeneral;
};

const Layout: React.FC<IProps> = ({ general }) => {
  return (
    <footer className="flex flex-col justify-center items-center text-white relative  footer">
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
            rgba(0, 0, 0, 0.8), 
            rgba(0, 0, 0, 0.8)
        ),url('/moonalps.jpg')`,
            filter: `grayscale(100%)`,
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
              </a>{' '}
              <br />
              <a href={`tel:${general?.attributes.contactPhone}`}>{general?.attributes.contactPhone}</a>
            </p>
            <div className="flex gap-2 justify-center">
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
            </div>
          </div>
          <p className="text-sm p-4 my-4">{general?.attributes.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
