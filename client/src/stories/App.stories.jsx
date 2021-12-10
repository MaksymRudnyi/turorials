import React from 'react';
import moxios from 'moxios'

import App  from '../App';
import data from './data';

moxios.install();

moxios.stubRequest('/user?ID=12345', {
  status: 200,
  responseText: data
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App',
  component: App,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'App',
};
