import type {LinkProps} from '../atoms/hyperlink';
import {Hyperlink} from '../atoms/hyperlink';

export interface ImageLinkProps extends LinkProps {
  alt: string;
  href: string;
  src: string;
  title: string;
}

export const ImageLink = ({alt, src, ...rest}: ImageLinkProps) => (
  <Hyperlink {...rest}>
    <img alt={alt} src={src} />
  </Hyperlink>
);
