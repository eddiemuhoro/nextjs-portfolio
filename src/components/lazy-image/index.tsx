import Image from 'next/image';
import { useState, Fragment, useEffect } from 'react';

/**
 * LazyImage component.
 *
 * @param {string} placeholder The placeholder image URL.
 * @param {string} src The image URL.
 * @param {string} alt The alt text for the image.
 * @param {number} width The width of the image.
 * @param {number} height The height of the image.
 * @param {object} rest Additional props for the image element.
 *
 * @returns {ReactElement} The LazyImage component.
 */
const LazyImage: React.FC<{
  placeholder: React.ReactElement;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}> = ({
  placeholder,
  src,
  alt,
  width = 500,
  height = 500,
  className,
  ...rest
}): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new window.Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  return (
    <Fragment>
      {loading ? (
        placeholder
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{ width: '100%', height: 'auto' }}
          {...rest}
        />
      )}
    </Fragment>
  );
};

export default LazyImage;
