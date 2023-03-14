import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Badge from './Badge';

const Project = ({ title, description, thumbnail, screenshots, stacks, demo }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = screenshots;

  const onClickThumbnail = (e) => {
    e.preventDefault();

    if (screenshots.length > 0) {
      setIsOpen(!isOpen);
    } else {
      window.open(demo, '_blank');
    }
  };

  return (
    <div className="md:w-1/2 md:p-6 my-8 md:my-0">
      <div
        onClick={onClickThumbnail}
        className="w-full overflow-hidden rounded-md transition duration-500 cursor-pointer ease-in-out transform shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1"
      >
        <img
          src={`/${thumbnail}`}
          className="object-cover object-center mx-auto w-full"
        />
      </div>
      <div className="my-6">
        <h1 className="text-dark-green-2 dark:text-light-green font-bold font-sans-overpass tracking-wide text-lg my-2">
          {title}
        </h1>
        <p className="text-gray-500 dark:text-gray-200 font-sans-overpass">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap">
        {stacks.map((stack, i) => (
          <Badge key={i} title={stack} />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageTitle={title}
        />
      )}
    </div>
  );
};

export default Project;
