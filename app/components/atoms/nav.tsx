import cx from 'classnames';
import type {HTMLProps, PropsWithChildren} from 'react';
import {createContext} from 'react';

export const LandmarkContext = createContext(false);

export const NavContext = createContext(false);

export interface LandmarkNavProps extends HTMLProps<HTMLElement> {
  landmark: true;
}

export interface ListNavProps extends HTMLProps<HTMLUListElement> {
  landmark?: false;
}

export type NavProps = LandmarkNavProps | ListNavProps;

export const Nav = ({
  children,
  className,
  landmark = false,
  ...rest
}: PropsWithChildren<NavProps>) => {
  const Component = landmark ? 'nav' : 'ul';
  return (
    <NavContext.Provider value={true}>
      <LandmarkContext.Provider value={landmark}>
        {/* @ts-expect-error - tsc can't tell which component type props is */}
        <Component className={cx('nav', className)} {...rest}>
          {children}
        </Component>
      </LandmarkContext.Provider>
    </NavContext.Provider>
  );
};
