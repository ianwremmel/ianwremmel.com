import type {Meta} from '@storybook/react';

import Index from './route';

const meta: Meta<typeof Index> = {
  component: Index,
  title: 'Pages/Index'
};

export default meta;

const Template = () => <Index />;

export const Default = Template.bind({});
