import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

type IProps = {
  pictures: any[];
};

const Images = ({ pictures }: IProps) => {
  return (
    <div className="w-full">
      <Gallery withDownloadButton withCaption>
        <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {pictures.map((picture) => (
            <Item
              key={picture.id}
              original={picture.attributes.url}
              thumbnail={picture.attributes.formats.thumbnail.url}
              alt={picture.attributes.caption}
              width={picture.attributes.width}
              height={picture.attributes.height}
            >
              {({ ref, open }) => (
                <img style={{ cursor: 'pointer' }} src={picture.attributes.url} ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} />
              )}
            </Item>
          ))}
        </Masonry>
      </Gallery>
    </div>
  );
};
export default Images;
