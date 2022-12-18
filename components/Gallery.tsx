import React from 'react';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

type IProps = {
  pictures: any[];
};

const Images = ({ pictures }: IProps) => {
  return (
    <div className="w-full">
      <Gallery withDownloadButton>
        <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {pictures.map((picture, i) => (
            <Item key={i} original={picture} width="auto" height="auto">
              {({ ref, open }) => <img style={{ cursor: 'pointer' }} src={picture} ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} />}
            </Item>
          ))}
        </Masonry>
      </Gallery>
    </div>
  );
};
export default Images;
