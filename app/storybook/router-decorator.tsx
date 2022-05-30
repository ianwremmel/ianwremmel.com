import type {ComponentType} from 'react';
import {MemoryRouter} from 'react-router';

export function decorateWithRouter({pathname = '/'} = {}) {
  // not a component
  // eslint-disable-next-line react/display-name
  return (Story: ComponentType) => (
    <MemoryRouter initialEntries={[pathname]}>
      <Story />
    </MemoryRouter>
  );
}
